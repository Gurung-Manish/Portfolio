import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:timelines/timelines.dart';

class EducationTimeline extends StatelessWidget {
  final String startDate;
  final String endDate;
  final String school;
  final String desc;
  final int itemCount;
  const EducationTimeline(
      {super.key,
      required this.startDate,
      required this.endDate,
      required this.school,
      required this.desc,
      required this.itemCount});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 500,
      child: Timeline.tileBuilder(
        builder: TimelineTileBuilder.fromStyle(
          contentsAlign: itemCount % 2 == 0
              ? ContentsAlign.alternating
              : ContentsAlign.basic,
          contentsBuilder: (context, index) => Padding(
            padding: const EdgeInsets.all(24.0),
            child: Column(
              children: [
                Row(
                  children: [Text("$startDate - $endDate")],
                )
              ],
            ),
          ),
          itemCount: 2,
        ),
      ),
    );
  }
}
