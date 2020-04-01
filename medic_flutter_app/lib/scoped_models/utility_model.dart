import 'dart:io';
import 'dart:convert';
import 'dart:async';
import 'package:http_parser/http_parser.dart';
import 'package:medic_flutter_app/models/patient.dart';
import 'package:mime/mime.dart';
import 'package:http/http.dart' as http;
import './connected_scoped_model.dart';

class UtilityModel extends ConnectedModel {
  Future<Null> imageUpload(String id, File image, String mode) async {
    isLoading = true;
    notifyListeners();
    print('Inside imageUpload : ');
    // Find the mime type of the selected file by looking at the header bytes of the file
    final mimeTypeData =
        lookupMimeType(image.path, headerBytes: [0xFF, 0xD8]).split('/');
    var imageUploadRequest = null;
    var file = null;
    // Intilize the multipart request
    if (mode == 'tweet') {
      imageUploadRequest = http.MultipartRequest(
          'PATCH', Uri.parse('${uri}api/tweets/media/${id}'));
      // Attach the file in the request
      file = await http.MultipartFile.fromPath('mediaLinks', image.path,
          contentType: MediaType(mimeTypeData[0], mimeTypeData[1]));
    } else {
      imageUploadRequest = http.MultipartRequest(
          'PATCH', Uri.parse('${uri}api/users/avatar/${id}'));
      // Attach the file in the request
      file = await http.MultipartFile.fromPath('avatar', image.path,
          contentType: MediaType(mimeTypeData[0], mimeTypeData[1]));
    }

    // Explicitly pass the extension of the image with request body
    // Since image_picker has some bugs due which it mixes up
    // image extension with file name like this filenamejpge
    // Which creates some problem at the server side to manage
    // or verify the file extension
    imageUploadRequest.fields['ext'] = mimeTypeData[1];
    imageUploadRequest.files.add(file);
    try {
      final streamedResponse = await imageUploadRequest.send();
      final response = await http.Response.fromStream(streamedResponse);
      print(response.statusCode);
      if (response.statusCode != 200 && response.statusCode != 201) {
        final Map<String, dynamic> responseData = json.decode(response.body);
        print(responseData);
      }
      isLoading = false;
      notifyListeners();
    } catch (error) {
      print('Error in uploading image: ' + error);
      isLoading = false;
      notifyListeners();
      return null;
    }
  }

  Future<Null> fetchPatientProfile(String doctorId, String result) async {
    isLoading = true;
    notifyListeners();
    print('Inside fetchPatientProfile : !!!!!!!!!!!');

    List<String> arr = result.split(',');
    String userId = arr[0];
    String token = arr[1];
    return await http
        .get(
      '${uri}api/patients/patient/$userId',
    )
        .then<Null>((http.Response response) {
      if (response.statusCode == 200) {
        Map<String, dynamic> responseData = json.decode(response.body);
        Patient patient = new Patient(
          userId: responseData['_id'],
          token: token,
          avatar: responseData['avatar'],
          email: responseData['email'],
          name: responseData['name'],
          // phone: responseData['phone'],
          address: responseData['address'],
          age: responseData['age'],
          city: responseData['city'],
          gender: responseData['gender'],
          reports: responseData['reports'],
        );
        doctor_client = patient;
        print('doctor_client name is :' + patient.name);
        createReport(doctorId, token);
        isLoading = false;
        notifyListeners();
      }

      isLoading = false;
      notifyListeners();
    }).catchError((error) {
      isLoading = false;
      notifyListeners();
      print("Fetch Authenticated User Error: ${error.toString()}");
      return;
    });
  }

  Future<Null> updateReport() async {
    print('Inside updatereport : ');
  }

  Future<Null> createReport(String doctorId, String token) async {
    isLoading = true;
    notifyListeners();
    print('Inside create report : ');
    Map<String, dynamic> req = {'doctorId': doctorId};
    try {
      http.Response response = await http.post('${uri}api/reports/report',
          body: json.encode(req),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          });
      if (response.statusCode == 200) {
        print('Report Created successfully!');
        isLoading = false;
        notifyListeners();
      }

      isLoading = true;
      notifyListeners();
    } catch (error) {
      print("Error in creating report:  " + error.toString());
      isLoading = false;
      notifyListeners();
      return;
    }
  }

  String parseImage(String imageAddress) {
    String avatar;
    if (imageAddress.contains('\\')) {
      List<String> a = imageAddress.split('\\');
      avatar = a[0] + '/' + a[1];
    } else {
      avatar = imageAddress;
    }
    return avatar;
  }

  void setImage(File image) {
    print('Inside setImage' + image.toString());
    file = image;
    print('setImageExit');
  }

  File getImage() {
    print('Inside get Image: ' + file.toString());
    return file;
  }

  String getKey() {
    print('Inside get Key: ');
    return uri;
  }

  void setPatient(bool choice) {
    isPatient = choice;
  }

  bool getisPatient() {
    print('Inside get isPatient: ');
    return isPatient;
  }

  void setReportIndex(int index) {
    report_index = index;
  }

  int getReportIndex() {
    print('Inside get report index: ');
    return report_index;
  }
}
