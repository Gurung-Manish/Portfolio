import 'package:flutter/material.dart';
import 'package:portfolio/pages/home/widgets/navigation_bar/navigation_bar.dart';
import 'package:portfolio/pages/home/widgets/social_bar/social_bar.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final PageController pageController = PageController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Row(
            children: [
              const CustomNavigationBar(),
              Expanded(
                child: SizedBox(
                  height: MediaQuery.of(context).size.height,
                  width: 200,
                  child: PageView(
                    scrollDirection: Axis.vertical,
                    controller: pageController,
                    children: const <Widget>[
                      Center(
                        child: Text('First Page'),
                      ),
                      Center(
                        child: Text('Second Page'),
                      ),
                      Center(
                        child: Text('Third Page'),
                      ),
                    ],
                  ),
                ),
              ),
              const SocialBar()
            ],
          ),
        ],
      ),
    );
  }

  GestureDetector changeNavigation() {
    return GestureDetector(
        onTap: () {
          print("change");
        },
        child: Text("data"));
  }
}
