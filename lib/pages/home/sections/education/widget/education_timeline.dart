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
    return Container(
      decoration: BoxDecoration(color: Colors.red),
      height: 800,
      child: Timeline.tileBuilder(
        builder: TimelineTileBuilder.fromStyle(
          contentsAlign: ContentsAlign.alternating,
          contentsBuilder: (context, index) => Padding(
            padding: const EdgeInsets.all(24.0),
            child: Row(
              children: [Text("$startDate - $endDate")],
            ),
          ),
          itemCount: itemCount,
        ),
      ),
    );
  }
}
