import React from 'react';
import { Container} from '@mui/material';
import PhoneBook from './components/PhoneBook';


const App = () => {
  return (
      <Container maxWidth="md">
        <PhoneBook />
      </Container>
  );
};

export default App;
