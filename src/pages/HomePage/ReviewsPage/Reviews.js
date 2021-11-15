import { Grid , Box, Typography} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from './Review';
const Reviews = () => {
const [reviews,setReviews]=useState([]);

useEffect(()=>{
    fetch('https://morning-wildwood-92254.herokuapp.com/review')
    .then(res=>res.json())
    .then(data=>setReviews(data))
},[])
    return (
        <Box sx={{ flexGrow: 1, marginLeft:'40px',marginRight:'35px'}}>
            
            <Grid container spacing={2} >
            {
                reviews.map(review=>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Review
                    key={review._id}
                    review={review}
                    ></Review>
                    </Grid>
                )
            }
            </Grid>
        </Box>
    );
};

export default Reviews;