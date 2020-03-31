import 'package:flutter/material.dart';
import 'package:medic_flutter_app/scoped_models/main_scoped_model.dart';
import 'package:medic_flutter_app/helpers/dimensions.dart';

class ChooseScreen extends StatefulWidget {
  final MainModel model;
  ChooseScreen(this.model);
  @override
  State<StatefulWidget> createState() {
    return _ChooseScreenState();
  }
}

class _ChooseScreenState extends State<ChooseScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Choose your Role !'),
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            GestureDetector(
              onTap: () {
                Navigator.pushReplacementNamed(context, '/auth');
                widget.model.setPatient(true);
              },
              child: Container(
                height: getDeviceHeight(context) * 0.3,
                child: ClipRRect(
                    borderRadius: BorderRadius.circular(50),
                    child: Image.asset('assets/patient.png')),
              ),
            ),
            FlatButton(
              textColor: Colors.white,
              color: Theme.of(context).primaryColor,
              onPressed: () {
                Navigator.pushNamed(context, '/auth');
                widget.model.setPatient(true);
              },
              child: Text('Patient'),
            ),
            SizedBox(height: getDeviceHeight(context) * 0.1),
            GestureDetector(
              onTap: () {
                Navigator.pushNamed(context, '/auth');
                widget.model.setPatient(false);
              },
              child: Container(
                height: getDeviceHeight(context) * 0.3,
                child: ClipRRect(
                    borderRadius: BorderRadius.circular(50),
                    child: Image.asset('assets/doctor.png')),
              ),
            ),
            FlatButton(
              textColor: Colors.white,
              color: Theme.of(context).primaryColor,
              onPressed: () {
                Navigator.pushNamed(context, '/auth');
                widget.model.setPatient(false);
              },
              child: Text('Doctor'),
            ),
          ],
        ),
      ),
    );
  }
}
