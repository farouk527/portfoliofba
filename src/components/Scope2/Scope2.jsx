import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const data = require("../Scope2/data.json");

function Experiences() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f4'}}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Professional Experiences</h1>
      <Grid container spacing={4} justifyContent="center">
        {data.experiences.map((experience, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              elevation={5}
              style={{
                width: '100%',
                maxWidth: '400px', 
                margin: '10px',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#130C40',
                transition: 'transform 0.3s ease-in-out', 
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom color='white'>
                  {experience.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" color='white
                '>
                  {experience.dates} - {experience.company}, {experience.location}
                </Typography>

             
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Experiences;
