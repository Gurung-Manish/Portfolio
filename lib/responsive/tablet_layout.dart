import 'package:flutter/material.dart';
import 'package:portfolio/utils/themes/colors.dart';

import '../utils/const.dart';

class TabletLayout extends StatefulWidget {
  const TabletLayout({super.key});

  @override
  State<TabletLayout> createState() => _TabletLayoutState();
}

class _TabletLayoutState extends State<TabletLayout> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: mobileAppBar,
      drawer: mobileDrawer,
      backgroundColor: ColorPallete.lightBackground,
      body: Container(),
    );
  }
}
