import 'package:flutter/material.dart';
import 'package:medic_flutter_app/helpers/dimensions.dart';

class DrawerListItem extends StatelessWidget {
  final String tileName;
  final IconData tileIcon;
  final String routeName;

  DrawerListItem({
    @required this.tileIcon,
    @required this.tileName,
    @required this.routeName,
  });

  @override
  Widget build(BuildContext context) {
    return FlatButton(
        onPressed: () {
          Navigator.pop(context);
          Navigator.pushNamed(context, routeName);
        },
        splashColor: Colors.grey,
        child: Container(
            alignment: Alignment.center,
            height: getViewportHeight(context) * 0.05,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                Icon(
                  tileIcon,
                  color: Colors.grey,
                ),
                SizedBox(
                  width: getViewportWidth(context) * 0.04,
                ),
                Text(
                  tileName,
                  style: TextStyle(color: Colors.black87),
                ),
              ],
            )));
  }
}
