import { Alert, Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const Order = ({order,successDelete,handleCancleOrder}) => {
    const {_id,orderId,email,userName,name,imgUrl,price,rating}=order;

    return (
        <div  style={{boxShadow:'2px 2px 4px 4px gray',marginLeft:'50px',marginRight:'0px',width:'80%',marginTop:'50px' }}>
           
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <div>
                        <img class="w-50" src={imgUrl} alt="" />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <Box sx={{color:'#51050F'}}>
                        <h5>Order Id: {orderId}</h5>
                        <h3>Product:{name}</h3>
                        <h4>Price: {price}</h4>
                        <p>User: {userName}</p>
                        <p>Email: {email}</p>
                        <Button onClick={()=>handleCancleOrder(_id)} sx={{background:'#51050F',marginBottom:'20px'}} variant="contained">Cancle Order</Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Order;