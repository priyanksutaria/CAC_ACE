// // // // async function findid(email) {
// // // //   try {
// // // //     const user = await DistributorDetails.findOne({ email });
// // // //     if (user) {
// // // //       return user._id;
// // // //     } else {
// // // //       console.log('Email not found.');
// // // //       return null;
// // // //     }
// // // //   } catch (error) {
// // // //     console.error('Error finding email:', error);
// // // //     return null;
// // // //   }
// // // // }

// // // // async function insertDummyData() {
// // // //   try {
// // // //     const email = '2@gmail.com';
// // // //     const distributorId = await findid(email);
// // // //     if (distributorId) {
// // // //       const inventoryData = [
// // // //         {
// // // //           name: 'Item 9`',
// // // //           quantity: 1000,
// // // //           expiryDate: new Date('2023-12-31'),
// // // //           distributor: distributorId,
// // // //         },
// // // //       ];
// // // //       await InventoryItem.insertMany(inventoryData);
// // // //       console.log('Dummy data inserted successfully.');
// // // //     } else {
// // // //       console.log('Distributor ID not found.');
// // // //     }
// // // //   } catch (error) {
// // // //     console.error('Error inserting dummy data:', error);
// // // //   } finally {
// // // //     mongoose.connection.close();
// // // //   }
// // // // }

// // // // insertDummyData();

// // // //

// // // // TakerReqDetails.find({}).populate('inventoryItem').exec((err, takerReqs) => {
// // // //     if (err) {
// // // //       console.error(err);
// // // //       return;
// // // //     }
// // // //     console.log(takerReqs);
// // // //   });

// // // // const mongoose = require('mongoose');

// // // // // Define the volunteer schema

// // // // // Create the Volunteer model
// // // // const Volunteer = mongoose.model('Volunteer', volunteerSchema);

// // // // module.exports = Volunteer;

// // // // populateDatabase.js

// // // const mongoose = require('mongoose');

// // // // Define your Mongoose schema
// // // const volunteerSchema = new mongoose.Schema(
// // //   {
// // //     name: {
// // //       type: String,
// // //       required: true,
// // //     },
// // //     email: {
// // //       type: String,
// // //       required: true,
// // //       unique: true, // Ensure email uniqueness
// // //     },
// // //     age: {
// // //       type: Number,
// // //       required: true,
// // //     },
// // //     gender: {
// // //       type: String,
// // //       enum: ['male', 'female', 'other'],
// // //       required: true,
// // //     },
// // //     address: {
// // //       type: String,
// // //       required: true,
// // //     },
// // //     city: {
// // //       type: String,
// // //       required: true,
// // //     },
// // //     state: {
// // //       type: String,
// // //       required: true,
// // //     },
// // //     zipCode: {
// // //       type: String,
// // //       required: true,
// // //     },
// // //     phoneNumber: {
// // //       type: String,
// // //       required: true,
// // //     },
// // //     availability: {
// // //       type: String,
// // //       enum: ['full-time', 'part-time', 'weekends', 'evenings'],
// // //       required: true,
// // //     },
// // //     skills: String, // Array of skills
// // //     interests: String, // Array of interests
// // //     availabilityNotes: String, // Additional notes on availability
// // //   },
// // //   { timestamps: true }
// // // );

// // // // Create a Mongoose model
// // // const Volunteer = mongoose.model('Volunteer', volunteerSchema);

