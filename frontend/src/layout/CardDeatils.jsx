import React from 'react';
import './CardDetails.css';

const CardDetails = ({ details }) => {
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
        <p className='card-text'>Interests: {details.interests}</p>
        <p className='card-text'>
          Availability Notes: {details.availabilityNotes}
        </p>
      </div>
    </div>
  );
};

export default CardDetails;
