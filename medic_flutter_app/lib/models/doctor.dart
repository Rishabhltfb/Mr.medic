import 'package:flutter/cupertino.dart';

class Doctor {
  final String name;
  final String userId;
  final String email;
  final String phone;
  final String avatar;
  final String clinickAddress;
  final String specialization;
  final String city;
  final String gender;
  final String token;
  Doctor({
    @required this.name,
    @required this.userId,
    @required this.specialization,
    @required this.email,
    @required this.clinickAddress,
    @required this.phone,
    @required this.avatar,
    @required this.gender,
    @required this.city,
    this.token,
  });
}
