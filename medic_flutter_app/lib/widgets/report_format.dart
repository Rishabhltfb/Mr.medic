import 'package:flutter/material.dart';

import '../helpers/dimensions.dart';
import '../scoped_models/main_scoped_model.dart';

class ReportContent extends StatefulWidget {
  final int index;
  final MainModel model;
  final bool isProfile;
  ReportContent(this.index, this.model, this.isProfile);

  @override
  State<StatefulWidget> createState() {
    return _ReportContentState(index, model);
  }
}

class _ReportContentState extends State<ReportContent> {
  final MainModel model;
  final int index;

  _ReportContentState(this.index, this.model);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: 8.0, horizontal: 8),
      width: MediaQuery.of(context).size.width,
      child: Column(
        children: <Widget>[
          Text(
            'Report Title',
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 10),
          Text(
            'Report subtitle',
            style: TextStyle(fontSize: 12, fontWeight: FontWeight.w500),
          ),
          Container(
              height: widget.isProfile
                  ? getDeviceHeight(context) * 0.1
                  : getViewportHeight(context) * 0.6,
              width: getDeviceWidth(context) * 0.8,
              child: Image(
                image: AssetImage(
                  'assets/report.jpg',
                ),
                fit: BoxFit.cover,
              ))
        ],
      ),
    );
  }
}
