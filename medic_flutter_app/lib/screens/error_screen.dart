import 'package:flutter/material.dart';
import 'package:medic_flutter_app/helpers/dimensions.dart';

class ErrorScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.white,
        body: Column(
          children: <Widget>[
            SizedBox(
              height: getDeviceHeight(context) * 0.1,
            ),
            IconButton(
                icon: Icon(Icons.arrow_back),
                onPressed: () => Navigator.pop(context)),
            Expanded(
              flex: 2,
              child: Image.asset(
                'assets/jelly.png',
              ),
            ),
            Expanded(
              flex: 1,
              child: Text(
                'This screen is under development.',
                overflow: TextOverflow.ellipsis,
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                ),
              ),
            )
          ],
        ));
  }
}
