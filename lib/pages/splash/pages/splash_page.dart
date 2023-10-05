import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:portfolio/routes/routes_constant.dart';

class SplashPage extends StatefulWidget {
  const SplashPage({super.key});

  @override
  State<SplashPage> createState() => _SplashPageState();
}

class _SplashPageState extends State<SplashPage> {
  @override
  void initState() {
    super.initState();
    Future.delayed(const Duration(milliseconds: 0), () async {
      print("going to home now.........");
      context.go(RoutesConstant.home);
    });
  }

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Column(
        children: [Text("Splash")],
      ),
    );
  }
}
