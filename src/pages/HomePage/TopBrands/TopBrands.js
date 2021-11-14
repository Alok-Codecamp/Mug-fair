import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const TopBrands = () => {
    return (
        <Box sx={{marginLeft:'35px', marginRight:'22px', background:'white'}}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={4}>
                <img style={{width:'98%'}} src="https://i.ibb.co/R01q7fq/kittens1.jpg" alt="Kitchen brand photos"/>
                <h2 style={{backgroundColor:'#51050F',color:'white', width:'98%',marginLeft:'6px'}}> Kittens</h2>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
                <img style={{width:'100%'}} src="https://i.ibb.co/0c2kvYx/exclusivelane.jpg" alt="ExclusiveLane brands"/>
                <h2 style={{color:'white',backgroundColor:'#51050F'}}>ExclusiveLane</h2>
                </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
                <img style={{width:'90%'}} src="https://i.ibb.co/m8f7cFN/laopala.jpg" alt="LaOpala brand"/>
                <h2 style={{color:'white',backgroundColor:'#51050F',width:"90%",marginLeft:'22px'}}>LaOpala</h2>
            </Grid>
            </Grid>
        </Box>
    );
};

export default TopBrands;