import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final PageController pageController = PageController();
  @override
  Widget build(BuildContext context) {
    List navList = [
      {
        "title": "home",
      }
    ];
    return Scaffold(
      body: Column(
        children: [
          Row(
            children: [
              Container(
                width: 200,
                height: MediaQuery.of(context).size.height,
                color: Colors.red,
                child: Column(
                  children: [changeNavigation(), Text("data"), Text("data")],
                ),
              ),
              Expanded(
                child: SizedBox(
                  height: MediaQuery.of(context).size.height,
                  width: 200,
                  child: PageView(
                    scrollDirection: Axis.vertical,
                    controller: pageController,
                    children: const <Widget>[
                      Center(
                        child: Text('First Page'),
                      ),
                      Center(
                        child: Text('Second Page'),
                      ),
                      Center(
                        child: Text('Third Page'),
                      ),
                    ],
                  ),
                ),
              ),
              Container(
                width: 200,
                height: MediaQuery.of(context).size.height,
                color: Colors.blue,
                child: Column(
                  children: [Text("data"), Text("data"), Text("data")],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  GestureDetector changeNavigation() {
    return GestureDetector(
        onTap: () {
          print("change");
        },
        child: Text("data"));
  }
}
