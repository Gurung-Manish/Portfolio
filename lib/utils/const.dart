import 'package:flutter/material.dart';

var mobileAppBar = AppBar(
  backgroundColor: Colors.grey[900],
);

var mobileDrawer = Drawer(
  backgroundColor: Colors.grey[100],
  child: const Column(
    children: [
      ListTile(
        contentPadding: EdgeInsets.all(5.0),
        leading: Icon(Icons.person),
        title: Text("I N T R O"),
      ),
      ListTile(
        contentPadding: EdgeInsets.all(5.0),
        leading: Icon(Icons.person),
        title: Text("E X P E R I E N C E"),
      ),
      ListTile(
        contentPadding: EdgeInsets.all(5.0),
        leading: Icon(Icons.person),
        title: Text("E D U C A T I O N"),
      ),
      ListTile(
        contentPadding: EdgeInsets.all(5.0),
        leading: Icon(Icons.person),
        title: Text("P R O J E C T S"),
      )
    ],
  ),
);
