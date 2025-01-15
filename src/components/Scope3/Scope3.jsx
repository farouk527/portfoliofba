import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const data = require('./data.json');

function Scope3() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Education</h1>
      <Grid container direction="column" alignItems="center" spacing={3}>
        {data.map((item, index) => (
          <Grid item key={index} xs={12}>
              <Card
              elevation={5}
              style={{
                width: '200vh',
                margin: '10px',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#130C40',
                transition: 'transform 0.3s ease-in-out', 
                textAlign:'center'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <CardContent>
                <Typography variant="h5" component="div" style={{ color: 'white' }} gutterBottom>
                  {item.degree}
                </Typography>
                <Typography variant="subtitle1" style={{ color: 'white', marginBottom: '8px' }}>
                  {item.institution}
                </Typography>
                <Typography variant="body2" style={{ color: 'white' }}>
                  {item.startDate} - {item.endDate}
                </Typography>
                <Typography variant="body2" style={{ color: 'white' }}>
                  {item.location}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Scope3;
