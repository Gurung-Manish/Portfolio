import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:portfolio/pages/centered_layout/centered_layout.dart';

import 'package:timelines/timelines.dart';

class EducationSection extends StatelessWidget {
  const EducationSection({super.key});

  @override
  Widget build(BuildContext context) {
    return CenteredLayout(
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            SizedBox(
              height: 500,
              child: Timeline.tileBuilder(
                builder: TimelineTileBuilder.fromStyle(
                  contentsBuilder: (context, index) => Padding(
                    padding: const EdgeInsets.all(24.0),
                    child: Column(
                      children: [
                        Row(
                          children: [Text("March 2021 - Dec 2022")],
                        )
                      ],
                    ),
                  ),
                  itemCount: 2,
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
