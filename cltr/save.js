const mongoose = require('mongoose');
const express = require('express');
const app = express();
const { DistributorDetails, InventoryItem } = require('./models/Giver');

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/Hackathon');
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}

connectToDatabase().then(() => {
  console.log(`Connected to DB`);
});

app.post('/giverDetails', (req, res) => {
  const { email, businessName, location, city, state, pincode } = req.body;
});

const distributorData = [
  {
    email: '1@gmail.com',
    businessName: 'Distributor 1',
    location: 'Location 1',
    city: 'City 1',
    state: 'State 1',
    pincode: '123456',
  },
  {
    email: '2@gmail.com',
    businessName: 'Distributor 2',
    location: 'Location 2',
    city: 'City 2',
    state: 'State 2',
    pincode: '654321',
  },
];

const email = '1@gmail.com';

async function findid(email) {
  try {
    const user = await DistributorDetails.findOne({ email });
    if (user) {
      return user._id;
    } else {
      console.log('Email not found.');
      return null;
    }
  } catch (error) {
    console.error('Error finding email:', error);
    return null;
  }
}

async function insertDummyData() {
  try {
    const email = '2@gmail.com';
    const distributorId = await findid(email);
    if (distributorId) {
      const inventoryData = [
        {
          name: 'Item 9`',
          quantity: 1000,
          expiryDate: new Date('2023-12-31'),
          distributor: distributorId,
        },
      ];
      await InventoryItem.insertMany(inventoryData);
      console.log('Dummy data inserted successfully.');
    } else {
      console.log('Distributor ID not found.');
    }
  } catch (error) {
    console.error('Error inserting dummy data:', error);
  } finally {
    mongoose.connection.close();
  }
}

insertDummyData();

app.listen(3000, () => {
  console.log(`Server Started`);
});