// // // // Define your dummy data
// // // const dummyVolunteers = [
// // //   {
// // //     name: 'John Doe',
// // //     email: 'john@example.com',
// // //     age: 25,
// // //     gender: 'male',
// // //     address: '123 Main St',
// // //     city: 'Anytown',
// // //     state: 'California',
// // //     zipCode: '12345',
// // //     phoneNumber: '555-123-4567',
// // //     availability: 'full-time',
// // //     skills: 'Web Development, Marketing',
// // //     interests: 'Hiking, Reading',
// // //     availabilityNotes: 'Available on weekdays',
// // //   },
// // //   {
// // //     name: 'Jane Smith',
// // //     email: 'jane@example.com',
// // //     age: 30,
// // //     gender: 'female',
// // //     address: '456 Elm St',
// // //     city: 'Sometown',
// // //     state: 'New York',
// // //     zipCode: '54321',
// // //     phoneNumber: '555-987-6543',
// // //     availability: 'part-time',
// // //     skills: 'Graphic Design, Event Planning',
// // //     interests: 'Cooking, Traveling',
// // //     availabilityNotes: 'Available on weekends',
// // //   },
// // //   {
// // //     name: 'Alice Johnson',
// // //     email: 'alice@example.com',
// // //     age: 22,
// // //     gender: 'female',
// // //     address: '789 Oak St',
// // //     city: 'Othertown',
// // //     state: 'Texas',
// // //     zipCode: '67890',
// // //     phoneNumber: '555-555-5555',
// // //     availability: 'evenings',
// // //     skills: 'Writing, Photography',
// // //     interests: 'Painting, Yoga',
// // //     availabilityNotes: 'Available after 6 PM',
// // //   },
// // //   {
// // //     name: 'Michael Brown',
// // //     email: 'michael@example.com',
// // //     age: 28,
// // //     gender: 'male',
// // //     address: '321 Pine St',
// // //     city: 'Anothertown',
// // //     state: 'Florida',
// // //     zipCode: '54321',
// // //     phoneNumber: '555-111-2222',
// // //     availability: 'full-time',
// // //     skills: 'Project Management, Public Speaking',
// // //     interests: 'Soccer, Cooking',
// // //     availabilityNotes: 'Flexible availability',
// // //   },
// // //   {
// // //     name: 'Emily Taylor',
// // //     email: 'emily@example.com',
// // //     age: 35,
// // //     gender: 'female',
// // //     address: '987 Cedar St',
// // //     city: 'Somewhere',
// // //     state: 'Arizona',
// // //     zipCode: '98765',
// // //     phoneNumber: '555-333-4444',
// // //     availability: 'weekends',
// // //     skills: 'Teaching, Counseling',
// // //     interests: 'Gardening, Traveling',
// // //     availabilityNotes: 'Available on Saturdays',
// // //   },
// // //   {
// // //     name: 'David Wilson',
// // //     email: 'david@example.com',
// // //     age: 40,
// // //     gender: 'male',
// // //     address: '654 Walnut St',
// // //     city: 'Nowhere',
// // //     state: 'Nevada',
// // //     zipCode: '45678',
// // //     phoneNumber: '555-666-7777',
// // //     availability: 'part-time',
// // //     skills: 'Accounting, Data Analysis',
// // //     interests: 'Fishing, Reading',
// // //     availabilityNotes: 'Available weekday evenings',
// // //   },
// // //   {
// // //     name: 'Sarah Martinez',
// // //     email: 'sarah@example.com',
// // //     age: 27,
// // //     gender: 'female',
// // //     address: '1010 Maple St',
// // //     city: 'Everywhere',
// // //     state: 'Illinois',
// // //     zipCode: '13579',
// // //     phoneNumber: '555-888-9999',
// // //     availability: 'full-time',
// // //     skills: 'Software Development, Database Management',
// // //     interests: 'Music, Cooking',
// // //     availabilityNotes: 'Available during business hours',
// // //   },
// // //   {
// // //     name: 'Daniel Thompson',
// // //     email: 'daniel@example.com',
// // //     age: 32,
// // //     gender: 'male',
// // //     address: '246 Oak St',
// // //     city: 'Uptown',
// // //     state: 'Washington',
// // //     zipCode: '24680',
// // //     phoneNumber: '555-000-1111',
// // //     availability: 'part-time',
// // //     skills: 'Customer Service, Sales',
// // //     interests: 'Basketball, Traveling',
// // //     availabilityNotes: 'Available on weekdays after 5 PM',
// // //   },
// // //   {
// // //     name: 'Jessica Garcia',
// // //     email: 'jessica@example.com',
// // //     age: 29,
// // //     gender: 'female',
// // //     address: '369 Elm St',
// // //     city: 'Downtown',
// // //     state: 'Colorado',
// // //     zipCode: '36912',
// // //     phoneNumber: '555-222-3333',
// // //     availability: 'weekends',
// // //     skills: 'Event Coordination, Marketing',
// // //     interests: 'Photography, Cooking',
// // //     availabilityNotes: 'Available on Sundays',
// // //   },
// // //   {
// // //     name: 'Christopher Clark',
// // //     email: 'chris@example.com',
// // //     age: 26,
// // //     gender: 'male',
// // //     address: '111 Pine St',
// // //     city: 'Midtown',
// // //     state: 'Georgia',
// // //     zipCode: '11111',
// // //     phoneNumber: '555-444-5555',
// // //     availability: 'full-time',
// // //     skills: 'Web Design, SEO',
// // //     interests: 'Gaming, Hiking',
// // //     availabilityNotes: 'Flexible availability',
// // //   },
// // // ];

