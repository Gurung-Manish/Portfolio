import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:portfolio/pages/centered_layout/centered_layout.dart';

class HomeSection extends StatelessWidget {
  const HomeSection({super.key});

  @override
  Widget build(BuildContext context) {
    return CenteredLayout(
      child: Stack(
        children: [
          Positioned(
            left: 1,
            top: 200,
            child: Text(
              "IT'S ME",
              style: TextStyle(
                  color: Colors.grey.withOpacity(0.5),
                  fontFamily: 'Montserrat',
                  fontWeight: FontWeight.w800,
                  fontSize: 150),
            )
                .animate()
                .fade(delay: 700.ms)
                .slideX(duration: 700.ms, begin: -0.3, end: 0.0),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
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
              )
                  .animate()
                  .fade(delay: 700.ms)
                  .slideX(duration: 700.ms, begin: 0.3, end: 0.0),
            ],
          ),
        ],
      ),
    );
  }
}
