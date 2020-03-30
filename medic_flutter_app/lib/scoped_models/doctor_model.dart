import 'dart:convert';
import 'dart:async';

import 'package:http/http.dart' as http;
import '../models/user.dart';
import './connected_scoped_model.dart';

class DoctorModel extends ConnectedModel {
  User authenticatedUser;
  User get getAuthenticatedUser {
    return authenticatedUser;
  }

  Future<Null> getUsers() async {
    isLoading = true;
    notifyListeners();
    print('Inside get : ' + isLoading.toString());
    try {
      http.Response response = await http.get('${uri}api/users');
      if (response.statusCode == 200) {
        print(response);
      }
    } catch (error) {
      print("Error in login:  " + error.toString());
      return;
    }
  }

  Future<Null> login() async {
    isLoading = true;
    notifyListeners();
    print('Inside login : ' + isLoading.toString());
    Map<String, dynamic> req = {
      'email': 'rishabh@email.com',
      'password': '12345'
    };
    try {
      http.Response response = await http.post('${uri}api/users/login',
          body: json.encode(req),
          headers: {'Content-Type': 'application/json'});
      if (response.statusCode == 200) {
        final Map<String, dynamic> res = json.decode(response.body);
        await setAuthenticatedUser(res['userId'], res['token']);
        isLoading = false;
        notifyListeners();
      }
    } catch (error) {
      print("Error in login:  " + error.toString());
      isLoading = false;
      notifyListeners();
      return;
    }
  }

  Future<Null> setAuthenticatedUser(String userId, String token) async {
    // isLoading = true;
    // notifyListeners();
    print('Inside setAuthenticatedUser : ' + isLoading.toString());
    return await http
        .get(
      '${uri}api/users/$userId',
    )
        .then<Null>((http.Response response) {
      if (response.statusCode == 200) {
        Map<String, dynamic> responseData = json.decode(response.body)['user'];
        User user = new User(
            userId: responseData['_id'],
            token: token,
            avatar: responseData['avatar'],
            bio: responseData['bio'],
            coverPic: responseData['coverPic'],
            dateOfBirth: responseData['dateOfJoining'],
            dateOfJoining: responseData['dateOfJoining'],
            email: responseData['email'],
            followers: responseData['followers'],
            followings: responseData['followings'],
            location: '',
            name: responseData['name'],
            phone: '',
            username: responseData['username']);
        authenticatedUser = user;
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