// // // // Connect to MongoDB
// // // mongoose.connect('mongodb://localhost:27017/Hackathon');

// // // // Function to insert dummy data into MongoDB
// // // // Function to insert dummy data into MongoDB
// // // async function insertDummyData() {
// // //   try {
// // //     for (const volunteer of dummyVolunteers) {
// // //       try {
// // //         await Volunteer.create(volunteer);
// // //         console.log(`Inserted ${volunteer.email} successfully`);
// // //       } catch (error) {
// // //         if (
// // //           error.code === 11000 &&
// // //           error.keyPattern &&
// // //           error.keyPattern.email
// // //         ) {
// // //           console.log(`Skipped ${volunteer.email} due to duplicate key error`);
// // //         } else {
// // //           console.error(`Error inserting ${volunteer.email}:`, error);
// // //         }
// // //       }
// // //     }
// // //   } catch (error) {
// // //     console.error('Error inserting dummy data:', error);
// // //   } finally {
// // //     mongoose.disconnect(); // Disconnect from MongoDB
// // //   }
// // // }

// // // // Call the function to insert dummy data
// // // insertDummyData();

// // // Import required modules
// // const geocoder = require('geocoder'); // Use a geocoding library like 'geocoder'

// // // Define a function to calculate distance between two coordinates using Haversine formula
// // function calculateDistance(coords1, coords2) {
// //   const earthRadius = 6371; // Earth's radius in kilometers

// //   const lat1 = toRadians(coords1.lat);
// //   const lat2 = toRadians(coords2.lat);
// //   const deltaLat = toRadians(coords2.lat - coords1.lat);
// //   const deltaLng = toRadians(coords2.lng - coords1.lng);

// //   const a =
// //     Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
// //     Math.cos(lat1) *
// //       Math.cos(lat2) *
// //       Math.sin(deltaLng / 2) *
// //       Math.sin(deltaLng / 2);
// //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

// //   const distance = earthRadius * c; // Distance in kilometers
// //   return distance;
// // }

// // // Function to convert degrees to radians
// // function toRadians(degrees) {
// //   return degrees * (Math.PI / 180);
// // }

// // // Function to recommend donors based on proximity
// // async function recommendDonors(takerZipCode, donorData) {
// //   // Array to store donor information along with distances
// //   const donorDistances = [];

// //   try {
// //     // Convert taker's zip code to coordinates
// //     const takerData = await geocoder.geocode(takerZipCode);
// //     const takerCoords = { lat: takerData.lat, lng: takerData.lng };

// //     // Iterate over donor data and convert zip codes to coordinates
// //     for (const donorItem of donorData.inventoryItems) {
// //       const donorZipCode = donorItem.distributor.pincode;
// //       const donorData = await geocoder.geocode(donorZipCode);
// //       const donorCoords = { lat: donorData.lat, lng: donorData.lng };

// //       // Calculate distance between taker and donor
// //       const distance = calculateDistance(takerCoords, donorCoords);

// //       // Store distance along with donor information
// //       donorDistances.push({ distributor: donorItem.distributor, distance });
// //     }

// //     // Sort donors based on distance
// //     donorDistances.sort((a, b) => a.distance - b.distance);
// //     console.log('Recommended donors:', donorDistances);
// //   } catch (error) {
// //     console.error('Error while recommending donors:', error);
// //   }
// // }

