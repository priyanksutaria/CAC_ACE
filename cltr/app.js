const mongoose = require('mongoose');
const express = require('express');
const app = express();
const { DistributorDetails, InventoryItem } = require('./models/Giver');
const bodyParser = require('body-parser');
const { TakerDetails, TakerReqDetails } = require('./models/Taker');

// Parse JSON bodies for this app
app.use(bodyParser.json());

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

app.post('/giverDetails', async (req, res) => {
  try {
    const { email, businessName, location, city, state, pincode, role } =
      req.body;

    // Create an instance of the Distributor model
    const distributor = new DistributorDetails({
      email,
      businessName,
      location,
      city,
      state,
      pincode,
      role,
    });

    // Save the distributor data to the database
    await distributor.save();

    res.status(200).send('Distributor data saved successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving distributor data.');
  }
});
app.post('/inventoryAddition', async (req, res) => {
  try {
    const { name, quantity, expiryDate, available, email } = req.body;

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
        const distributorId = await findid(email); // Corrected variable name
        if (distributorId) {
          const InventoryUpdation = new InventoryItem({
            name,
            quantity,
            expiryDate,
            distributor: distributorId, // Use distributorId obtained from findid(email)
            available,
          });
          await InventoryUpdation.save();
          console.log('Dummy data inserted successfully.');
        } else {
          console.log('Distributor ID not found.');
        }
      } catch (error) {
        console.error('Error inserting dummy data:', error);
      }
    }

    insertDummyData();

    // Save the distributor data to the database
    // await distributor.save();

    res.status(200).send('succes');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving distributor data.');
  }
});

// async function findid(email) {
//   try {
//     const user = await DistributorDetails.findOne({ email });
//     if (user) {
//       return user._id;
//     } else {
//       console.log('Email not found.');
//       return null;
//     }
//   } catch (error) {
//     console.error('Error finding email:', error);
//     return null;
//   }
// }

// async function insertDummyData() {
//   try {
//     const email = '2@gmail.com';
//     const distributorId = await findid(email);
//     if (distributorId) {
//       const inventoryData = [
//         {
//           name: 'Item 9`',
//           quantity: 1000,
//           expiryDate: new Date('2023-12-31'),
//           distributor: distributorId,
//         },
//       ];
//       await InventoryItem.insertMany(inventoryData);
//       console.log('Dummy data inserted successfully.');
//     } else {
//       console.log('Distributor ID not found.');
//     }
//   } catch (error) {
//     console.error('Error inserting dummy data:', error);
//   } finally {
//     mongoose.connection.close();
//   }
// }

// insertDummyData();

//

app.post('/takerDetails', async (req, res) => {
  try {
    const { takerName, email, location, city, state, pincode } = req.body;

    // Create an instance of the Distributor model
    const taker = new TakerDetails({
      takerName,
      email,
      location,
      city,
      state,
      pincode,
    });

    // Save the distributor data to the database
    await taker.save();

    res.status(200).send('Taker data saved successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving Taker data.');
  }
});

app.listen(3000, () => {
  console.log(`Server Started`);
});
