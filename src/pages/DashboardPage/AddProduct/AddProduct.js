import { Alert, Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
const AddProduct = () => {
    const [addedProductData, setAddedProductData]=useState({})
    const [successAddedProduct,setSuccessAddProduct]=useState(false);
    const handleOnBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        const newRegisterData={...addedProductData};
        newRegisterData[field]=value;
        // console.log(newLoginData)
        setAddedProductData(newRegisterData);
    
      }

      const handleAddNewProduct=()=>{
            fetch('https://morning-wildwood-92254.herokuapp.com/mugs',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(addedProductData)
            })
            .then(res=>res.json())
            .then(data=>{
              if(data.insertedId){
                  setSuccessAddProduct(true);
              }
            })
      }
    return (
        <div>
             <Box>
        
      <Grid sx={{background:'lightGray', width:'65%',borderRadius:'8px',marginLeft:'auto',marginRight:'80px', marginTop:'200px',marginBottom:'200px',paddingTop:'10%',paddingBottom:'10%' }} container spacing={3}>
      <Typography variant="h4" sx={{color:'#51050F',margin:'auto'}}>
        {
          successAddedProduct&&<Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setSuccessAddProduct(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Review data inserted successfully
        </Alert>
        }
          <h2>Add a product here</h2>
                  </Typography>  
                        <Grid item xs={12} md={6} lg={6}>

                        <TextField
                        sx={{marginBottom:'20px'}}               
                  label="Product name"
                  type="text"
                  onBlur={handleOnBlur}
                  name="name"
                  id="standard-size-small"
                  defaultValue=""
                  size="small"
                  variant="standard"
                />
                </Grid>
                        <Grid item xs={12} md={6} lg={6}>

                        <TextField
                        sx={{marginBottom:'20px'}}               
                  label="Color"
                  type="text"
                  onBlur={handleOnBlur}
                  name="Color"
                  id="standard-size-small"
                  defaultValue=""
                  size="small"
                  variant="standard"
                />
                </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                    <TextField
                  type="text"
                  label="price"
                  onBlur={handleOnBlur}
                  name="price"
                  id="standard-size-small"
                  defaultValue=""
                  size="small"
                  variant="standard"
                />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                    <TextField
                  type="text"
                  label="rating"
                  onBlur={handleOnBlur}
                  name="rating"
                  id="standard-size-small"
                  defaultValue=""
                  size="small"
                  variant="standard"
                />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                    <TextField
                  type="text"
                  label="image link"
                  onBlur={handleOnBlur}
                  name="imgUrl"
                  id="standard-size-small"
                  defaultValue=""
                  size="small"
                  variant="standard"
                />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                    <TextField
                  type="text"
                  label="description"
                  onBlur={handleOnBlur}
                  name="description"
                  id="illed-multiline-static"
                  multiline
                  rows={4}
                  defaultValue=""
                  size="small"
                  variant="filled"
                />
                    </Grid>
                <Grid item  xs={12} md={12} lg={12}>
               
                  <Button sx={{background:"#51050F",
                  color:"white",display:'block',marginLeft:'auto',marginRight:'auto', marginTop:'20px'
                , marginBottom:'20px'}} variant="inherit"  onClick={handleAddNewProduct} >Add Product</Button>
                        </Grid>
                      </Grid>
      </Box>
        </div>
    );
};

export default AddProduct;