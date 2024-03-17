import React, { useState } from 'react'
import ContentTop from '../../components/ContentTop/ContentTop'
import Layout from '../../components/Layout/Layout'
import InventoryTable from './InventoryTable';
import { Heading } from '@chakra-ui/react';

const Inventory = () => {
    const [Inventory, setInventory] = useState([
            { id: 1, ItemNumber: '101', ItemType: 'Rice', Quantity: 200,  Expiry_Date: '12/7/24' },
            { id: 2, ItemNumber: '102', ItemType: 'Chapati',  Quantity: 100, Expiry_Date: '18/2/24'},
            { id: 3, ItemNumber: '103', ItemType: 'Burger',  Quantity: 400,  Expiry_Date: '28/11/24' },
            
      ]);
    
      const handleEdit = (InventoryId) => {
        // Implement edit functionality here
        console.log(`Editing Inventory with id ${InventoryId}`);
      };
    
    
      return (
        <Layout>
            <div>
            <Heading mb={10}>Inventory List</Heading>
            <InventoryTable Inventory={Inventory} onEdit={handleEdit} />
            </div>
        </Layout>
      );
    };

export default Inventory