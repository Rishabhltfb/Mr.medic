import 'package:flutter/cupertino.dart';

class User {
  final String name;
  final String username;
  final String userId;
  final String email;
  final String phone;
  final String avatar;
  final String coverPic;
  final String dateOfJoining;
  final String dateOfBirth;
  final String bio;
  final List<dynamic> followers;
  final List<dynamic> followings;
  final String location;
  final String token;
  User({
    @required this.name,
    @required this.username,
    @required this.userId,
    @required this.email,
    @required this.phone,
    @required this.avatar,
    @required this.followers,
    @required this.followings,
    @required this.coverPic,
    @required this.dateOfJoining,
    @required this.dateOfBirth,
    @required this.bio,
    @required this.location,
    this.token,
  });
}
