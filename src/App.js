import React, { useState } from 'react';
import { TextField, Typography } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import data from './data/phoneBook.json';
import ContactList from './components/ContactList';


// import ContactList and pass the searchResults state as a prop to it. 
// the handleSearchChange function handles the search logic 
// the search results are passed down to ContactList for rendering.
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const results = data.filter(
      (contact) => contact.name.toLowerCase().includes(term)
    );
    setSearchResults(results);
  };

  return (
    <div>
      <TextField
        label="Search by Name"
        value={searchTerm}
        onChange={handleSearchChange}
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
      />

      <ContactList searchResults={searchResults} />
    </div>
  );
};

export default App;