// // // Example usage
// // const takerZipCode = '401107'; // Example taker's zip code
// // const donorData = {
// //   inventoryItems: [
// //     {
// //       _id: '65f561c2406e97a5bf0395fe',
// //       name: 'Product Name',
// //       quantity: 10,
// //       expiryDate: '2024-12-31T00:00:00.000Z',
// //       distributor: {
// //         _id: '65f5617f406e97a5bf0395f9',
// //         businessName: 'Distributor 1',
// //         email: 'Harsh@example.com',
// //         location: 'Location 1',
// //         city: 'City 1',
// //         state: 'State 1',
// //         pincode: '400096',
// //         role: 'business',
// //         createdAt: '2024-03-16T09:08:15.945Z',
// //         updatedAt: '2024-03-16T09:08:15.945Z',
// //         __v: 0,
// //       },
// //       available: 'true',
// //       createdAt: '2024-03-16T09:09:22.733Z',
// //       updatedAt: '2024-03-16T09:09:22.733Z',
// //       __v: 0,
// //     },
// //     {
// //       _id: '65f561ce406e97a5bf039601',
// //       name: 'Prosodivneo Name',
// //       quantity: 1000000,
// //       expiryDate: '2024-12-31T00:00:00.000Z',
// //       distributor: {
// //         _id: '65f56192406e97a5bf0395fb',
// //         businessName: 'Distributor 1',
// //         email: 'sneh@example.com',
// //         location: 'Location 1',
// //         city: 'City 1',
// //         state: 'State 1',
// //         pincode: '411001',
// //         role: 'business',
// //         createdAt: '2024-03-16T09:08:34.254Z',
// //         updatedAt: '2024-03-16T09:08:34.254Z',
// //         __v: 0,
// //       },
// //       available: 'true',
// //       createdAt: '2024-03-16T09:09:34.219Z',
// //       updatedAt: '2024-03-16T09:09:34.219Z',
// //       __v: 0,
// //     },
// //   ],
// // };

// // recommendDonors(takerZipCode, donorData);

// // // function recommendDonors(takerZipCode, donorData) {
// // //   const donorDistances = [];

// // //   geocoder.geocode(takerZipCode, function (err, takerData) {
// // //     if (!err) {
// // //       const takerCoords = { lat: takerData.lat, lng: takerData.lng };

// // //       donorData.inventoryItems.forEach((donorItem) => {
// // //         const donorZipCode = donorItem.distributor.pincode;
// // //         geocoder.geocode(donorZipCode, function (err, donorCoords) {
// // //           if (!err) {
// // //             const distance = calculateDistance(takerCoords, {
// // //               lat: donorCoords.lat,
// // //               lng: donorCoords.lng,
// // //             });

// // //             donorDistances.push({
// // //               distributor: donorItem.distributor,
// // //               distance,
// // //             });
// // //             if (donorDistances.length === donorData.inventoryItems.length) {
// // //               // All donors processed, sort and print
// // //               donorDistances.sort((a, b) => a.distance - b.distance);
// // //               console.log('Recommended donors:', donorDistances);
// // //             }
// // //           }
// // //         });
// // //       });
// // //     }
// // //   });
// // // }

// // // Function to recommend donors based on proximity
// const querystring = require('querystring');

// const geocoder = require('geocoder');

// // Define a function to calculate distance between two coordinates using Haversine formula
// function calculateDistance(coords1, coords2) {
//   const earthRadius = 6371; // Earth's radius in kilometers

//   const lat1 = toRadians(coords1.lat);
//   const lat2 = toRadians(coords2.lat);
//   const deltaLat = toRadians(coords2.lat - coords1.lat);
//   const deltaLng = toRadians(coords2.lng - coords1.lng);

//   const a =
//     Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
//     Math.cos(lat1) *
//       Math.cos(lat2) *
//       Math.sin(deltaLng / 2) *
//       Math.sin(deltaLng / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//   const distance = earthRadius * c; // Distance in kilometers
//   return distance;
// }

// // Function to convert degrees to radians
// function toRadians(degrees) {
//   return degrees * (Math.PI / 180);
// }

// // Function to recommend donors based on proximity
// async function recommendDonors(takerZipCode, donorData) {
//   // Array to store donor information along with distances
//   const donorDistances = [];

//   // Convert taker's zip code to coordinates
//   const takerCoords = await geocode(takerZipCode);

