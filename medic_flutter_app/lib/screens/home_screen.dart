import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
// import 'package:flutter/scheduler.dart';
import 'package:scoped_model/scoped_model.dart';
// import 'dart:collection';

import 'package:medic_flutter_app/helpers/my_flutter_app_icons.dart';
import '../scoped_models/main_scoped_model.dart';
import 'package:medic_flutter_app/helpers/dimensions.dart';
import '../api/keys.dart';

class HomeScreen extends StatefulWidget {
  final MainModel model;

  HomeScreen(this.model);
  @override
  State<StatefulWidget> createState() {
    return _HomeScreenState(model);
  }
}

class _HomeScreenState extends State<HomeScreen> {
  final MainModel model;
  final uri = ApiKeys.uri;

  _HomeScreenState(this.model);
  int bottom_navbar_index = 0;

  final GlobalKey<ScaffoldState> _scaffoldKey = new GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
  }

  Widget body() {
    return Container(
      color: Color(0xffeff1f3),
      child: Stack(
        children: <Widget>[
          Column(
            children: <Widget>[
              Container(
                color: Theme.of(context).primaryColor.withOpacity(0.7),
                height: getDeviceHeight(context) * 0.4,
                child: Image.asset(
                  'assets/homepage_background.jpg',
                  fit: BoxFit.cover,
                ),
              ),
            ],
          ),
          Container(
              child: Column(
            children: <Widget>[
              SizedBox(height: getDeviceHeight(context) * 0.35),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  GestureDetector(
                    onTap: () {
                      widget.model.isPatient
                          ? Navigator.pushNamed(context, '/profile')
                          : Navigator.pushNamed(context, '/dprofile');
                    },
                    child: Container(
                      height: getDeviceHeight(context) * 0.18,
                      width: getDeviceWidth(context) * 0.4,
                      padding: EdgeInsets.all(30),
                      decoration: BoxDecoration(
                        boxShadow: [
                          new BoxShadow(
                            color: Colors.blueGrey,
                            blurRadius: 10.0,
                          ),
                        ],
                        color: Colors.white,
                        borderRadius: BorderRadius.all(
                          Radius.circular(10),
                        ),
                      ),
                      // color: Colors.white,
                      child: Column(
                        children: <Widget>[
                          Padding(
                            padding: const EdgeInsets.only(top: 5, bottom: 10),
                            child: Icon(
                              MyFlutterApp.user,
                              color: Colors.black87,
                            ),
                          ),
                          Text('Profile')
                        ],
                      ),
                    ),
                  ),
                  GestureDetector(
                    onTap: () {
                      Navigator.pushNamed(context, '/error');
                    },
                    child: Container(
                      height: getDeviceHeight(context) * 0.18,
                      width: getDeviceWidth(context) * 0.4,
                      padding: EdgeInsets.all(30),
                      decoration: BoxDecoration(
                        boxShadow: [
                          new BoxShadow(
                            color: Colors.blueGrey,
                            blurRadius: 10.0,
                          ),
                        ],
                        color: Colors.white,
                        borderRadius: BorderRadius.all(
                          Radius.circular(10),
                        ),
                      ),
                      child: Column(
                        children: <Widget>[
                          Padding(
                            padding: const EdgeInsets.only(top: 5, bottom: 10),
                            child: Icon(
                              MyFlutterApp.covid__2_,
                              color: Colors.red,
                              size: 30,
                            ),
                          ),
                          Text('Covid 19')
                        ],
                      ),
                    ),
                  ),
                ],
              ),
              SizedBox(height: getDeviceHeight(context) * 0.05),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  GestureDetector(
                    onTap: () {
                      Navigator.pushNamed(context, '/findDoctor');
                    },
                    child: Container(
                      height: getDeviceHeight(context) * 0.18,
                      width: getDeviceWidth(context) * 0.4,
                      padding: EdgeInsets.all(30),
                      decoration: BoxDecoration(
                        boxShadow: [
                          new BoxShadow(
                            color: Colors.blueGrey,
                            blurRadius: 10.0,
                          ),
                        ],
                        color: Colors.white,
                        borderRadius: BorderRadius.all(
                          Radius.circular(10),
                        ),
                      ),
                      child: Column(
                        children: <Widget>[
                          Padding(
                            padding: const EdgeInsets.only(top: 5, bottom: 10),
                            child: Icon(MyFlutterApp.find_doctor__1_,
                                size: 30, color: Colors.black87),
                          ),
                          Text('Find Doctor')
                        ],
                      ),
                    ),
                  ),
                  GestureDetector(
                    onTap: () {
                      Navigator.pushNamed(context, '/error');
                    },
                    child: Container(
                      height: getDeviceHeight(context) * 0.18,
                      width: getDeviceWidth(context) * 0.4,
                      padding: EdgeInsets.all(30),
                      decoration: BoxDecoration(
                        boxShadow: [
                          new BoxShadow(
                            color: Colors.blueGrey,
                            blurRadius: 10.0,
                          ),
                        ],
                        color: Colors.white,
                        borderRadius: BorderRadius.all(
                          Radius.circular(10),
                        ),
                      ),
                      child: Column(
                        children: <Widget>[
                          Padding(
                            padding: const EdgeInsets.only(top: 5, bottom: 10),
                            child: Icon(MyFlutterApp.emergency,
                                size: 30, color: Colors.black87),
                          ),
                          Text('Emergency')
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ))
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return ScopedModelDescendant(
      builder: (BuildContext context, Widget child, MainModel model) {
        return Scaffold(
          key: _scaffoldKey,
          // drawer: SideDrawer(),
          appBar: AppBar(
            backgroundColor: Colors.white,
            leading: GestureDetector(
              onTap: () {
                widget.model.isPatient
                    ? Navigator.pushNamed(context, '/profile')
                    : Navigator.pushNamed(context, '/dprofile');
              },
              child: Row(
                children: <Widget>[
                  SizedBox(width: 10),
                  ClipRRect(
                    borderRadius: BorderRadius.circular(50),
                    child: Image.asset(
                      widget.model.isPatient
                          ? 'assets/patient.png'
                          : 'assets/doctor.png',
                      height: getDeviceWidth(context) * 0.081,
                    ),
                  ),
                ],
              ),
            ),
            actions: <Widget>[
              Padding(
                padding: const EdgeInsets.all(10.0),
                child: IconButton(
                  icon: model.isPatient
                      ? Icon(
                          MyFlutterApp.qrcode,
                          color: Colors.black87,
                          size: getDeviceHeight(context) * 0.042,
                        )
                      : Icon(
                          MyFlutterApp.qrscan__1_,
                          color: Colors.black87,
                          size: getDeviceHeight(context) * 0.05,
                        ),
                  onPressed: () => model.isPatient
                      ? Navigator.pushNamed(context, '/qr')
                      : Navigator.pushNamed(context, '/qrscan'),
                ),
              ),
            ],
            title: GestureDetector(
              onTap: () {
                // );
              },
              child: Image.asset(
                'assets/app_icon.png',
                color: Theme.of(context).primaryColor,
                height: getDeviceHeight(context) * 0.06,
              ),
            ),
            centerTitle: true,
          ),
          body: body(),
        );
      },
    );
  }
}
