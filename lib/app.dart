import 'package:flutter/material.dart';
import 'package:portfolio/routes/routes.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Manish Gurung",
      debugShowCheckedModeBanner: false,
      home: MaterialApp.router(
        title: "Manish Gurung",
        debugShowCheckedModeBanner: false,
        routerConfig: Routes.router,
      ),
    );
  }
}
