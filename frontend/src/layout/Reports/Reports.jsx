import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Layout from '../../components/Layout/Layout';
import ReportsDetails from './ReportsDetails';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0069d9;
  }
`;

const InventoryList = styled.pre`
  margin: 0;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow-x: auto;
`;

const Reports = () => {
  const [email, setEmail] = useState('');
  const [inventory, setInventory] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:4000/inventory`);
      const inventoryItems = response.data.inventoryItems.filter(
        (item) => item.distributor.email === email
      );
      setInventory(inventoryItems);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor='email'>Email:</Label>
        <Input
          type='email'
          id='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button type='submit'>Get Inventory</Button>
      </Form>

      <div className='container'>
        <div className='card-container'>
          {inventory &&
            inventory.map((item) => (
              <ReportsDetails key={item._id} details={item} />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
