import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:portfolio/utils/const.dart';
import 'package:portfolio/utils/themes/colors.dart';

class MobileLayout extends StatefulWidget {
  const MobileLayout({super.key});

  @override
  State<MobileLayout> createState() => _MobileLayoutState();
}

class _MobileLayoutState extends State<MobileLayout> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: mobileAppBar,
      drawer: mobileDrawer,
      body: Column(
        children: [
          Container(
            padding: const EdgeInsets.only(top: 50, left: 10, right: 10),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                AutoSizeText(
                  "I am, Manish Gurung",
                  maxLines: 1,
                  minFontSize: 30,
                  style: Theme.of(context).textTheme.displayLarge,
                ),
                SizedBox(
                  height: 10,
                ),
                AutoSizeText(
                  "A Software Developer",
                  maxLines: 1,
                  minFontSize: 20,
                  style: Theme.of(context).textTheme.displayMedium,
                ),
                SizedBox(
                  height: 10,
                ),
                AutoSizeText(
                  "I am a motivated student pursuing a master’s degree in software engineering, I am highly interested in pursuing a career in software development. With a strong foundation in object-oriented programming, fundamental programming concepts, and databases, coupled with a keen eye for User Interface design, I am eager to apply my technical skills and creativity to build innovative and user-friendly mobile applications that meet the needs of today's tech-savvy users. ",
                  maxLines: 8,
                  minFontSize: 15,
                  textAlign: TextAlign.justify,
                  style: Theme.of(context).textTheme.displaySmall,
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}
