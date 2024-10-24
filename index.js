require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const app = express();

// Use the PORT value from the environment variables, or fallback to 3000 if not set
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
