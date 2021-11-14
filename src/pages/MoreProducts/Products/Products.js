import React,{useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from '../Product/Product';
import Header from '../../Shared/Header/Header';
import { CircularProgress } from '@mui/material';



const Products = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://morning-wildwood-92254.herokuapp.com/mugs')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

   

    return (
        <>
        <Header></Header>
        <Box sx={{ flexGrow: 1, marginTop:'80px', marginLeft:'40px',marginRight:'35px'}}>
            {
                products.length===0&&<CircularProgress></CircularProgress>
            }
            <Grid container spacing={2} >
            {
                products.map(product=>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Product
                    key={product._id}
                    product={product}
                    ></Product>
                    </Grid>
                )
            }
            </Grid>
        </Box>
        </>
    );
};

export default Products;