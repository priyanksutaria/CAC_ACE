import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Button, Select } from '@chakra-ui/react';

const InventoryTable = ({ Inventory, onEdit }) => {
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredInventory = Inventory.filter(Inventory => {
    if (statusFilter === 'All') {
      return true;
    } else {
      return Inventory.status === statusFilter;
    }
  });

  const handleEdit = (id, enteredExpiryDate) => {
    // Find the inventory item by id
    const inventoryToEdit = Inventory.find(inventory => inventory.id === id);
    
    // Convert entered expiry date to timestamp
    const enteredExpiryTimestamp = new Date(enteredExpiryDate).getTime();

    // Get current timestamp
    const currentTimestamp = new Date().getTime();

    // Check if entered expiry date has passed
    const isExpired = enteredExpiryTimestamp < currentTimestamp;

    // Determine status color based on expiration
    const statusColor = isExpired ? 'red' : 'green';

    // Call the onEdit function with the updated inventory object
    onEdit(id, { ...inventoryToEdit, expiryDate: enteredExpiryDate, statusColor: statusColor });
  };

  return (
    <div>
      <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Cleaned">Cleaned</option>
        <option value="Pending">Pending</option>
        <option value="Unclean">Unclean</option>
      </Select>
      <Table variant="striped" colorScheme="gray" borderWidth="1px">
        <Thead>
          <Tr>
            <Th>Item Number</Th>
            <Th>Item Type</Th>
            <Th>Quantity</Th>
            <Th>Expiry Date</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredInventory.map((Inventory, index) => (
            <Tr key={Inventory.id} style={{ opacity: 0, animation: `fadeIn ease-in ${index * 0.1}s forwards` }}>
              <Td>{Inventory.ItemNumber}</Td>
              <Td>{Inventory.ItemType}</Td>
              <Td>{Inventory.Quantity}</Td>
              <Td>
                <span
                  style={{
                    color:
                      Inventory.Expiry_Date === '18/2/24' ? 'red' : 
                      Inventory.Expiry_Date === '12/7/24' ? 'green' :
                      Inventory.Expiry_Date === '28/11/24' ? 'green' :
                      'green',
                  }}
                >
                  {Inventory.Expiry_Date}
                </span>
              </Td>
              <Td>
                <Button colorScheme="blue" size="sm" onClick={() => handleEdit(Inventory.id)}>Edit</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default InventoryTable;
