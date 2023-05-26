import React from 'react';
import { Container, createTheme, ThemeProvider, styled } from '@mui/material';
import PhoneBook from './components/PhoneBook';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const CustomGrid = styled(PhoneBook)({
  '& .MuiGrid-grid-sm-6': {
    maxWidth: 'unset',
    flexBasis: 'unset',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <CustomGrid />
      </Container>
    </ThemeProvider>
  );
};

export default App;
