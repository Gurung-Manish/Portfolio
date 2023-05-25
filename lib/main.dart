import 'package:flutter/material.dart';
import 'package:portfolio/responsive/mobile_layout.dart';
import 'package:portfolio/responsive/responsive_layout.dart';
import 'package:portfolio/responsive/tablet_layout.dart';
import 'package:portfolio/responsive/web_layout.dart';
import 'package:portfolio/utils/themes/theme.dart';

void main() {
  runApp(const MyPortfolio());
}

class MyPortfolio extends StatelessWidget {
  const MyPortfolio({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: PortfolioTheme.lightTheme,
      darkTheme: PortfolioTheme.darkTheme,
      themeMode: ThemeMode.system,
      home: const ResponsiveLayout(
        mobileLayout: MobileLayout(),
        tabletLayout: TabletLayout(),
        webLayout: WebLayout(),
      ),
    );
  }
}
