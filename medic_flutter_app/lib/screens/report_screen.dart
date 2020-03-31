import 'package:flutter/material.dart';
import 'package:medic_flutter_app/scoped_models/main_scoped_model.dart';
import 'package:medic_flutter_app/widgets/report_format.dart';

class ReportScreen extends StatefulWidget {
  final MainModel model;
  ReportScreen(this.model);
  @override
  _ReportScreenState createState() => _ReportScreenState();
}

class _ReportScreenState extends State<ReportScreen> {
  String result = "0";
  int index;
  @override
  void initState() {
    index = widget.model.getReportIndex();
    result = index.toString();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Patient Report'),
      ),
      body: ReportContent(index, widget.model, false),
      floatingActionButton: FloatingActionButton.extended(
        icon: Icon(Icons.edit),
        label: Text("Edit"),
        onPressed: () {},
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
    );
  }
}
