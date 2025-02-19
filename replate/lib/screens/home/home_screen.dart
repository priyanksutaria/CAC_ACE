import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:replate/api_services.dart';
import 'package:replate/screens/feedback.dart';
import 'package:replate/screens/home/bottommodal.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:replate/screens/home/inventoryitem.dart';
import 'package:replate/screens/inventorydetails.dart';
import 'package:feedback/feedback.dart';

class DashboardScreen extends StatefulWidget {
  @override
  State<DashboardScreen> createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> {
  List<Business> businesses = [];

  final List<FoodItem> foodItems = [
    FoodItem(
        name: 'Rice',
        image: 'assets/Backgrounds/rice.jpg',
        quantity: 500,
        expiryDate: '2024-03-31'),
    FoodItem(
        name: 'Chapati',
        image: 'assets/Backgrounds/chapati.jpg',
        quantity: 100,
        expiryDate: '2024-03-21'),
    FoodItem(
        name: 'Burger',
        image: 'assets/Backgrounds/burger.jpg',
        quantity: 300,
        expiryDate: '2024-03-19'),
  ];
  void showFeedbackDialog(BuildContext context) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return GestureDetector(
          onTap: () {
            Navigator.pop(context); // Dismiss dialog when tapping outside
          },
          child: Stack(
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
                title: Text(
                  'Feedback',
                  style: TextStyle(
                      color: Colors.blue, fontWeight: FontWeight.bold),
                ),
                backgroundColor:
                    Colors.transparent, // Set background color to transparent
                content: Container(
                  decoration: BoxDecoration(
                    color: Colors.white, // Set dialog container color
                    borderRadius:
                        BorderRadius.circular(20), // Add border radius
                    boxShadow: [
                      BoxShadow(
                        color: Colors.grey.withOpacity(0.5),
                        spreadRadius: 2,
                        blurRadius: 5,
                        offset: Offset(0, 3),
                      ),
                    ],
                  ),
                  child: SingleChildScrollView(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Padding(
                          padding: EdgeInsets.all(16),
                          child: Text(
                            'We would love to hear your feedback! Please share your thoughts with us.',
                            style: TextStyle(color: Colors.black, fontSize: 16),
                            textAlign: TextAlign.center,
                          ),
                        ),
                        SizedBox(height: 20),
                        Padding(
                          padding: EdgeInsets.symmetric(horizontal: 16),
                          child: TextField(
                            maxLines: 5,
                            decoration: InputDecoration(
                              hintText: 'Enter your feedback here',
                              border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(10)),
                            ),
                          ),
                        ),
                        SizedBox(height: 20),
                        ElevatedButton(
                          onPressed: () {
                            // Handle feedback submission
                            Navigator.pop(context);
                          },
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.blue,
                            padding: EdgeInsets.symmetric(vertical: 16),
                            shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(10)),
                          ),
                          child: Text('Submit',
                              style:
                                  TextStyle(color: Colors.white, fontSize: 18)),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Container(
          alignment: Alignment.center,
          child: Text('Dashboard'),
        ),
      ),
      body: Container(
        height: MediaQuery.of(context).size.height,
        decoration: BoxDecoration(
          // Modify this part to add gradient decoration
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomRight,
            colors: [
              Color.fromARGB(255, 255, 255, 255),
              Color.fromARGB(255, 118, 188, 135)
            ],
          ),
        ),
        child: SingleChildScrollView(
          padding: EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Stock Available',
                style: TextStyle(
                  fontSize: 24.0,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              ),
              SizedBox(height: 20.0),
              Container(
                height: 200.0,
                child: ListView.builder(
                  scrollDirection: Axis.horizontal,
                  itemCount: foodItems.length,
                  itemBuilder: (context, index) {
                    return AnimatedCard(foodItem: foodItems[index]);
                  },
                ),
              ),
              SizedBox(height: 20.0),
              Text(
                'Quick Access',
                style: TextStyle(
                  fontSize: 24.0,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              ),
              SizedBox(height: 20.0),
              // Widget for quick access buttons
              Container(
                height: 200.0,
                child: FutureBuilder<List<Business>>(
                  future: fetchBusinesses(),
                  builder: (context, snapshot) {
                    if (snapshot.connectionState == ConnectionState.waiting) {
                      return Center(child: CircularProgressIndicator());
                    } else if (snapshot.hasError) {
                      return Center(child: Text('Error: ${snapshot.error}'));
                    } else {
                      final businesses = snapshot
                          .data!; // Access businesses from snapshot.data
                      // return ListView.builder(
                      //   itemCount: businesses.length,
                      //   itemBuilder: (context, index) {
                      //     return BusinessCard(business: businesses[index]);
                      //   },
                      // );
                      return ListView.builder(
                        scrollDirection: Axis.horizontal,
                        itemCount: businesses.length,
                        itemBuilder: (context, index) {
                          return BusinessCard(
                              foodItems: foodItems,
                              business: businesses[index]);
                        },
                      );
                    }
                  },
                ),
              ),
              SizedBox(height: 20.0),
              FloatingActionButton(
                onPressed: () {
                  showFeedbackDialog(context);
                },
                child: Icon(Icons.feedback),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class FoodItem {
  final String name;
  final String image;
  final int quantity;
  final String expiryDate;

  FoodItem({
    required this.name,
    required this.image,
    this.quantity = 0, // Set a default value for quantity
    this.expiryDate = '', // Set a default value for expiryDate
  });
}

// business.dart
// business.dart
class Business {
  final String id;
  final String businessName;
  final String email;
  final String location;
  final String city;
  final String state;
  final String pincode;
  final InventoryItem? inventoryItem;

  Business({
    this.inventoryItem,
    required this.id,
    required this.businessName,
    required this.email,
    required this.location,
    required this.city,
    required this.state,
    required this.pincode,
  });

  factory Business.fromJson(Map<String, dynamic> json) {
    final List<dynamic> inventoryJson = json['inventoryItems'] ?? [];
    final List<InventoryItem> inventoryItems = inventoryJson
        .map((itemJson) => InventoryItem.fromJson(itemJson))
        .toList();

    final distributor = json['distributor'];
    return Business(
      id: distributor['_id'],
      businessName: distributor['businessName'],
      email: distributor['email'],
      location: distributor['location'],
      city: distributor['city'],
      state: distributor['state'],
      pincode: distributor['pincode'],
      inventoryItem: InventoryItem.fromJson(json),
    );
  }
}

// food_item.dart
class AvailFoodItem {
  final String name;
  final int quantity;
  final DateTime expiryDate;

  AvailFoodItem({
    required this.name,
    required this.quantity,
    required this.expiryDate,
  });
}

class BusinessCard extends StatelessWidget {
  final List<FoodItem> foodItems;
  final Business business;

  BusinessCard({required this.business, required this.foodItems});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(8.0),
      child: GestureDetector(
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => InventoryDetailsPage(
                  foodItems: foodItems, inventoryItem: business.inventoryItem!),
            ),
          );
        },
        child: Container(
          width: 150.0,
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(10.0),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.2),
                blurRadius: 5.0,
                spreadRadius: 2.0,
              ),
            ],
          ),
          child: SingleChildScrollView(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  height: 120.0,
                  decoration: BoxDecoration(
                    borderRadius:
                        BorderRadius.vertical(top: Radius.circular(10.0)),
                    image: DecorationImage(
                      image: AssetImage(
                          "assets/Backgrounds/company.jpg"), // Display food item's image
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
                Text(
                  business.businessName, // Display food item's name
                  textAlign: TextAlign.start,
                  style: TextStyle(
                    fontSize: 18.0,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                ),
                SizedBox(height: 8.0), // Adjust spacing as needed
                Text(
                  'Email: ${business.email}', // Add location information
                  style: TextStyle(
                    fontSize: 14.0,
                    color: Colors.grey,
                  ),
                ),
                SizedBox(height: 4.0),
                Text(
                  'Location: ${business.location}', // Add location information
                  style: TextStyle(
                    fontSize: 14.0,
                    color: Colors.grey,
                  ),
                ),
                SizedBox(height: 4.0),
                Text(
                  'City: ${business.city}', // Add location information
                  style: TextStyle(
                    fontSize: 14.0,
                    color: Colors.grey,
                  ),
                ),
                SizedBox(height: 4.0),
                Text(
                  'State: ${business.state}', // Add location information
                  style: TextStyle(
                    fontSize: 14.0,
                    color: Colors.grey,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class AnimatedCard extends StatelessWidget {
  final FoodItem foodItem;

  AnimatedCard({required this.foodItem});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(8.0),
      child: GestureDetector(
        onTap: () {
          showModalBottomSheet(
            context: context,
            builder: (context) {
              return FoodDetailsModal(foodItem: foodItem);
            },
          );
        },
        child: Container(
          width: 150.0,
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(10.0),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.2),
                blurRadius: 5.0,
                spreadRadius: 2.0,
              ),
            ],
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Container(
                height: 120.0,
                decoration: BoxDecoration(
                  borderRadius:
                      BorderRadius.vertical(top: Radius.circular(10.0)),
                  image: DecorationImage(
                    image:
                        AssetImage(foodItem.image), // Display food item's image
                    fit: BoxFit.cover,
                  ),
                ),
              ),
              SizedBox(height: 10.0),
              Text(
                foodItem.name, // Display food item's name
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 18.0,
                  fontWeight: FontWeight.bold,
                  color: Colors.black,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
