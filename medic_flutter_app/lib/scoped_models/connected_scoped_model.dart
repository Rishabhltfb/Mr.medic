import 'package:medic_flutter_app/models/doctor.dart';
import 'package:medic_flutter_app/models/patient.dart';

import '../api/keys.dart';
import 'dart:io';
import 'package:scoped_model/scoped_model.dart';
// import '../models/tweet.dart';

class ConnectedModel extends Model {
  List<Doctor> alldoctorList = [];
  List<Doctor> citydoctorList = [];
  final uri = ApiKeys.uri;
  bool isLoading = false;
  bool isPatient = true;
  File file = null;
  int report_index = null;
  Patient doctor_client = null;
  Doctor doctor_viewer = null;
  Doctor view_doctor = null;
}
