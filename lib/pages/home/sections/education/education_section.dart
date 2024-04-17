import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:portfolio/pages/centered_layout/centered_layout.dart';
import 'package:timelines/timelines.dart';

class EducationSection extends StatefulWidget {
  const EducationSection({Key? key}) : super(key: key);

  @override
  State<EducationSection> createState() => _EducationSectionState();
}

class _EducationSectionState extends State<EducationSection> {
  late Future<List<dynamic>> _itemsFuture;

  @override
  void initState() {
    super.initState();
    _itemsFuture = readJson();
  }

  Future<List<dynamic>> readJson() async {
    final String response =
        await rootBundle.loadString('assets/education_history.json');
    final data = json.decode(response);
    return data["items"];
  }

  @override
  Widget build(BuildContext context) {
    return CenteredLayout(
      child: Center(
        child: FutureBuilder<List<dynamic>>(
          future: _itemsFuture,
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return CircularProgressIndicator(); // While data is loading
            } else if (snapshot.hasError) {
              return Text('Error: ${snapshot.error}'); // If there's an error
            } else {
              List<dynamic> _items = snapshot.data ?? [];
              return Container(
                decoration: BoxDecoration(color: Colors.red),
                height: 500,
                child: Timeline.tileBuilder(
                  builder: TimelineTileBuilder.fromStyle(
                    contentsAlign: ContentsAlign.alternating,
                    itemCount: _items.length,
                    contentsBuilder: (context, index) => Padding(
                      padding: const EdgeInsets.all(24.0),
                      child: Row(
                        children: [
                          Text(_items[index]["startDate"] ?? "N/A"),
                          // Display startDate directly without conversion
                        ],
                      ),
                    ),
                  ),
                ),
              );
            }
          },
        ),
      ),
    );
  }
}
