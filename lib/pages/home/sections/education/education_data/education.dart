import 'dart:convert';
import 'dart:io';

class EducationHistory {
  final String schoolName;
  final String startDate;
  final String endDate;
  final String description;

  EducationHistory({
    required this.schoolName,
    required this.startDate,
    required this.endDate,
    required this.description,
  });

  factory EducationHistory.fromJson(Map<String, dynamic> json) {
    return EducationHistory(
      schoolName: json['schoolName'],
      startDate: json['startDate'],
      endDate: json['endDate'],
      description: json['description'],
    );
  }
}
