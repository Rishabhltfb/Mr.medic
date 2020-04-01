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

  Future<Null> fetchDoctorsList() async {
    isLoading = true;
    notifyListeners();
    print('Inside fetch Doctors List: ');
    try {
      http.Response response = await http.get('${uri}api/doctors/all');
      if (response.statusCode == 200) {
        print('Successfully fetched doctor list');
        final List<Doctor> fetchedDoctorList = [];
        final Map<String, dynamic> doctorListData = json.decode(response.body);
        if (doctorListData == null) {
          isLoading = false;
          notifyListeners();
          return;
        }
        doctorListData['doctors'].forEach(
          (dynamic responseData) {
            Doctor doctor = new Doctor(
              userId: responseData['_id'],
              avatar: responseData['avatar'],
              email: responseData['email'],
              name: responseData['name'],
              phone: responseData['phone'],
              city: responseData['city'],
              gender: responseData['gender'],
              clinickAddress: responseData['clinickAddress'],
              specialization: responseData['specialization'],
            );
            fetchedDoctorList.add(doctor);
          },
        );
        alldoctorList = fetchedDoctorList;
      }

      isLoading = false;
      notifyListeners();
    } catch (error) {
      print("Error in login:  " + error.toString());
      isLoading = false;
      notifyListeners();
      return;
    }
  }

  Future<Null> fetchCityDoctorsList(String city) async {
    isLoading = true;
    notifyListeners();
    print('Inside fetch City Doctors List: ');
    try {
      http.Response response = await http.get('${uri}api/doctors/city/$city');
      if (response.statusCode == 200) {
        print('Successfully fetched city doctor list');
        final List<Doctor> fetchedDoctorList = [];
        final Map<String, dynamic> citydoctorListData =
            json.decode(response.body);
        if (citydoctorListData == null) {
          isLoading = false;
          notifyListeners();
          return;
        }
        citydoctorListData['doctors'].forEach(
          (dynamic responseData) {
            Doctor doctor = new Doctor(
              userId: responseData['_id'],
              avatar: responseData['avatar'],
              email: responseData['email'],
              name: responseData['name'],
              phone: responseData['phone'],
              city: responseData['city'],
              gender: responseData['gender'],
              clinickAddress: responseData['clinickAddress'],
              specialization: responseData['specialization'],
            );
            fetchedDoctorList.add(doctor);
          },
        );
        citydoctorList = fetchedDoctorList;
      }
      isLoading = false;
      notifyListeners();
    } catch (error) {
      print("Error in login:  " + error.toString());
      isLoading = false;
      notifyListeners();
      return;
    }
  }

  Future<Null> doctorLogin(String email, String password) async {
    isLoading = true;
    notifyListeners();
    print('Inside Dlogin : ');
    Map<String, dynamic> req = {'email': email, 'password': password};
    try {
      http.Response response = await http.post('${uri}api/doctors/login',
          body: json.encode(req),
          headers: {'Content-Type': 'application/json'});
      if (response.statusCode == 200) {
        final Map<String, dynamic> res = json.decode(response.body);
        print('Dlogin res');
        await setAuthenticatedDoctor(res['doctorId'], res['token']);
        notifyListeners();
      }

      isLoading = false;
      notifyListeners();
    } catch (error) {
      print("Error in Dlogin:  " + error.toString());
      isLoading = false;
      notifyListeners();
      return;
    }
  }

  void loadDoctorProfile(Doctor doctor) {
    if (isPatient) {
      view_doctor = doctor;
    } else {
      doctor_viewer = doctor;
    }
    print(doctor.email);
  }

  Future<Null> setAuthenticatedDoctor(String userId, String token) async {
    isLoading = true;
    notifyListeners();
    print('Inside setAuthenticatedDoctor : ');
    return await http
        .get(
      '${uri}api/doctors/find/$userId',
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
            city: responseData['city'],
            gender: responseData['gender'],
            clinickAddress: responseData['clinickAddress'],
            specialization: responseData['specialization']);
        authenticatedDoctor = doctor;
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
