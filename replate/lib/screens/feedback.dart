import 'dart:ui';

import 'package:flutter/material.dart';

class CustomFeedbackDialog extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        // Blurred background
        Positioned.fill(
          child: BackdropFilter(
            filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
            child: Container(
              color: Colors.transparent,
            ),
          ),
        ),
        // AlertDialog
        AlertDialog(
          title: Text('Feedback', style: TextStyle(color: Colors.blue)),
          backgroundColor:
              Colors.transparent, // Set background color to transparent
          content: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  'We would love to hear your feedback! Please share your thoughts with us.',
                  style: TextStyle(color: Colors.black),
                ),
                SizedBox(height: 20),
                TextField(
                  decoration: InputDecoration(
                    labelText: 'Enter your feedback',
                    border: OutlineInputBorder(), // Add border
                  ),
                ),
              ],
            ),
          ),
          actions: [
            ElevatedButton(
              onPressed: () {
                // Handle feedback submission
                Navigator.pop(context);
              },
              style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),
              child: Text('Submit', style: TextStyle(color: Colors.white)),
            ),
          ],
        ),
      ],
    );
  }
}
