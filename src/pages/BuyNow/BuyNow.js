import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth'
import Header from '../Shared/Header/Header';
const BuyNow = () => {
    const {id}=useParams();
    const {user}=useAuth();
    const [orderdProduct,setOrderdProduct]=useState({});
    const {name,imgUrl,description,_id,price,rating}=orderdProduct;
    const {displayName,email}=user;
    useEffect(()=>{
        const url=`http://localhost:5000/mugs/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrderdProduct(data))
    },[])
      const orderDate=new Date();
    const handleOnBlur=(e)=>{
      const field=e.target.name;
      const value=e.target.value;
      const newRegisterData={...orderdProduct};
      newRegisterData[field]=value;
      setOrderdProduct(newRegisterData)
    }

    const handleConfirmBuy=()=>{
      const changdeId={...orderdProduct};
      delete changdeId._id;
      const saveData={...changdeId,email,orderId:_id}
        fetch('http://localhost:5000/order',{
          method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(saveData)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            alert('congradulation ! your order confirmed by mug fair')
          }
        })


          // console.log(saveData)
    }
    return (
        <div>
            <Header></Header>
           <Grid container spacing={2}>
           <Grid item xs={12} sm={12} md={4} lg={4}>
                <img style={{width:'50%'}} src={imgUrl}/>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={4}>
                <Typography variant="h5">
                    {name}
                </Typography>
                <Typography variant="h6">
                  price: {price}
                </Typography>
                <Typography variant="h6">
                    {rating}
                </Typography>
                <Typography variant="h6">
                    {description}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={4}>
            <Box
    >
      <div style={{marginTop:'20px'}}>
      <TextField
        onBlur={handleOnBlur}
        name="userName"
          label="User"
          type="text"
          id="outlined-size-small"
          defaultValue={displayName}
          size="small"
        />
      </div>
      <div style={{marginTop:'20px'}}>
        <TextField
        onBlur={handleOnBlur}
        name="email"
          label="email"
          id="outlined-size-small"
          defaultValue={email}
          size="small"
        />
      </div>
      <div style={{marginTop:'20px'}}>
        <TextField
        onBlur={handleOnBlur}
          name="mobile"
          label="mobile"
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
      </div >
      <div style={{marginTop:'20px'}}>
        <TextField
          
          name="orederDate"
          label="orderDate"
          id="outlined-size-small"
          defaultValue={orderDate.toLocaleDateString()}
          size="small"
        />
      </div>
      <Button onClick={handleConfirmBuy} variant="contained" sx={{background:"#51050F",marginTop:'20px',marginBottom:'50px'}}>Confirm Order</Button>
     
    </Box>
            </Grid>
                
           </Grid>
            

        </div>
    );
};

export default BuyNow;