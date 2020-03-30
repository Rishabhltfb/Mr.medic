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
      Navigator.pushReplacementNamed(context, "/choose", arguments: model);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).primaryColor,
      body: Container(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Container(
                height: getDeviceHeight(context) * 0.50,
                width: getDeviceWidth(context) * 0.50,
                child: Image.asset('assets/doctor.png'),
              ),
              SizedBox(height: getDeviceHeight(context) * 0.01),
              Text(
                'Mr. medic',
                style: TextStyle(
                    color: Colors.white,
                    fontSize: getDeviceHeight(context) * 0.05),
              ),
              SizedBox(height: getDeviceHeight(context) * 0.01),
              Text(
                'We are here to help',
                style: TextStyle(
                    color: Colors.white,
                    fontSize: getDeviceHeight(context) * 0.03),
              )
            ],
          ),
        ),
      ),
    );
  }
}
