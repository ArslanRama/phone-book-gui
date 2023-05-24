const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000; // You can use any available port number

// Middleware
app.use(bodyParser.json());

// Read the phone book data from the JSON file
const phoneBookPath = path.join(__dirname, 'src/data/phoneBook.json');
let phoneBook = [];

function readPhoneBook() {
  try {
    const phoneBookData = fs.readFileSync(phoneBookPath, 'utf-8');
    phoneBook = JSON.parse(phoneBookData);
  } catch (error) {
    console.error('Error reading phone book data:', error);
  }
}

function writePhoneBook() {
  try {
    fs.writeFileSync(phoneBookPath, JSON.stringify(phoneBook, null, 2));
  } catch (error) {
    console.error('Error writing phone book data:', error);
  }
}

// Endpoint to get all contacts
app.get('/contacts', (req, res) => {
  readPhoneBook();
  res.json(phoneBook);
});

// Endpoint to search contacts by name
app.get('/contacts/search', (req, res) => {
  const searchQuery = req.query.query.toLowerCase();
  readPhoneBook();
  const results = phoneBook.filter(
    (contact) => contact.name.toLowerCase().includes(searchQuery)
  );
  res.json(results);
});

// Endpoint to add a new contact
app.post('/contacts', (req, res) => {
  const newContact = req.body;
  readPhoneBook();
  phoneBook.push(newContact);
  writePhoneBook();
  res.json({ message: 'Contact added successfully' });
});

// Endpoint to update an existing contact
app.put('/contacts/:id', (req, res) => {
  const contactId = req.params.id;
  const updatedContact = req.body;
  readPhoneBook();
  const contactIndex = phoneBook.findIndex((contact) => contact.id === contactId);
  if (contactIndex !== -1) {
    phoneBook[contactIndex] = { ...phoneBook[contactIndex], ...updatedContact };
    writePhoneBook();
    res.json({ message: 'Contact updated successfully' });
  } else {
    res.status(404).json({ error: 'Contact not found' });
  }
});

// Endpoint to delete a contact
app.delete('/contacts/:id', (req, res) => {
  const contactId = req.params.id;
  readPhoneBook();
  const contactIndex = phoneBook.findIndex((contact) => contact.id === contactId);
  if (contactIndex !== -1) {
    phoneBook.splice(contactIndex, 1);
    writePhoneBook();
    res.json({ message: 'Contact deleted successfully' });
  } else {
    res.status(404).json({ error: 'Contact not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
