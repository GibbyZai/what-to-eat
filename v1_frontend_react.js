import React, { useState } from 'react';
import axios from 'axios';

function FoodGenerator() {
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateFood = async () => {
    setLoading(true);
    setError(null);
    try {
      const position = await getCurrentPosition();
      const { data } = await axios.get('/api/nearby-restaurant', {
        params: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
      setRestaurant(data);
    } catch (err) {
      setError('Failed to fetch restaurant data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={generateFood} disabled={loading}>
        {loading ? 'Loading...' : 'Generate Food Option'}
      </button>
      {error && <p>{error}</p>}
      {restaurant && (
        <div>
          <h2>{restaurant.name}</h2>
          <p>{restaurant.address}</p>
          <p>{restaurant.cuisine}</p>
        </div>
      )}
    </div>
  );
}

function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export default FoodGenerator;