import 'package:flutter/material.dart';

class CustomNavigationBar extends StatelessWidget {
  const CustomNavigationBar({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 200,
      height: MediaQuery.of(context).size.height,
      color: Colors.red,
      child: const Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          NavBarItem(title: "Home"),
          NavBarItem(title: "About"),
          NavBarItem(title: "Projects"),
          NavBarItem(title: "Education"),
          NavBarItem(title: "Experience"),
          NavBarItem(title: "Contact"),
        ],
      ),
    );
  }
}

class NavBarItem extends StatelessWidget {
  final String title;
  const NavBarItem({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    return RotatedBox(quarterTurns: -1, child: Text(title));
  }
}
