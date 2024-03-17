// // Function to recommend donors based on proximity
const querystring = require('querystring');

const geocoder = require('geocoder');

// Define a function to calculate distance between two coordinates using Haversine formula
function calculateDistance(coords1, coords2) {
  const earthRadius = 6371; // Earth's radius in kilometers

  const lat1 = toRadians(coords1.lat);
  const lat2 = toRadians(coords2.lat);
  const deltaLat = toRadians(coords2.lat - coords1.lat);
  const deltaLng = toRadians(coords2.lng - coords1.lng);

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(deltaLng / 2) *
      Math.sin(deltaLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = earthRadius * c; // Distance in kilometers
  return distance;
}

// Function to convert degrees to radians
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

// Function to recommend donors based on proximity
async function recommendDonors(takerZipCode, donorData) {
  // Array to store donor information along with distances
  const donorDistances = [];

  // Convert taker's zip code to coordinates
  const takerCoords = await geocode(takerZipCode);

  // Iterate over donor data and convert zip codes to coordinates
  for (const donorItem of donorData.inventoryItems) {
    const donorCoords = await geocode(donorItem.distributor.pincode);

    // Calculate distance between taker and donor
    const distance = calculateDistance(takerCoords, donorCoords);

    // Store distance along with donor information
    donorDistances.push({
      distributor: donorItem.distributor,
      distance,
    });
  }

  // Sort donors based on distance
  donorDistances.sort((a, b) => a.distance - b.distance);

  console.log('Recommended donors:', donorDistances);
}
