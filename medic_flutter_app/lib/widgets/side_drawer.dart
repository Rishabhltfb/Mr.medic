import 'package:flutter/material.dart';
import 'package:scoped_model/scoped_model.dart';
import 'package:medic_flutter_app/helpers/dimensions.dart';
import 'dart:ui';

import '../scoped_models/main_scoped_model.dart';
import 'package:medic_flutter_app/widgets/drawer_list_item.dart';

class SideDrawer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MediaQuery.removePadding(
      context: context,
      removeTop: true,
      child: ScopedModelDescendant(
          builder: (BuildContext context, Widget child, MainModel model) {
        return Container(
          padding: EdgeInsets.only(top: MediaQuery.of(context).padding.top),
          width: getViewportWidth(context) * 0.85,
          child: Drawer(
            elevation: 5,
            child: ListView(
              children: <Widget>[
                SizedBox(
                  height: getDeviceHeight(context) * 0.025,
                ),
                model.isLoading
                    ? CircularProgressIndicator()
                    : Container(
                        height: getViewportHeight(context) * 0.275,
                        child: DrawerHeader(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: <Widget>[
                              GestureDetector(
                                onTap: () {
                                  Navigator.pop(context);
                                  Navigator.pushNamed(context, '/profile');
                                },
                                child: ClipRRect(
                                  borderRadius: BorderRadius.circular(50),
                                  child: FadeInImage.assetNetwork(
                                    height: getDeviceHeight(context) * 0.08,
                                    fadeInCurve: Curves.easeIn,
                                    placeholder: 'assets/avatar.png',
                                    image: model.getKey() +
                                        model.parseImage(
                                            model.getAuthenticatedUser.avatar),
                                  ),
                                ),
                              ),
                              SizedBox(height: 15),
                              Text(
                                model.authenticatedUser.name,
                                textAlign: TextAlign.left,
                                style: TextStyle(
                                    color: Colors.black,
                                    fontFamily: "Raleway",
                                    fontWeight: FontWeight.w700,
                                    fontSize:
                                        getViewportHeight(context) * 0.025),
                              ),
                              SizedBox(height: 5),
                              Text(
                                '@' + model.authenticatedUser.username,
                                textAlign: TextAlign.left,
                                style: TextStyle(
                                    color: Colors.black87,
                                    fontFamily: "Raleway",
                                    fontWeight: FontWeight.w300,
                                    fontSize:
                                        getViewportHeight(context) * 0.022),
                              ),
                              SizedBox(height: 10),
                            ],
                          ),
                        ),
                      ),
                DrawerListItem(
                  tileIcon: Icons.perm_identity,
                  tileName: "Profile",
                  routeName: "/profile",
                ),
                SizedBox(
                  height: 2,
                ),
                DrawerListItem(
                  tileIcon: Icons.add_to_home_screen,
                  tileName: "Lists",
                  routeName: "/error",
                ),
              ],
            ),
          ),
        );
      }),
    );
  }
}
