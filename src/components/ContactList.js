import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import '../index.css';

const ContactList = ({ searchResults }) => {
  return (
    <>
      {searchResults.length > 0 ? (
        <List>
          {searchResults.map((contact) => (
            <ListItem className="listItem" key={contact.id}>
              <ListItemText
                primary={
                  <Typography variant="body1" className="listItemPrimary">
                    {contact.name}
                  </Typography>
                }
                secondary={contact.phone}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1" className="noResultsText" align="center">
          No results found.
        </Typography>
      )}
    </>
  );
};

export default ContactList;
