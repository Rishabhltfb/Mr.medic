import 'dart:convert';
import 'dart:async';

import 'package:http/http.dart' as http;
import '../models/doctor.dart';
import './connected_scoped_model.dart';

class DoctorModel extends ConnectedModel {
  Doctor authenticatedDoctor;
  Doctor get getAuthenticatedDoctor {
    return authenticatedDoctor;
  }

  // Future<Null> getDoctor() async {
  //   isLoading = true;
  //   notifyListeners();
  //   print('Inside get Doctor: ' + isLoading.toString());
  //   try {
  //     http.Response response = await http.get('${uri}api/users');
  //     if (response.statusCode == 200) {
  //       print(response);
  //     }
  //   } catch (error) {
  //     print("Error in login:  " + error.toString());
  //     return;
  //   }
  // }

  Future<Null> doctorLogin(String email, String password) async {
    isLoading = true;
    notifyListeners();
    print('Inside Dlogin : ' + isLoading.toString());
    Map<String, dynamic> req = {'email': email, 'password': password};
    try {
      http.Response response = await http.post('${uri}api/doctors/login',
          body: json.encode(req),
          headers: {'Content-Type': 'application/json'});
      if (response.statusCode == 200) {
        final Map<String, dynamic> res = json.decode(response.body);
        await setAuthenticatedDoctor(res['doctorId'], res['token']);
        isLoading = false;
        notifyListeners();
      }
    } catch (error) {
      print("Error in Plogin:  " + error.toString());
      isLoading = false;
      notifyListeners();
      return;
    }
  }

  Future<Null> setAuthenticatedDoctor(String userId, String token) async {
    // isLoading = true;
    // notifyListeners();
    print('Inside setAuthenticatedPatient : ' + isLoading.toString());
    return await http
        .get(
      '${uri}api/doctors/doctor/$userId',
    )
        .then<Null>((http.Response response) {
      if (response.statusCode == 200) {
        Map<String, dynamic> responseData = json.decode(response.body);
        Doctor doctor = new Doctor(
          userId: responseData['_id'],
          token: token,
          avatar: responseData['avatar'],
          email: responseData['email'],
          name: responseData['name'],
          phone: responseData['phone'],
          address: responseData['address'],
          age: responseData['age'],
          city: responseData['city'],
          gender: responseData['gender'],
          reports: responseData['reports'],
        );
        authenticatedDoctor = doctor;
        // isLoading = false;
        // notifyListeners();
      }
    }).catchError((error) {
      // isLoading = false;
      // notifyListeners();
      print("Fetch Authenticated User Error: ${error.toString()}");
      return;
    });
  }
}
