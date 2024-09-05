# Project What To Eat

To build a web app with a 1-click button to randomly generate food options based on the client's location, we'll need to create a simple frontend interface and integrate it with a backend service that can fetch nearby restaurant data. 

Here's a high-level approach to implement this:
1.Frontend (React): #v1_frontend_react.js
2.Backend (Node.js with Express): #backend_nodejs_express.js

This implementation assumes you're using a third-party API (like Google Places API) to fetch nearby restaurant data. 
You'll need to replace 'https://api.example.com/nearby-restaurants' with the actual API endpoint and provide the necessary API key.

## Steps to complete the project (high level)

1. Set up a React project for the frontend
2. Create a Node.js backend with Express
3. Integrate with a restaurant data API (e.g., Google Places, Yelp Fusion)
4. Deploy both frontend and backend to a hosting service

Remember to handle error cases, implement proper security measures, and consider rate limiting to prevent abuse of your API key.

### Build all containers
