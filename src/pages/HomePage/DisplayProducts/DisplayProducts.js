import { CircularProgress, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../../MoreProducts/Product/Product';
import Header from '../../Shared/Header/Header'
const DisplayProducts = () => {
    const [displayProducts, setDisplayProducts]=useState([]);
    useEffect(()=>{
        fetch('https://morning-wildwood-92254.herokuapp.com/mugs')
        .then(res=>res.json())
        .then(data=>setDisplayProducts(data))
    },[])

    const newProducts=displayProducts.slice(0,6); 
   

    return (
        <Box sx={{ flexGrow: 1, marginTop:'80px', marginLeft:'40px',marginRight:'35px' }}>
           {
               displayProducts.length===0&&<CircularProgress></CircularProgress>
           }
            <Grid container spacing={2} >
            {
                newProducts.map(product=>
                    <Grid key={product._id} item xs={12} sm={6} md={6} lg={4}>
                    <Product
                    key={product._id}
                    product={product}
                    ></Product>
                    </Grid>
                )
            }
            </Grid>
        </Box>
    );
};

export default DisplayProducts;