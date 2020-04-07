// import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:medic_flutter_app/models/patient.dart';

import 'package:scoped_model/scoped_model.dart';
import 'package:medic_flutter_app/scoped_models/main_scoped_model.dart';
import 'package:medic_flutter_app/widgets/report_format.dart';
// import 'package:flutter_ui_challenges/core/presentation/res/assets.dart';
// import 'package:flutter_ui_challenges/src/widgets/network_image.dart';

class ProfileScreen extends StatefulWidget {
  final MainModel model;
  ProfileScreen(this.model);
  @override
  _ProfileScreenState createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  Patient patient;
  @override
  void initState() {
    if (widget.model.isPatient) {
      print('inside profile patient');
      patient = widget.model.getAuthenticatedPatient;
    } else {
      print('inside doctor_client');
      patient = widget.model.doctor_client;
      print(patient);
    }
    widget.model.fetchCityDoctorsList(patient.city);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return ScopedModelDescendant<MainModel>(
        builder: (BuildContext context, Widget child, MainModel) {
      return Scaffold(
        body: Stack(
          children: <Widget>[
            Container(
              height: 200.0,
              decoration: BoxDecoration(
                gradient: LinearGradient(
                    colors: [Colors.indigo.shade300, Colors.indigo.shade500]),
              ),
            ),
            ListView.builder(
              physics: BouncingScrollPhysics(),
              itemCount: 4 + patient.reports.length,
              itemBuilder: _mainListBuilder,
            ),
            Padding(
              padding: const EdgeInsets.only(top: 40.0, left: 10),
              child: IconButton(
                onPressed: () {
                  widget.model.doctor_client = null;
                  Navigator.pop(context);
                },
                icon: Icon(
                  Icons.arrow_back,
                  color: Colors.black,
                ),
              ),
            ),
          ],
        ),
      );
    });
  }

  Widget _mainListBuilder(BuildContext context, int index) {
    if (index == 0) return _buildHeader(context);
    if (index == 1) return _buildSectionHeader(context);
    if (index == 2) return _buildCollectionsRow();
    if (index == 3)
      return Container(
        color: Colors.white,
        padding: EdgeInsets.only(left: 20.0, top: 20.0, bottom: 10.0),
        child:
            Text("Medical History", style: Theme.of(context).textTheme.title),
      );
    return _buildListItem(index - 4);
  }

  Widget _buildListItem(int index) {
    return GestureDetector(
      onTap: () {
        print(index);
        widget.model.setReportIndex(index);
        Navigator.pushNamed(context, '/report');
      },
      child: Container(
        decoration: BoxDecoration(
          boxShadow: [
            new BoxShadow(
              color: Colors.blueGrey,
              blurRadius: 10.0,
            ),
          ],
          color: Colors.white,
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(30),
            topRight: Radius.circular(30),
          ),
        ),
        padding: EdgeInsets.symmetric(horizontal: 20.0, vertical: 10.0),
        child: ReportContent(index, widget.model, true),
      ),
    );
  }

  Container _buildSectionHeader(BuildContext context) {
    return Container(
      color: Colors.white,
      padding: EdgeInsets.symmetric(horizontal: 20.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Text(
            "Dr. Nearby",
            style: Theme.of(context).textTheme.title,
          ),
        ],
      ),
    );
  }

  Container _buildCollectionsRow() {
    return widget.model.isLoading
        ? Container(
            color: Colors.white,
            height: 200.0,
            child: Center(
              child: CircularProgressIndicator(),
            ),
          )
        : Container(
            color: Colors.white,
            height: 200.0,
            padding: EdgeInsets.symmetric(horizontal: 10.0),
            child: ListView.builder(
              physics: BouncingScrollPhysics(),
              scrollDirection: Axis.horizontal,
              itemCount: widget.model.citydoctorList.length,
              itemBuilder: (BuildContext context, int index) {
                return GestureDetector(
                  onTap: () {
                    widget.model
                        .loadDoctorProfile(widget.model.citydoctorList[index]);
                    Navigator.pushNamed(context, '/dprofile');
                  },
                  child: Container(
                    margin:
                        EdgeInsets.symmetric(vertical: 5.0, horizontal: 10.0),
                    width: 150.0,
                    height: 200.0,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[
                        Expanded(
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(5.0),
                            child: Image.asset('assets/doctor.png'),
                          ),
                        ),
                        SizedBox(
                          height: 5.0,
                        ),
                        Text(
                          widget.model.citydoctorList[index].name,
                          style: Theme.of(context).textTheme.subhead.merge(
                                TextStyle(color: Colors.grey.shade600),
                              ),
                        ),
                        Text(
                          widget.model.citydoctorList[index].specialization,
                          style: Theme.of(context).textTheme.subhead.merge(
                                TextStyle(
                                    color: Colors.blueGrey.shade600,
                                    fontSize: 12),
                              ),
                        ),
                      ],
                    ),
                  ),
                );
              },
            ),
          );
  }

  Container _buildHeader(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(top: 50.0),
      height: 240.0,
      child: Stack(
        children: <Widget>[
          Container(
            padding: EdgeInsets.only(
                top: 40.0, left: 40.0, right: 40.0, bottom: 10.0),
            child: Material(
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10.0)),
              elevation: 5.0,
              color: Colors.white,
              child: Column(
                children: <Widget>[
                  SizedBox(
                    height: 50.0,
                  ),
                  Text(
                    patient.name,
                    style: Theme.of(context).textTheme.title,
                  ),
                  SizedBox(
                    height: 5.0,
                  ),
                  Text("App Developer | Foodie | Aligarh"),
                  SizedBox(
                    height: 16.0,
                  ),
                  Container(
                    height: 40.0,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Expanded(
                          child: ListTile(
                            title: Text(
                              "M",
                              textAlign: TextAlign.center,
                              style: TextStyle(fontWeight: FontWeight.bold),
                            ),
                            subtitle: Text("Gender".toUpperCase(),
                                textAlign: TextAlign.center,
                                style: TextStyle(fontSize: 12.0)),
                          ),
                        ),
                        Expanded(
                          child: ListTile(
                            title: Text(
                              "7355419294",
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                  fontWeight: FontWeight.bold, fontSize: 12),
                            ),
                            subtitle: Text("Contact".toUpperCase(),
                                textAlign: TextAlign.center,
                                style: TextStyle(fontSize: 12.0)),
                          ),
                        ),
                        Expanded(
                          child: ListTile(
                            title: Text(
                              patient.reports.length.toString(),
                              textAlign: TextAlign.center,
                              style: TextStyle(fontWeight: FontWeight.bold),
                            ),
                            subtitle: Text("Reports".toUpperCase(),
                                textAlign: TextAlign.center,
                                style: TextStyle(fontSize: 12.0)),
                          ),
                        ),
                      ],
                    ),
                  )
                ],
              ),
            ),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Material(
                elevation: 5.0,
                shape: CircleBorder(),
                child: CircleAvatar(
                  radius: 40.0,
                  backgroundImage: AssetImage('assets/patient.png'),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
