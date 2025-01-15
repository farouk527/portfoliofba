import * as React from 'react';
import { Typography, Container } from '@mui/material';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#130C40', padding: '10px 0', textAlign: 'center' }}>
      <Container>
        <Typography variant="body2" color="white">
          &copy; {new Date().getFullYear()} Farouk Ben Alaya. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
