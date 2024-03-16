class InventoryItem {
  final String id;
  final String name;
  final int quantity;
  final DateTime expiryDate;

  InventoryItem({
    required this.id,
    required this.name,
    required this.quantity,
    required this.expiryDate,
  });

  factory InventoryItem.fromJson(Map<String, dynamic> json) {
    return InventoryItem(
      id: json['_id'],
      name: json['name'],
      quantity: json['quantity'],
      expiryDate: DateTime.parse(json['expiryDate']),
    );
  }
}
