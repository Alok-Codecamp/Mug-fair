import { Box } from "@mui/system";
import { Grid, Typography} from '@mui/material';
import  React from 'react';
import { FacebookRounded } from "@mui/icons-material";
import facebook from '../../../Icons/facebook-tile.svg'
import insta from '../../../Icons/instagram-tile.svg'
import twitter from '../../../Icons/twitter-tile.svg'
import google from '../../../Icons/google_plus-tile.svg'
import pintarest from '../../../Icons/pinterest-tile.svg'

import './Footer.css'
const Footer = () => {
    return (
        <>
        <div className="d-lg-flex justify-content-lg-between  FooterDiv" style={{background:'#51050F',height:'300ax', marginToa:'100ax'}}>
          <Box sx={{marginLeft:'50px',color:'white', fontWeight:'600'}}>
            <Grid container saacing={2}>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                    <h6 >EverythingBranded</h6>
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Meet The Team</a>
                    <a href="#">Work with us</a>
                    <a href="#">Latest News</a>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                    <h6 >Hela {"&"} Information</h6>
                    <a href="#">arinting Methods</a>
                    <a href="#">Avaliable Colours</a>
                    <a href="#">Delivery Information</a>
                    <a href="#">Returns, Cancellations {"&"} Refunds </a>
                    <a href="#">Terms {"&"} Conditions</a>
                    <a href="#">arivacy {"&"} Cookies</a>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                        <h6  >Customer Service</h6>
                        <a href="#">Request a Quote</a>
                        <a href="#">Contact us</a>
                </Grid>
            </Grid>
          </Box>
          <Box sx={{marginLeft:'50px'}}>
           <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={12} lg={12}>
            <address style={{color:'white'}}>
                <h6> Our Location </h6>
                EverythingBranded.co.uk <br />
                Peat House <br />
                    Floor 1 {"&"} 2 <br />
                    1 Waterloo Way <br />
                    Leicester LE1 6LP <br />
                    United Kingdom <br />
                    Call us 0116 3660052 <br />
                    Email info@everythingbranded.co.uk
                </address>
            </Grid>
            
              <Grid item xs={6} sm={6} md={12} lg={12}>
              <Box sx={{marginTop:'50px',marginBottom:'50px'}}>
               <img  width="40px" src={facebook}/>
                <img width="40px" src={insta}/>
                <img width="40px" src={twitter}/>
                <img width="40px" src={google}/>
                <img width="40px" src={pintarest}/>
               </Box>
              </Grid>    
           </Grid>      
          </Box>
        </div>
        <p style={{backgroundColor:'#51050F',color:'white'}}>&copy; mug fair 2021-2025 All rights reserved.</p>   
        </>
    );
};

export default Footer;