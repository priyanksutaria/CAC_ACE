import React, { useState, useEffect } from 'react';

function Json() {
  const [volunteers, setVolunteers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/volunteer'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // const data = await response.json();
        setVolunteers(response.body);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVolunteers();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Volunteer List</h1>
      <h1>{volunteers}</h1>
    </div>
  );
}

export default Json;