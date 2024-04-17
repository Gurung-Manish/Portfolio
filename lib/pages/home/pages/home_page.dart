import 'package:flutter/material.dart';
import 'package:portfolio/pages/home/sections/education/education_section.dart';
import 'package:portfolio/pages/home/sections/home/home_section.dart';
import 'package:portfolio/pages/home/widgets/navigation_bar/navigation_bar.dart';
import 'package:portfolio/pages/home/widgets/social_bar/social_bar.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final PageController pageController = PageController();
  var currentPage = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Row(
            children: [
              CustomNavigationBar(
                onPageSelected: (index) {
                  setState(() {
                    currentPage = index;
                  });
                  pageController.animateToPage(
                    index,
                    duration: const Duration(milliseconds: 500),
                    curve: Curves.ease,
                  );
                },
                currentPage: currentPage,
              ),
              Expanded(
                child: SizedBox(
                  height: MediaQuery.of(context).size.height,
                  width: 200,
                  child: PageView(
                    scrollDirection: Axis.vertical,
                    controller: pageController,
                    children: const <Widget>[
                      HomeSection(),
                      Center(
                        child: Text('About'),
                      ),
                      Center(
                        child: Text('Projects'),
                      ),
                      EducationSection(),
                      Center(
                        child: Text('Experience'),
                      ),
                      Center(
                        child: Text('Contact'),
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
