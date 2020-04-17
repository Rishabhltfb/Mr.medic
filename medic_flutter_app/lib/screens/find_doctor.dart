import 'package:flutter/material.dart';
import 'package:medic_flutter_app/models/doctor.dart';
import 'package:medic_flutter_app/scoped_models/main_scoped_model.dart';

class FindDoctor extends StatefulWidget {
  final MainModel model;
  FindDoctor(this.model);

  _FindDoctorState createState() => _FindDoctorState();
}

class _FindDoctorState extends State<FindDoctor> {
  final TextStyle dropdownMenuItem =
      TextStyle(color: Colors.black, fontSize: 18);
  String city = null;
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  void _submitForm() async {
    _formKey.currentState.save();
    await widget.model.fetchCityDoctorsList(city);

    setState(() {
      print('done');
    });
    // Timer(Duration(seconds: 3), () {
    // });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color(0xfff0f0f0),
      body: SingleChildScrollView(
        child: Container(
          height: MediaQuery.of(context).size.height,
          width: MediaQuery.of(context).size.width,
          child: Stack(
            children: <Widget>[
              Container(
                padding: EdgeInsets.only(top: 145),
                height: MediaQuery.of(context).size.height,
                width: double.infinity,
                child: widget.model.isLoading
                    ? Center(
                        child: CircularProgressIndicator(),
                      )
                    : ListView.builder(
                        physics: BouncingScrollPhysics(),
                        itemCount: city != null
                            ? widget.model.citydoctorList.length
                            : widget.model.alldoctorList.length,
                        itemBuilder: (BuildContext context, int index) {
                          return buildList(context, index);
                        }),
              ),
              Container(
                height: 140,
                width: double.infinity,
                decoration: BoxDecoration(
                    color: Theme.of(context).primaryColor,
                    borderRadius: BorderRadius.only(
                        bottomLeft: Radius.circular(30),
                        bottomRight: Radius.circular(30))),
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 30),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: <Widget>[
                      IconButton(
                        icon: Icon(
                          Icons.arrow_back,
                          color: Colors.white,
                        ),
                        onPressed: () => Navigator.pop(context),
                      ),
                      Text(
                        "Find Doctor",
                        style: TextStyle(color: Colors.white, fontSize: 24),
                      ),
                      IconButton(
                        icon: Icon(
                          Icons.restore,
                          color: Colors.white,
                        ),
                        onPressed: () {
                          _formKey.currentState.reset();
                          FocusScope.of(context).requestFocus(FocusNode());
                          setState(() {
                            city = null;
                          });
                        },
                      ),
                    ],
                  ),
                ),
              ),
              Container(
                child: Column(
                  children: <Widget>[
                    SizedBox(
                      height: 110,
                    ),
                    Padding(
                      padding: EdgeInsets.symmetric(horizontal: 20),
                      child: Material(
                        elevation: 5.0,
                        borderRadius: BorderRadius.all(Radius.circular(30)),
                        child: Form(
                          key: _formKey,
                          child: TextFormField(
                            // controller: TextEditingController(text: locations[0]),
                            cursorColor: Theme.of(context).primaryColor,
                            style: dropdownMenuItem,
                            decoration: InputDecoration(
                              hintText: "Search by city",
                              hintStyle: TextStyle(
                                  color: Colors.black38, fontSize: 16),
                              prefixIcon: IconButton(
                                  icon: Icon(
                                    Icons.search,
                                    color: Theme.of(context).primaryColor,
                                  ),
                                  onPressed: () {
                                    _submitForm();
                                    _formKey.currentState.reset();
                                    FocusScope.of(context)
                                        .requestFocus(FocusNode());
                                  }),
                              border: InputBorder.none,
                              contentPadding: EdgeInsets.symmetric(
                                  horizontal: 25, vertical: 13),
                            ),
                            onChanged: (String value) {
                              city = value;
                            },
                            onSaved: (String value) {
                              city = value;
                            },
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              )
            ],
          ),
        ),
      ),
    );
  }

  Widget buildList(BuildContext context, int index) {
    Doctor doctor = city != null
        ? widget.model.citydoctorList[index]
        : widget.model.alldoctorList[index];
    return GestureDetector(
      onTap: () {
        widget.model.loadDoctorProfile(doctor);
        Navigator.pushNamed(context, '/dprofile');
      },
      child: Container(
        decoration: BoxDecoration(
          boxShadow: [
            new BoxShadow(
              color: Colors.blueGrey,
              blurRadius: 10.0,
            ),
          ],
          borderRadius: BorderRadius.circular(25),
          color: Colors.white,
        ),
        width: double.infinity,
        height: 110,
        margin: EdgeInsets.symmetric(vertical: 10, horizontal: 20),
        padding: EdgeInsets.symmetric(vertical: 10, horizontal: 20),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Container(
              width: 50,
              height: 50,
              margin: EdgeInsets.only(right: 15),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(50),
                border:
                    Border.all(width: 3, color: Theme.of(context).accentColor),
                image: DecorationImage(
                    image: AssetImage('assets/doctor.png'), fit: BoxFit.fill),
              ),
            ),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text(
                    doctor.name,
                    style: TextStyle(
                        color: Theme.of(context).primaryColor,
                        fontWeight: FontWeight.bold,
                        fontSize: 18),
                  ),
                  SizedBox(
                    height: 6,
                  ),
                  Row(
                    children: <Widget>[
                      Icon(
                        Icons.location_on,
                        color: Theme.of(context).accentColor,
                        size: 20,
                      ),
                      SizedBox(
                        width: 5,
                      ),
                      Text(doctor.clinickAddress,
                          style: TextStyle(
                              color: Theme.of(context).primaryColor,
                              fontSize: 13,
                              letterSpacing: .3)),
                    ],
                  ),
                  SizedBox(
                    height: 6,
                  ),
                  Row(
                    children: <Widget>[
                      Icon(
                        Icons.school,
                        color: Theme.of(context).accentColor,
                        size: 20,
                      ),
                      SizedBox(
                        width: 5,
                      ),
                      Text(doctor.specialization,
                          style: TextStyle(
                              color: Theme.of(context).primaryColor,
                              fontSize: 13,
                              letterSpacing: .3)),
                    ],
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
