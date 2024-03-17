import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Layout from '../../components/Layout/Layout';

const StyledForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #6c63ff;
    box-shadow: 0 0 5px rgba(108, 99, 255, 0.3);
  }
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #6c63ff;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a50e5;
  }
`;

const Inventory = () => {
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    expiryDate: '',
    email: '',
    available: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:4000/inventoryAddition',
        formData
      );
      console.log(response.data); // Handle the response from the server
      // Reset the form after successful submission
      setFormData({
        name: '',
        quantity: '',
        expiryDate: '',
        available: '',
        email: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor='name'>Name:</Label>
          <Input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='quantity'>Quantity:</Label>
          <Input
            type='number'
            id='quantity'
            name='quantity'
            value={formData.quantity}
            onChange={handleChange}
            min='0'
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='expiryDate'>Expiry Date:</Label>
          <Input
            type='date'
            id='expiryDate'
            name='expiryDate'
            value={formData.expiryDate}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='distributor'>Distributor Email:</Label>
          <Input
            type='text'
            id='distributor'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='available'>Available:</Label>
          <Input
            type='text'
            id='available'
            name='available'
            value={formData.available}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <SubmitButton type='submit'>Add Inventory Item</SubmitButton>
      </StyledForm>
    </Layout>
  );
};

export default Inventory;
