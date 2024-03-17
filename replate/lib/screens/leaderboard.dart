import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

// Model class representing a leaderboard entry
class LeaderboardEntry {
  final String name;
  final int points;

  LeaderboardEntry({required this.name, required this.points});

  factory LeaderboardEntry.fromJson(Map<String, dynamic> json) {
    return LeaderboardEntry(
      name: json['volunteerId']['name'],
      points: json['points'],
    );
  }
}

class LeaderboardPage extends StatefulWidget {
  @override
  _LeaderboardPageState createState() => _LeaderboardPageState();
}

class _LeaderboardPageState extends State<LeaderboardPage> {
  List<LeaderboardEntry> leaderboardEntries = [];
  bool sortAscending = true;

  @override
  void initState() {
    super.initState();
    fetchLeaderboardData();
  }

  Future<void> fetchLeaderboardData() async {
    final String apiUrl = 'http://192.168.251.224:4000/leaderboard';

    try {
      final response = await http.get(Uri.parse(apiUrl));
      if (response.statusCode == 200) {
        final List<dynamic> jsonData = json.decode(response.body);
        setState(() {
          leaderboardEntries =
              jsonData.map((data) => LeaderboardEntry.fromJson(data)).toList();
        });
      } else {
        throw Exception('Failed to load leaderboard data');
      }
    } catch (e) {
      print('Error fetching leaderboard data: $e');
    }
  }

  void toggleSortOrder() {
    setState(() {
      sortAscending = !sortAscending;
      leaderboardEntries.sort((a, b) => sortAscending
          ? a.points.compareTo(b.points)
          : b.points.compareTo(a.points));
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Leaderboard'),
        actions: [
          IconButton(
            icon:
                Icon(sortAscending ? Icons.arrow_upward : Icons.arrow_downward),
            onPressed: toggleSortOrder,
          ),
        ],
      ),
      body: leaderboardEntries.isEmpty
          ? Center(child: CircularProgressIndicator())
          : ListView.builder(
              itemCount: leaderboardEntries.length,
              itemBuilder: (context, index) {
                final entry = leaderboardEntries[index];
                final rank = sortAscending
                    ? leaderboardEntries.length -
                        index // Adjusted for highest rank
                    : index + 1;
                return Card(
                  elevation: 3,
                  margin: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
                  child: ListTile(
                    leading: CircleAvatar(
                      child: Text('$rank'),
                      backgroundColor: Theme.of(context).primaryColor,
                      foregroundColor: Colors.white,
                    ),
                    title: Text(
                      entry.name,
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                    subtitle: Text(
                      'Points: ${entry.points}',
                      style: TextStyle(color: Colors.grey[600]),
                    ),
                  ),
                );
              },
            ),
    );
  }
}
