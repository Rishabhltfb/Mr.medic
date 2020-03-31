import 'package:flutter/material.dart';
import 'package:medic_flutter_app/helpers/dimensions.dart';

class ErrorScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Column(
        children: <Widget>[
          // SizedBox(
          //   height: getDeviceHeight(context) * 0.1,
          // ),
          // IconButton(
          //     icon: Icon(Icons.arrow_back),
          //     onPressed: () => Navigator.pop(context)),
          Expanded(
            flex: 2,
            child: Image.asset(
              'assets/doctor.png',
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
      ),
      floatingActionButton: FloatingActionButton.extended(
        icon: Icon(Icons.arrow_back_ios),
        label: Text("Back"),
        onPressed: () => Navigator.pop(context),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
    );
  }
}
