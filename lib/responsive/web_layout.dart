import 'package:flutter/material.dart';
import 'package:portfolio/utils/themes/colors.dart';

import '../utils/const.dart';

class WebLayout extends StatefulWidget {
  const WebLayout({super.key});

  @override
  State<WebLayout> createState() => _WebLayoutState();
}

class _WebLayoutState extends State<WebLayout> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ColorPallete.lightBackground,
      body: Container(),
    );
  }
}
