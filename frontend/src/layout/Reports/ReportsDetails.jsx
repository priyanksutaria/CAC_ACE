import React from 'react';
import './ReportDetails.css';

const ReportDetails = ({ details }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{details.name}</h5>
        <p className='card-text'>Email: {details.quantity}</p>
        <p className='card-text'>Age: {details.expiryDate}</p>
      </div>
    </div>
  );
};

export default ReportDetails;
