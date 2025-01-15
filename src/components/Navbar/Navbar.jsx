import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { TextObj } from '../../TextCont/textcon';
import './Navbar.css';

function Navbar({ sections }) {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div>
      <AppBar
        position="static"
        className="navbar"
        sx={{
          marginBottom: '20px',
          borderRadius: '4px',
          top: 0,
          overflow: 'hidden',
          backgroundColor: scrolled ? 'rgba(250, 254, 255, 0.9)' : 'white', 
          zIndex: 1201,
          position: 'fixed',
        }}
      >
        <Toolbar>
          <MenuItem onClick={() => handleScroll(sections.personnal)}>
            <Typography>{TextObj.aboutme}</Typography>
          </MenuItem>
          <MenuItem onClick={() => handleScroll(sections.scope3)}>
            <Typography>{TextObj.education}</Typography>
          </MenuItem>
          <MenuItem onClick={() => handleScroll(sections.scope2)}>
            <Typography>{TextObj.experience}</Typography>
          </MenuItem>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
