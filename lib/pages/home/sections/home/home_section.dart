import 'package:flutter/material.dart';

class HomeSection extends StatelessWidget {
  const HomeSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Positioned(
          left: 0,
          top: 200,
          child: Text(
            "IT'S ME",
            style: TextStyle(
                color: Colors.grey.withOpacity(0.5),
                fontFamily: 'Montserrat',
                fontWeight: FontWeight.w800,
                fontSize: 150),
          ),
        ),
        const Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              "Manish Gurung",
              style: TextStyle(
                  fontFamily: 'Montserrat',
                  fontWeight: FontWeight.w800,
                  fontSize: 70),
            ),
            Text(
              "Results-driven software engineering student pursuing a \nmaster's degree. Strong foundation in object-oriented programming, \nfundamental concepts, and databases. I am a detail-oriented professional \nwith a strong background in managing digital content and a passion for \nleveraging technology to enhance online experiences. I possess excellent \ncommunication, editing, and proofreading skills, enabling me to  \nmeticulously organize and present information for online platforms.",
              style: TextStyle(fontFamily: 'Montserrat'),
            ),
          ],
        ),
      ],
    );
  }
}
