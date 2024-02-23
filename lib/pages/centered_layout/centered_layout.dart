import 'package:flutter/material.dart';

class CenteredLayout extends StatelessWidget {
  final Widget child;
  const CenteredLayout({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 10),
      alignment: Alignment.bottomCenter,
      child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 1200), child: child),
    );
  }
}
