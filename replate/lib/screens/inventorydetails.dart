import 'package:flutter/material.dart';
import 'package:replate/screens/home/home_screen.dart';
import 'package:replate/screens/home/inventoryitem.dart';
import 'package:intl/intl.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

class InventoryDetailsPage extends StatefulWidget {
  final List<FoodItem> foodItems;
  final InventoryItem inventoryItem;

  InventoryDetailsPage({required this.foodItems, required this.inventoryItem});

  @override
  _InventoryDetailsPageState createState() => _InventoryDetailsPageState();
}

class _InventoryDetailsPageState extends State<InventoryDetailsPage> {
  late String itemName;
  late String expdate;
  late int requestedQuantity = 0;

  Future<void> requestQuantity() async {
    final url = Uri.parse('http://192.168.251.224:4000/takerReq');
    final response = await http.post(
      url,
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, dynamic>{
        'reqQuantity': requestedQuantity,
        'takerEmail': "priyanksutaria16@gmail.com",
        'inventoryId': widget.inventoryItem.id,
      }),
    );

    if (response.statusCode == 200) {
      // Request successful, handle response accordingly
      print('Request successful');
    } else {
      // Request failed, handle error accordingly
      print('Request failed');
    }
  }

  void handleRequestMade(FoodItem requestedFoodItem) {
    setState(() {
      // Add the requested food item to the list of food items
      widget.foodItems.add(requestedFoodItem);
    });
  }

  void initState() {
    super.initState();
    // Initialize the item name variable with the initial value
    itemName = widget.inventoryItem.name;
    expdate =
        '${widget.inventoryItem.expiryDate.day}-${widget.inventoryItem.expiryDate.month}-${widget.inventoryItem.expiryDate.year}';
  }

  @override
  Widget build(BuildContext context) {
    FoodItem requestedFoodItem = FoodItem(
      name: itemName, // Replace with the actual name of the requested food item
      image:
          'assets/Backgrounds/food.jpg', // Replace with the actual image path
      quantity: requestedQuantity, // Replace with the actual quantity
      expiryDate: expdate, // Replace with the actual expiry date
    );
    return Scaffold(
      appBar: AppBar(
        title: Text('Inventory Details'),
        backgroundColor: Colors.green,
      ),
      body: Container(
        width: 1000,
        child: SingleChildScrollView(
          scrollDirection: Axis.vertical,
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Card(
              elevation: 4.0,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(16.0),
              ),
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      widget.inventoryItem.name,
                      style: TextStyle(
                        fontSize: 24.0,
                        fontWeight: FontWeight.bold,
                        color: Colors.black,
                      ),
                    ),
                    SizedBox(height: 16.0),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Icon(
                          Icons.shopping_bag,
                          color: Colors.blue,
                        ),
                        Text(
                          'Quantity:',
                          style: TextStyle(
                            fontSize: 18.0,
                            color: Colors.black,
                          ),
                        ),
                        SizedBox(width: 8.0),
                        Text(
                          '${widget.inventoryItem.quantity}',
                          style: TextStyle(
                            fontSize: 18.0,
                            fontWeight: FontWeight.bold,
                            color: Colors.black,
                          ),
                        ),
                        Spacer(),
                      ],
                    ),
                    SizedBox(height: 16.0),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Icon(
                          Icons.calendar_today,
                          color: Colors.red,
                        ),
                        Text(
                          'Expiry Date:',
                          style: TextStyle(
                            fontSize: 18.0,
                            color: Colors.black,
                          ),
                        ),
                        SizedBox(width: 8.0),
                        Text(
                          '${widget.inventoryItem.expiryDate.day}-${widget.inventoryItem.expiryDate.month}-${widget.inventoryItem.expiryDate.year}',
                          style: TextStyle(
                            fontSize: 18.0,
                            fontWeight: FontWeight.bold,
                            color: Colors.black,
                          ),
                        ),
                        Spacer(),
                      ],
                    ),
                    SizedBox(height: 16.0),
                    Row(
                      children: [
                        Text(
                          'Request Quantity:',
                          style: TextStyle(
                            fontSize: 18.0,
                            color: Colors.black,
                          ),
                        ),
                        SizedBox(width: 8.0),
                        Expanded(
                          child: TextField(
                            keyboardType: TextInputType.number,
                            onChanged: (value) {
                              setState(() {
                                requestedQuantity = int.parse(value);
                              });
                            },
                            decoration: InputDecoration(
                              border: OutlineInputBorder(),
                              hintText: 'Enter quantity',
                            ),
                          ),
                        ),
                      ],
                    ),
                    SizedBox(height: 16.0),
                    ElevatedButton(
                      onPressed: () {
                        requestQuantity();
                        handleRequestMade(requestedFoodItem);
                        Navigator.pushAndRemoveUntil(
                          context,
                          MaterialPageRoute(
                              builder: (context) =>
                                  DashboardScreen()), // Replace DashboardScreen with your dashboard screen
                          (route) => false,
                        );
                      },
                      child: Text('Request'),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
