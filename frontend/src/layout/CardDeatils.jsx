import React from 'react';
import './CardDetails.css';
import axios from 'axios'; // Import axios for making HTTP requests

const CardDetails = ({ details }) => {
  console.log(details);
  const handleUpdatePoints = async () => {
    try {
      console.log(details._id);
      const response = await axios.post('http://localhost:4000/pointers', {
        volunteerId: details._id, // Assuming volunteerId is included in details
        points: 10, // You can adjust the points as needed
      });
      console.log(response.data); // Log the response from the API
      // You can also update the UI or show a success message here if needed
    } catch (error) {
      console.error('Error updating points:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{details.name}</h5>
        <p className='card-text'>Email: {details.email}</p>
        <p className='card-text'>Age: {details.age}</p>
        <p className='card-text'>Gender: {details.gender}</p>
        <p className='card-text'>Address: {details.address}</p>
        <p className='card-text'>City: {details.city}</p>
        <p className='card-text'>State: {details.state}</p>
        <p className='card-text'>Zip Code: {details.zipCode}</p>
        <p className='card-text'>Phone Number: {details.phoneNumber}</p>
        <p className='card-text'>Availability: {details.availability}</p>
        <p className='card-text'>Skills: {details.skills}</p>

        <p className='card-text'>
          Availability Notes: {details.availabilityNotes}
        </p>
        <button
          onClick={handleUpdatePoints}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Give Credits For Completing Task
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
