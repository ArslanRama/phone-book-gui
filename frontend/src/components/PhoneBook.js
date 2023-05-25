import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
import './PhoneBook.css'; // Import the PhoneBook.css file for styles

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  searchField: {
    marginBottom: theme.spacing(2),
  },
}));

const PhoneBook = () => {
  const classes = useStyles();
  const [searchText, setSearchText] = useState('');
  const [phoneBookData, setPhoneBookData] = useState([]);

  useEffect(() => {
    // Load phone book data from the server
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/phonebook'); // Make a GET request to the server-side API endpoint
        setPhoneBookData(response.data);
      } catch (error) {
        console.error('Error fetching phone book data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredData = phoneBookData.filter((entry) =>
    entry.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container">
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} sm={6}>
          <TextField
            className="searchField"
            label="Search"
            value={searchText}
            onChange={handleSearchTextChange}
            fullWidth
          />
          <List>
            {filteredData.length > 0 ? (
              filteredData.map((entry) => (
                <ListItem key={entry.id} className="listItem">
                  <ListItemText
                    primary={entry.name}
                    secondary={entry.phone}
                    classes={{
                      primary: 'listItemPrimary',
                      secondary: 'listItemSecondary',
                    }}
                  />
                </ListItem>
              ))
            ) : (
              <p className="noResultsText">No results found.</p>
            )}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default PhoneBook;
