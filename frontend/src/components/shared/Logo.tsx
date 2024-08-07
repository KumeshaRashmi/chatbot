import Typography from '@mui/material/Typography';
import React from 'react'
import { Link } from 'react-router-dom';

const Logo = () => {
  return (<div 
  style={{
    display :"flex",
    marginRight :"auto",
    alignItems:"center",
    gap : "15px",

  }}
  >
    <Link to={"/"}>
    <img 
    src ="logo6.png"
     alt="openai" 
     width={"50px"} 
     height={"50px"} 
     className ="image-inverted"
     />
    </Link>{" "}
    <Typography 
    sx={{
        display :{md:"block",sm:"none",xs:"none"}, 
        mr:"auto",
        fontWeight: "600",
        //color:"black"
        textShadow :"2px 2px 20px #000",
        }}
        >
           <span style={{ fontSize: "30px" }}>KUMIAI</span>-Bot
        </Typography>
  </div>
);
};


export default Logo;
