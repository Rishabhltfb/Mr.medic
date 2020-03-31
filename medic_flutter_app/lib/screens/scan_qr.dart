import 'package:barcode_scan/barcode_scan.dart';
import 'package:flutter/material.dart';
import 'dart:async';

import 'package:flutter/services.dart';
import 'package:medic_flutter_app/helpers/dimensions.dart';
import 'package:medic_flutter_app/scoped_models/main_scoped_model.dart';

class QrScan extends StatefulWidget {
  final MainModel model;
  QrScan(this.model);
  @override
  _QrScanState createState() => _QrScanState();
}

class _QrScanState extends State<QrScan> {
  String result = "Please Scan Patient's  Qr Code !";

  Future _scanQR() async {
    try {
      String qrResult = await BarcodeScanner.scan();
      setState(() {
        result = qrResult;
      });
      widget.model
          .fetchPatientProfile(widget.model.authenticatedDoctor.userId, result);
      print(result);
      setState(() {
        result = 'Searching Records ...';
      });
      Timer(Duration(seconds: 3), () {
        widget.model.doctor_client != Null
            ? Navigator.pushReplacementNamed(context, '/profile')
            : print('navigation error');
      });
    } on PlatformException catch (ex) {
      if (ex.code == BarcodeScanner.CameraAccessDenied) {
        setState(() {
          result = "Camera permission was denied";
        });
      } else {
        setState(() {
          result = "Unknown Error $ex";
        });
      }
    } on FormatException {
      setState(() {
        result = "You pressed the back button before scanning anything";
      });
    } catch (ex) {
      setState(() {
        result = "Unknown Error $ex";
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Scan Qr Code'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Image(
              image: AssetImage('assets/doctor.png'),
              height: getDeviceWidth(context) * 0.6,
            ),
            Text(result),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton.extended(
        icon: Icon(Icons.camera_alt),
        label: Text("Scan"),
        onPressed: _scanQR,
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
    );
  }
}
