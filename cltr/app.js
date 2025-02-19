const mongoose = require('mongoose');
const express = require('express');
const app = express();
const { DistributorDetails, InventoryItem } = require('./models/Giver');
const bodyParser = require('body-parser');
const { TakerDetails, TakerReqDetails } = require('./models/Taker');
const { Volunteer, pointer } = require('./models/volunteer');
const cors = require('cors');
const { ObjectId } = require('mongodb');

// Parse JSON bodies for this app
app.use(bodyParser.json());
app.use(cors());

async function connectToDatabase() {
  try {
    await mongoose.connect(
      'mongodb+srv://snehd:snehd@cluster0.amultfg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Hackathon'
    );
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}

connectToDatabase().then(() => {
  console.log(`Connected to DB`);
});

//ADDITION OF GIVER DETAILS AND INVENTROY
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

//ADDITION OF TAKERDETAILS
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

// app.post('/takerReq', async (req, res) => {
//   try {
//     const { reqQuantity, takerEmail, inventoryId } = req.body;

//     const update = async (_id) => {
//       const inventoryItem = await InventoryItem.findById(_id);
//       const preQuantity = inventoryItem.quantity;

//       let newQuantity = preQuantity - reqQuantity;
//       //let newAvailable = inventoryItem.available;

//       if (newQuantity <= 0) {
//         newQuantity = 0;
//         newAvailable = 'false';
//         const result = await InventoryItem.findByIdAndUpdate(
//           _id,
//           {
//             $set: {
//               quantity: newQuantity,
//               available: 'false',
//             },
//           }
//           //{ new: true }
//         );
//       } else {
//         const result = await InventoryItem.findByIdAndUpdate(
//           _id,
//           {
//             $set: {
//               quantity: newQuantity,
//               available: newAvailable,
//             },
//           }
//           // { new: true }
//         );
//       }
//     };

//     await update(inventoryId);

//     const taker = new TakerReqDetails({
//       reqQuantity,
//       takerEmail,
//       inventoryId,
//     });
//     await taker.save();

//     res
//       .status(200)
//       .send('Taker request saved successfully. Inventory updated.');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error saving taker request.');
//   }
// });

app.post('/volunteerAddition', async (req, res) => {
  try {
    const {
      name,
      email,
      age,
      gender,
      address,
      city,
      state,
      zipCode,
      phoneNumber,
      availability,
      skills,
      interest,
      availabilityNotes,
    } = req.body;

    // Create an instance of the Distributor model
    const volunteer = new Volunteer({
      name,
      email,
      age,
      gender,
      address,
      city,
      state,
      zipCode,
      phoneNumber,
      availability,
      skills,
      interest,
      availabilityNotes,
    });

    // Save the distributor data to the database
    await volunteer.save();
    const user = await Volunteer.findOne({ email });
    if (user) {
      const id = user._id;
      const volunteerleader = new pointer({
        volunteerId: id, // Set volunteerId to the _id of the saved Volunteer document
        points: 0,
      });
      // Save the volunteerleader document to the database
      await volunteerleader.save();
    } else {
      console.log('No volunteer found with the given email');
    }
    console.log(user);
    res.status(200).send('Taker data saved successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving Taker data.');
  }
});
app.post('/takerReq', async (req, res) => {
  try {
    const { reqQuantity, takerEmail, inventoryId } = req.body;

    const update = async (_id) => {
      const inventoryItem = await InventoryItem.findById(_id);
      const preQuantity = inventoryItem.quantity;

      let newQuantity = preQuantity - reqQuantity;

      if (newQuantity <= 0) {
        // Delete the inventory item if the new quantity is less than zero
        await InventoryItem.findByIdAndDelete(_id);
        console.log('Inventory item deleted due to insufficient quantity');
        return;
      }

      let newAvailable = inventoryItem.available;

      if (newQuantity === 0) {
        newAvailable = 'false';
      }

      const result = await InventoryItem.findByIdAndUpdate(
        _id,
        {
          $set: {
            quantity: newQuantity,
            available: newAvailable,
          },
        },
        { new: true }
      );
    };

    await update(inventoryId);

    const taker = new TakerReqDetails({
      reqQuantity,
      takerEmail,
      inventoryId,
    });
    await taker.save();

    res
      .status(200)
      .send('Taker request saved successfully. Inventory updated.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving taker request.');
  }
});

app.post('/pointers', async (req, res) => {
  try {
    // Destructure data from the request body
    const { volunteerId, points } = req.body;

    // Find the volunteer document using the volunteerId
    const user = await pointer.findOne({ volunteerId });

    if (!user) {
      return res.status(404).json({ error: 'Volunteer not found' });
    }

    const newPoints = user.points + points;

    // Update the existing Pointers document
    const updatedPointer = await pointer.findOneAndUpdate(
      { volunteerId },
      { $set: { points: newPoints } },
      { new: true }
    );

    res.status(200).json({
      message: 'Pointers updated successfully',
      pointer: updatedPointer,
    });
  } catch (error) {
    console.error('Error updating pointers:', error);
    res.status(500).json({ error: 'Error updating pointers' });
  }
});

//GETTIN REQ

app.get('/inventory', async (req, res) => {
  try {
    const inventoryItems = await InventoryItem.find().populate('distributor');

    res.json({ inventoryItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/volunteer', async (req, res) => {
  try {
    const inventoryItems = await Volunteer.find();

    res.json(inventoryItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/leaderboard', async (req, res) => {
  try {
    const leaderboard = await pointer.find().populate('volunteerId');
    const sortedInventory = leaderboard.sort((a, b) => b.points - a.points);

    res.json(sortedInventory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(4000, () => {
  console.log(`Server Started`);
});
