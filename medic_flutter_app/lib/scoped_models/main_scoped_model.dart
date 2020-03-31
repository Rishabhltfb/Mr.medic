import 'package:medic_flutter_app/scoped_models/doctor_model.dart';
import 'package:scoped_model/scoped_model.dart';

import './connected_scoped_model.dart';
import './patient_model.dart';
import './doctor_model.dart';
import './utility_model.dart';

class MainModel extends Model
    with ConnectedModel, PatientModel, DoctorModel, UtilityModel {}
