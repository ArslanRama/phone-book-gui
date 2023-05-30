import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  TextField,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import "./PhoneBook.css";

const PhoneBook = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/phonebook");
        setSearchResults(response.data);
        console.log(response.data); // Check if the data is fetched correctly
      } catch (error) {
        console.error("Error fetching phone book data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = async (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term) {
      try {
        const response = await axios.get("http://localhost:3001/api/phonebook");
        const results = response.data.filter((contact) =>
          contact.name.toLowerCase().includes(term)
        );
        setSearchResults(results);
      } catch (error) {
        console.error("Error fetching phone book data:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const filteredData = searchTerm ? searchResults : [];

  return (
    <div className="phonebook-container">
      <h1 className="title">Phone Book</h1>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <TextField
            className="searchField"
            label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            fullWidth
          />
          <List>
            {filteredData.map((entry) => (
              <ListItem key={entry.name} className="listItem">
                <ListItemText
                  primary={entry.name}
                  secondary={entry.phone}
                  classes={{
                    primary: "listItemPrimary",
                    secondary: "listItemSecondary",
                  }}
                />
              </ListItem>
            ))}
            {filteredData.length === 0 && searchTerm.length > 0 && (
              <ListItem>
                <ListItemText
                  primary="No results found."
                  className="noResultsText"
                />
              </ListItem>
            )}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default PhoneBook;
