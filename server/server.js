// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; // Replace with your desired port number
const phoneBookData = require('./data/phoneBook.json'); // Assuming you have phone book data stored in a separate file

app.use(cors());
app.use(express.json());

// Endpoint to get all phone book entries
app.get('/api/phonebook', (req, res) => {
  res.json(phoneBookData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
