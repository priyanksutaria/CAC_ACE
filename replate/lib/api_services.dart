// api_service.dart
import 'dart:convert';
// ignore: depend_on_referenced_packages
import 'package:http/http.dart' as http;
import 'package:replate/screens/home/home_screen.dart';

Future<List<Business>> fetchBusinesses() async {
  final url = Uri.parse('http://localhost:3000/inventory');
  print("1");
  final client = http.Client();
  print("2");
  var response = await client.get(url);
  print("3");
  if (response.statusCode == 200) {
    final List<dynamic> jsonData = jsonDecode(response.body);
    return jsonData.map((data) => Business.fromJson(data)).toList();
  } else {
    throw Exception('Failed to load businesses');
  }
  // var demo = {
  //   "_id": "65f561c2406e97a5bf0395fe",
  //   "name": "Product Name",
  //   "quantity": 10,
  //   "expiryDate": "2024-12-31T00:00:00.000Z",
  //   "distributor": {
  //     "_id": "65f5617f406e97a5bf0395f9",
  //     "businessName": "Distributor 1",
  //     "email": "Harsh@example.com",
  //     "location": "Location 1",
  //     "city": "City 1",
  //     "state": "State 1",
  //     "pincode": "123456",
  //     "role": "business",
  //     "createdAt": "2024-03-16T09:08:15.945Z",
  //     "updatedAt": "2024-03-16T09:08:15.945Z",
  //     "__v": 0
  //   },
  //   "available": "true",
  // };

  // final url = Uri.parse(
  //     'https://2916-2409-40c0-68-e742-aa-c228-c379-e938.ngrok-free.app/inventory');

  // try {
  //   var response = await http.post(
  //     url,
  //     headers: {"Content-Type": "application/json"},
  //     body: jsonEncode(demo),
  //   );

  // print('Response status code: ${response.statusCode}');
  // print('Response body: ${response.body}');

  //   if (response.statusCode == 200) {
  //     final List<dynamic> jsonData = jsonDecode(response.body);
  //     return jsonData.map((data) => Business.fromJson(data)).toList();
  //   } else {
  //     throw Exception('Failed to load businesses: ${response.statusCode}');
  //   }
  // } catch (e) {
  //   print('Error: $e');
  //   throw Exception('Failed to load businesses');
  // }
}
