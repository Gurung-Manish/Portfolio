import 'package:flutter/material.dart';
import 'package:portfolio/responsive/mobile_layout.dart';
import 'package:portfolio/responsive/responsive_layout.dart';
import 'package:portfolio/responsive/tablet_layout.dart';
import 'package:portfolio/responsive/web_layout.dart';

void main() {
  runApp(const MyPortfolio());
}

class MyPortfolio extends StatelessWidget {
  const MyPortfolio({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: ResponsiveLayout(
        mobileLayout: MobileLayout(),
        tabletLayout: TabletLayout(),
        webLayout: WebLayout(),
      ),
    );
  }
}
