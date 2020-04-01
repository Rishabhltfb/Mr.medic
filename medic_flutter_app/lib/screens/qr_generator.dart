import 'package:flutter/material.dart';
import 'package:medic_flutter_app/helpers/dimensions.dart';
import 'package:medic_flutter_app/scoped_models/main_scoped_model.dart';
import 'package:qr_flutter/qr_flutter.dart';

class QrCode extends StatefulWidget {
  final MainModel model;
  QrCode(this.model);

  @override
  _QrCodeState createState() => _QrCodeState();
}

class _QrCodeState extends State<QrCode> {
  String data = 'this datat is  ab kassdhskdjfbasjddjdb very long one fot this';
  @override
  void initState() {
    data =
        '${widget.model.getAuthenticatedPatient.userId},${widget.model.getAuthenticatedPatient.token}';
    super.initState();
  }

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
              data: data,
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
