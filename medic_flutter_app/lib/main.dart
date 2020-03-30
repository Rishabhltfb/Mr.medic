import 'package:flutter/material.dart';
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

  // @override
  // void initState() {
  //   _model.login();
  //   super.initState();
  // }

  @override
  Widget build(BuildContext context) {
    return ScopedModel<MainModel>(
      model: _model,
      child: MaterialApp(
        theme: ThemeData(
          primaryColor: Color(0xff00ACEE),
          accentColor: Colors.blue,
        ),
        debugShowCheckedModeBanner: false,
        routes: {
          '/': (BuildContext context) => SplashPage(_model),
          // '/auth': (BuildContext context) => AuthPage(_model),
          '/home': (BuildContext context) => HomeScreen(),
          '/error': (BuildContext context) => ErrorScreen(),
        },
      ),
    );
  }
}
