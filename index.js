const express = require('express');
const app = express();
const serverless = require('serverless-http');

app.use(express.json());

// Define your routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Export the app as a serverless function
module.exports = app;
module.exports.handler = serverless(app);