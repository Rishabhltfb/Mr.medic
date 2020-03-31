import 'package:flutter/material.dart';
import 'package:medic_flutter_app/helpers/dimensions.dart';
import 'package:qr_flutter/qr_flutter.dart';

class QrCode extends StatefulWidget {
  @override
  _QrCodeState createState() => _QrCodeState();
}

class _QrCodeState extends State<QrCode> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Scan this Qr Code'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            QrImage(
              data: "7355419921",
              version: QrVersions.auto,
              size: 200.0,
            ),
            SizedBox(height: getDeviceHeight(context) * 0.1),
            Text('This is Unique Patient Id'),
          ],
        ),
      ),
    );
  }
}
