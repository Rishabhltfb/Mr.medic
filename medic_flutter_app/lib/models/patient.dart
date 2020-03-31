import 'package:flutter/cupertino.dart';

class Patient {
  final String name;
  final String userId;
  final String email;
  // final String phone;
  final String avatar;
  final int age;
  final List<dynamic> reports;
  final String address;
  final String city;
  final String gender;
  final String token;
  Patient({
    @required this.name,
    @required this.userId,
    @required this.email,
    // @required this.phone,
    @required this.avatar,
    @required this.reports,
    @required this.age,
    @required this.address,
    @required this.gender,
    @required this.city,
    this.token,
  });
}
