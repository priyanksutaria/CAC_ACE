import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CardDetails from './layout/CardDeatils';
function Json() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:4000/volunteer');
        setData(response.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className='container'>
      <div className='card-container'>
        {data.map((item) => (
          <CardDetails key={item._id} details={item} />
        ))}
      </div>
    </div>
  );
}

export default Json;
