import 'package:flutter/material.dart';
import 'package:replate/api_services.dart';
import 'package:replate/screens/home/bottommodal.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

class DashboardScreen extends StatelessWidget {
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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Dashboard'),
      ),
      body: Container(
        height: MediaQuery.of(context).size.height,
        decoration: BoxDecoration(
          // Modify this part to add gradient decoration
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomRight,
            colors: [
              Color.fromARGB(255, 149, 40, 40),
              Color.fromARGB(255, 71, 48, 155)
            ],
          ),
        ),
        child: SingleChildScrollView(
          padding: EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Overview of Surplus Food Items',
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
                      return ListView.builder(
                        itemCount: businesses.length,
                        itemBuilder: (context, index) {
                          return BusinessCard(business: businesses[index]);
                        },
                      );
                      return Container();
                    }
                  },
                ),
              ),
              SizedBox(height: 20.0),
              // Other widgets...
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
  final String name;
  final String location;

  Business({required this.name, required this.location});

  factory Business.fromJson(Map<String, dynamic> json) {
    return Business(
      name: json['name'],
      location: json['location'],
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
  final Business business;

  BusinessCard({required this.business});

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 4.0,
      margin: EdgeInsets.symmetric(horizontal: 8.0),
      child: Container(
        width: 150.0,
        padding: EdgeInsets.all(8.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              business.name,
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 8.0),
            Text(
              business.name,
              style: TextStyle(
                fontSize: 14.0,
                color: Colors.grey,
              ),
            ),
            SizedBox(height: 4.0), // Adjust spacing as needed
            Text(
              'Name: ${business.name}',
              style: TextStyle(
                fontSize: 14.0,
                color: Colors.grey,
              ),
            ),
            SizedBox(height: 8.0),
            Text(
              'Location: ${business.location}', // Add location information
              style: TextStyle(
                fontSize: 14.0,
                color: Colors.grey,
              ),
            ),
          ],
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
