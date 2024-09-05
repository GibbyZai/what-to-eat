const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/nearby-restaurant', async (req, res) => {
  const { lat, lng } = req.query;
  try {
    const response = await axios.get('https://api.example.com/nearby-restaurants', {
      params: {
        lat,
        lng,
        radius: 2000, // 2km in meters
      },
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
      }
    });
    const restaurants = response.data.results;
    const randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    res.json(randomRestaurant);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch nearby restaurants' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));