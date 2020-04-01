import 'dart:convert';
import 'dart:async';

import 'package:http/http.dart' as http;
import '../models/patient.dart';
import './connected_scoped_model.dart';

class PatientModel extends ConnectedModel {
  Patient authenticatedPatient = null;
  Patient get getAuthenticatedPatient {
    print(authenticatedPatient);
    return authenticatedPatient;
  }

  // Future<Null> getPatient() async {
  //   isLoading = true;
  //   notifyListeners();
  //   print('Inside get Patient: ' + isLoading.toString());
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

  Future<Null> patientLogin(String email, String password) async {
    isLoading = true;
    notifyListeners();
    print('Inside Plogin : ');
    Map<String, dynamic> req = {'email': email, 'password': password};
    try {
      http.Response response = await http.post('${uri}api/patients/login',
          body: json.encode(req),
          headers: {'Content-Type': 'application/json'});
      if (response.statusCode == 200) {
        print('Inside plogin success');
        final Map<String, dynamic> res = json.decode(response.body);
        await setAuthenticatedPatient(res['patientId'], res['token']);
      }
      isLoading = false;
      notifyListeners();
    } catch (error) {
      print("Error in Plogin:  " + error.toString());
      isLoading = false;
      notifyListeners();
      return;
    }
  }

  Future<Null> setAuthenticatedPatient(String userId, String token) async {
    isLoading = true;
    notifyListeners();
    print('Inside setAuthenticatedPatient : ');
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
        authenticatedPatient = patient;
        isLoading = false;
        notifyListeners();
      }
    }).catchError((error) {
      isLoading = false;
      notifyListeners();
      print("Fetch Authenticated User Error: ${error.toString()}");
      return;
    });
  }
}
