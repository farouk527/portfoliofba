import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Blog from "./Blog.jpg";
import { Link } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import dash from "./dash.jpg";
import Univ from "./Univ.jpg"
function Scope4  () {
    return (
        <div>
        <h1 style={{textAlign : 'center'}}>Projects</h1>

        <div style={{ width: '200vh',
        borderRadius: '8px',
        marginLeft:'4%',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#130C40',
        transition: 'transform 0.3s ease-in-out', 
        textAlign:'center',
        display:'flex',
        gap:"10%"
        }}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
         style={{ height: 140 }}
        image={Blog}
         title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Social Blog
        </Typography>
       <Typography variant="body2" sx={{ color: 'text.secondary' }}>
     Small application built with the MERN stack to share posts and information between users.
     The main goal is to provide updates on various topics. Only the front-end part is shared in the Azure DevOps repository.
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="https://dev.azure.com/FrontBlogApp/_git/FrontBlogApp?path=/src">
        <Button size="small" ><RemoveRedEyeIcon/></Button>
        </Link>
      </CardActions>
    </Card>
        


    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
         style={{ height: 140 }}
        image={dash}
         title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Flex - Dashboard
        </Typography>
       <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       Small application built with the MERN stack to provide users with flexibility in creating and customizing their own dashboards.
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="https://github.com/farouk527/customizable-dashboard">
        <Button size="small" ><RemoveRedEyeIcon/></Button>
        </Link>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
         style={{ height: 140 }}
        image={Univ}
         title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        small University Management Platform   
         </Typography>
       <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       Small application built with the MERN stack to create a website for managing university courses and professors.
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="https://github.com/farouk527/Univ_App">
        <Button size="small" ><RemoveRedEyeIcon/></Button>
        </Link>
      </CardActions>
    </Card>
        </div>

        <div style={{ width: '200vh',
        marginLeft:'4%',
        padding: '20px',
        transition: 'transform 0.3s ease-in-out', 
        textAlign:'center',
        }}>
            <p  style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#444',
            backgroundColor: '#f9f9f9',
            padding: '15px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                border: '1px solid #ddd',
                maxWidth: '600px',
            margin: '20px auto',
            }}> 
            If you would like to see more of my code, I invite you to visit my GitHub; the link is provided above. 
            You will find richer and more organized projects that I cannot share,
             either because they are from internships I have completed and therefore belong to the companies (confidentiality reasons) 
             or because they are still on my computer and have not yet been shared.
             </p>
        </div>

        </div>
    );
};

export default Scope4;