//   // Iterate over donor data and convert zip codes to coordinates
//   for (const donorItem of donorData.inventoryItems) {
//     const donorCoords = await geocode(donorItem.distributor.pincode);

//     // Calculate distance between taker and donor
//     const distance = calculateDistance(takerCoords, donorCoords);

//     // Store distance along with donor information
//     donorDistances.push({
//       distributor: donorItem.distributor,
//       distance,
//     });
//   }

//   // Sort donors based on distance
//   donorDistances.sort((a, b) => a.distance - b.distance);

//   console.log('Recommended donors:', donorDistances);
// }

// // Function to geocode a given zip code and return coordinates
// function geocode(zipCode) {
//   return new Promise((resolve, reject) => {
//     geocoder.geocode(zipCode, function (err, data) {
//       if (err) {
//         reject(err);
//       } else {
//         const coords = {
//           lat: data.lat,
//           lng: data.lng,
//         };
//         resolve(coords);
//       }
//     });
//   });
// }

// const takerZipCode = '401107'; // Example taker's zip code
// const donorData = {
//   inventoryItems: [
//     {
//       _id: '65f561c2406e97a5bf0395fe',
//       name: 'Product Name',
//       quantity: 10,
//       expiryDate: '2024-12-31T00:00:00.000Z',
//       distributor: {
//         _id: '65f5617f406e97a5bf0395f9',
//         businessName: 'Distributor 1',
//         email: 'Harsh@example.com',
//         location: 'Location 1',
//         city: 'City 1',
//         state: 'State 1',
//         pincode: '400096',
//         role: 'business',
//         createdAt: '2024-03-16T09:08:15.945Z',
//         updatedAt: '2024-03-16T09:08:15.945Z',
//         __v: 0,
//       },
//       available: 'true',
//       createdAt: '2024-03-16T09:09:22.733Z',
//       updatedAt: '2024-03-16T09:09:22.733Z',
//       __v: 0,
//     },
//     {
//       _id: '65f561ce406e97a5bf039601',
//       name: 'Prosodivneo Name',
//       quantity: 1000000,
//       expiryDate: '2024-12-31T00:00:00.000Z',
//       distributor: {
//         _id: '65f56192406e97a5bf0395fb',
//         businessName: 'Distributor 1',
//         email: 'sneh@example.com',
//         location: 'Location 1',
//         city: 'City 1',
//         state: 'State 1',
//         pincode: '401107',
//         role: 'business',
//         createdAt: '2024-03-16T09:08:34.254Z',
//         updatedAt: '2024-03-16T09:08:34.254Z',
//         __v: 0,
//       },
//       available: 'true',
//       createdAt: '2024-03-16T09:09:34.219Z',
//       updatedAt: '2024-03-16T09:09:34.219Z',
//       __v: 0,
//     },
//   ],
// };

// // Define the recommendDonors function here

// // Call recommendDonors with the provided data
// recommendDonors(takerZipCode, donorData);

// Define a function to calculate distance between two pin codes (mock implementation)
function calculateDistanceBetweenPinCodes(pinCode1, pinCode2) {
  // Mock implementation to return random distance
  return Math.random() * 100; // Distance in kilometers (random value for demonstration)
}

// Function to recommend donors based on proximity using pin codes
function recommendDonors(takerPinCode, donorPinCodes) {
  // Array to store donor information along with distances
  const donorDistances = [];

  // Iterate over donor pin codes and calculate distance from taker
  donorPinCodes.forEach((donorPinCode) => {
    // Calculate distance between taker and donor
    const distance = calculateDistanceBetweenPinCodes(
      takerPinCode,
      donorPinCode
    );

    // Store distance along with donor information
    donorDistances.push({
      pinCode: donorPinCode,
      distance,
    });
  });

  // Sort donors based on distance
  donorDistances.sort((a, b) => a.distance - b.distance);

  console.log('Recommended donors:', donorDistances);
}

// Test data
const takerPinCode = '401107'; // Example taker's pin code
const donorPinCodes = ['400096', '411001', '401107']; // Example donor pin codes

// Call recommendDonors with the test data
recommendDonors(takerPinCode, donorPinCodes);
