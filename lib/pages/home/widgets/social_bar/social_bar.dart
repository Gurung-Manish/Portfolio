import 'package:flutter/material.dart';

class SocialBar extends StatelessWidget {
  const SocialBar({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.blue,
      width: 50,
      height: MediaQuery.of(context).size.height,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 60.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Container(width: 1, height: 200, color: Colors.black),
            const SocialBarItem(
              iconPath: 'assets/icons/github.png',
            ),
            const SocialBarItem(
              iconPath: 'assets/icons/gmail.png',
            ),
            const SocialBarItem(
              iconPath: 'assets/icons/instagram.png',
            ),
            const SocialBarItem(
              iconPath: 'assets/icons/linkedin.png',
            ),
            const SocialBarItem(
              iconPath: 'assets/icons/youtube.png',
            ),
            Container(width: 1, height: 200, color: Colors.black),
          ],
        ),
      ),
    );
  }
}

class SocialBarItem extends StatelessWidget {
  final String iconPath;
  const SocialBarItem({super.key, required this.iconPath});

  @override
  Widget build(BuildContext context) {
    return SizedBox(width: 20, child: Image.asset(iconPath));
  }
}
