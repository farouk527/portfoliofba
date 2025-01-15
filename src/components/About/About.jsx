import * as React from 'react';
import { Link } from '@mui/material';
import { LinkedIn, Instagram, GitHub } from '@mui/icons-material';
import './About.css';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import backg from './backg.jpg';

export const About = () => {

    const handleDownload = () => {
        const pdfUrl = "https://farouk527.github.io/portfoliofba/CV__FAROUK_BEN__ALAYA.pdf";
        const link = document.createElement('a');
        link.href = pdfUrl; 
        link.download = 'Cv_Farouk.pdf';
        link.click();
      };

    return (
        <div className="BigDiv">
            <div className="seconddiv">

                <h1>
                <img src={backg} alt="Background" style={{ width: '220vh', height: '72vh' }} />
                </h1>
                <div>
                    <Link href="https://www.linkedin.com/in/fbenalaya/" target="_blank">
                        <LinkedIn sx={{ fontSize: 40, color: '#0A66C2' }} />
                    </Link>
                    <Link href="https://www.instagram.com/farouk_ben_alaya/" target="_blank">
                        <Instagram sx={{ fontSize: 40, color: '#E4405F' }} />
                    </Link>
                    <Link href="https://github.com/farouk527" target="_blank">
                        <GitHub sx={{ fontSize: 40, color: '#1877F2' }} />
                    </Link>
                </div>
                <Button variant="outlined" onClick={handleDownload} startIcon={<DownloadIcon/>}>Download My Resume</Button>

            </div>
           
           
        </div>
    );
};
