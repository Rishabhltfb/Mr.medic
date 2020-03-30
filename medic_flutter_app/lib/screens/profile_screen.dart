import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:scoped_model/scoped_model.dart';
import '../scoped_models/main_scoped_model.dart';
import 'package:medic_flutter_app/helpers/dimensions.dart';
import '../api/keys.dart';

class ProfileScreen extends StatefulWidget {
  final MainModel model;

  ProfileScreen(this.model);
  @override
  State<StatefulWidget> createState() {
    return _ProfileScreenState(model);
  }
}

class _ProfileScreenState extends State<ProfileScreen> {
  final MainModel model;
  final uri = ApiKeys.uri;

  _ProfileScreenState(this.model);
  bool _showAppbar = true; //this is to show app bar
  int bottom_navbar_index = 0;

  Widget body() {
    return Stack(
      children: <Widget>[
        Column(
          children: <Widget>[
            Container(
              height: getDeviceHeight(context) * 0.4,
              child: Center(
                child: Text('HomePage'),
              ),
            ),
            Container(
              child: Center(
                child: Text('HomePage'),
              ),
            ),
          ],
        )
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return ScopedModelDescendant(
      builder: (BuildContext context, Widget child, MainModel model) {
        return Scaffold(
          // drawer: SideDrawer(),
          appBar: _showAppbar
              ? AppBar(
                  backgroundColor: Colors.white,
                  leading: GestureDetector(
                    onTap: () {},
                    child: Row(
                      children: <Widget>[
                        SizedBox(width: 10),
                        model.isLoading
                            ? CircularProgressIndicator()
                            : ClipRRect(
                                borderRadius: BorderRadius.circular(50),
                                child: FadeInImage.assetNetwork(
                                  height: getDeviceHeight(context) * 0.05,
                                  fadeInCurve: Curves.easeIn,
                                  placeholder: 'assets/patient.png',
                                  image: '',
                                ),
                              ),
                      ],
                    ),
                  ),
                  actions: <Widget>[
                    IconButton(
                        icon: Icon(
                          Icons.stars,
                          color: Theme.of(context).primaryColor,
                          size: getDeviceHeight(context) * 0.05,
                        ),
                        onPressed: null),
                  ],
                  title: GestureDetector(
                    onTap: () {
                      // _scrollBottomBarController.animateTo(
                      //   0.0,
                      //   curve: Curves.easeOut,
                      //   duration: const Duration(milliseconds: 300),
                      // );
                    },
                    child: Image.asset(
                      'assets/app_icon.png',
                      color: Theme.of(context).primaryColor,
                      height: getDeviceHeight(context) * 0.06,
                    ),
                  ),
                  centerTitle: true,
                )
              : PreferredSize(
                  child: Container(),
                  preferredSize: Size(0.0, 0.0),
                ),
          bottomNavigationBar: Container(
            height: getDeviceHeight(context) * 0.09,
            width: MediaQuery.of(context).size.width,
            child: BottomNavigationBar(
              onTap: (index) {
                setState(() {
                  bottom_navbar_index = index;
                });
              },
              unselectedItemColor: Colors.blueGrey,
              selectedItemColor: Theme.of(context).primaryColor,
              iconSize: getDeviceHeight(context) * 0.04,
              currentIndex:
                  bottom_navbar_index, // this will be set when a new tab is tapped
              items: [
                BottomNavigationBarItem(
                  icon: new Icon(Icons.home),
                  title: new Text('', style: TextStyle(fontSize: 0)),
                ),
                BottomNavigationBarItem(
                  icon: new Icon(
                    Icons.search,
                  ),
                  title: new Text('', style: TextStyle(fontSize: 0)),
                ),
                BottomNavigationBarItem(
                  icon: new Icon(
                    Icons.notifications_none,
                  ),
                  title: new Text('', style: TextStyle(fontSize: 0)),
                ),
                BottomNavigationBarItem(
                  icon: new Icon(
                    Icons.mail,
                    size: getViewportHeight(context) * 0.035,
                  ),
                  title: new Text(
                    '',
                    style: TextStyle(fontSize: 0),
                  ),
                ),
              ],
            ),
          ),
          body: model.isLoading
              ? Center(
                  child: CircularProgressIndicator(),
                )
              : body(),
        );
      },
    );
  }
}
