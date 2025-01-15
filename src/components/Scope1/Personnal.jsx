// @flow 
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import img from './img.jpeg';
import './Personnal.css'
import { Mail, Language, LocationOn, AccessTime } from '@mui/icons-material'; // Icônes Material-UI

function Personnal() {
  return (
    <div className="bigdiv">

    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            image={img}
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Full Stack Engineer proficient in React, Angular, Node.js, MongoDB, and
              Express.js. Comfortable with C and Shell scripts on Linux, I am looking to
              contribute to innovative projects while developing my technical skills in a
              dynamic company.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
      <div className="info-div">
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <AccessTime style={{ marginRight: '10px', color: 'white' }} />
          <Typography variant="h6" color='white'>Age: 25</Typography>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Mail style={{ marginRight: '10px', color: 'white' }} />
          <Typography variant="h6" color='white'>Email: benalayafarouk5@gmail.com</Typography>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Language style={{ marginRight: '10px',color: 'white' }} />
          <Typography variant="h6" color='white'>Languages: Arabic, French, English</Typography>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <LocationOn style={{ marginRight: '10px', color: 'white' }} />
          <Typography variant="h6" color='white'>Address: Avenue Gabriel Péri, Bezons,Île-de-France </Typography>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Personnal;
