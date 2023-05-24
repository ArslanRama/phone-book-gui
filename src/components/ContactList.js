import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';


// create a functional component that receives searchResults as a prop. 
// render the contact list based on the provided search results.
const ContactList = ({ searchResults }) => {
  return (
    <>
      {searchResults.length > 0 ? (
        <List>
          {searchResults.map((contact) => (
            <ListItem key={contact.id}>
              <ListItemText
                primary={contact.name}
                secondary={contact.phone}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1" align="center">
          No results found.
        </Typography>
      )}
    </>
  );
};

export default ContactList;
