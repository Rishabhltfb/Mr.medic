import 'package:flutter/material.dart';
import 'dart:async';

import '../scoped_models/main_scoped_model.dart';
import '../helpers/dimensions.dart';

class SplashPage extends StatefulWidget {
  final MainModel model;
  SplashPage(this.model);

  @override
  State<StatefulWidget> createState() {
    return _SplashPageState(model);
  }
}

class _SplashPageState extends State<SplashPage> {
  final MainModel model;
  _SplashPageState(this.model);

  @override
  void initState() {
    super.initState();
    Timer(Duration(seconds: 3), () {
      Navigator.pushReplacementNamed(context, "/home");
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).primaryColor,
      body: Container(
        child: Center(
          child: Container(
            height: getDeviceHeight(context) * 0.30,
            width: getDeviceWidth(context) * 0.30,
            child: Image.asset('assets/icon.png'),
          ),
        ),
      ),
    );
  }
}
