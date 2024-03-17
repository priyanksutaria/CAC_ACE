import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class LeaderboardScreen extends StatefulWidget {
  const LeaderboardScreen({super.key});

  @override
  State<LeaderboardScreen> createState() => _LeaderboardScreenState();
}

class _LeaderboardScreenState extends State<LeaderboardScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Leaderboard'),
        backgroundColor: Color.fromARGB(255, 96, 167, 214),
      ),
      body: Container(
        width: 1000,
        child: SingleChildScrollView(
          scrollDirection: Axis.vertical,
          child: Container(),
        ),
      ),
    );
  }
}
