import 'package:flutter/material.dart';

class CustomNavigationBar extends StatelessWidget {
  final Function(int) onPageSelected;
  final int currentPage;

  const CustomNavigationBar(
      {super.key, required this.onPageSelected, required this.currentPage});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.red,
      width: 50,
      height: MediaQuery.of(context).size.height,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 100.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            NavBarItem(
              title: "Home",
              isSelected: currentPage == 0,
              onTap: () {
                onPageSelected(0);
              },
            ),
            NavBarItem(
              title: "About",
              isSelected: currentPage == 1,
              onTap: () {
                onPageSelected(1);
              },
            ),
            NavBarItem(
              title: "Projects",
              isSelected: currentPage == 2,
              onTap: () {
                onPageSelected(2);
              },
            ),
            NavBarItem(
              title: "Education",
              isSelected: currentPage == 3,
              onTap: () {
                onPageSelected(3);
              },
            ),
            NavBarItem(
              title: "Experience",
              isSelected: currentPage == 4,
              onTap: () {
                onPageSelected(4);
              },
            ),
            NavBarItem(
              title: "Contact",
              isSelected: currentPage == 5,
              onTap: () {
                onPageSelected(5);
              },
            ),
          ],
        ),
      ),
    );
  }
}

class NavBarItem extends StatelessWidget {
  final String title;
  final bool isSelected; // Indicates if this item is currently selected
  final VoidCallback onTap; // Callback when the item is tapped

  const NavBarItem(
      {super.key,
      required this.title,
      required this.isSelected,
      required this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: RotatedBox(
        quarterTurns: -1,
        child: Text(
          title,
          style: TextStyle(
            fontFamily: 'Montserrat',
            color: isSelected
                ? Colors.black
                : Colors.black, // Change color based on selection
            fontWeight: isSelected
                ? FontWeight.bold
                : FontWeight.normal, // Bold if selected
          ),
        ),
      ),
    );
  }
}
