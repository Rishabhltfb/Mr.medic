import 'package:flutter/material.dart';
import 'package:medic_flutter_app/screens/auth_screen.dart';
import 'package:medic_flutter_app/screens/doctor_profile.dart';
import 'package:medic_flutter_app/screens/find_doctor.dart';
import 'package:medic_flutter_app/screens/patient_doctor.dart';
import 'package:medic_flutter_app/screens/profile_screen.dart';
import 'package:medic_flutter_app/screens/qr_generator.dart';
import 'package:medic_flutter_app/screens/report_screen.dart';
import 'package:medic_flutter_app/screens/scan_qr.dart';
import 'package:scoped_model/scoped_model.dart';
import 'package:flutter/rendering.dart';

import './screens/splash_screen.dart';
import './screens/home_screen.dart';
import './screens/error_screen.dart';
import './scoped_models/main_scoped_model.dart';

void main() {
  // debugPaintSizeEnabled = true;
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final MainModel _model = MainModel();
  // bool _isAuthenticated = false;

  @override
  void initState() {
    _model.fetchDoctorsList();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return ScopedModel<MainModel>(
      model: _model,
      child: MaterialApp(
        theme: ThemeData(
          primaryColor: Color(0xff0079f5),
          accentColor: Colors.blue,
        ),
        debugShowCheckedModeBanner: false,
        routes: {
          '/': (BuildContext context) => SplashPage(_model),
          '/choose': (BuildContext context) => ChooseScreen(_model),
          '/auth': (BuildContext context) => AuthScreen(_model),
          '/home': (BuildContext context) => HomeScreen(_model),
          '/profile': (BuildContext context) => ProfileScreen(_model),
          '/dprofile': (BuildContext context) => DocrtorProfileScreen(_model),
          '/findDoctor': (BuildContext context) => FindDoctor(_model),
          '/qr': (BuildContext context) => QrCode(_model),
          '/qrscan': (BuildContext context) => QrScan(_model),
          '/error': (BuildContext context) => ErrorScreen(),
          '/report': (BuildContext context) => ReportScreen(_model),
        },
      ),
    );
  }
}
