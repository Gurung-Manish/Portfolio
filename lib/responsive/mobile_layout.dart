import 'package:flutter/material.dart';
import 'package:portfolio/utils/const.dart';

class MobileLayout extends StatefulWidget {
  const MobileLayout({super.key});

  @override
  State<MobileLayout> createState() => _MobileLayoutState();
}

class _MobileLayoutState extends State<MobileLayout> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: mobileAppBar,
      drawer: mobileDrawer,
      backgroundColor: Colors.grey[300],
      body: Container(),
    );
  }
}
