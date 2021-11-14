import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Button, Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const MakeReview = () => {
    const [reviewData, setReviewData] = useState({})
    const [insertSuccess, setInsertSuccess]=useState(false);
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...reviewData };
        newLoginData[field] = value;
        // console.log(newLoginData)
        setReviewData(newLoginData);
    }
    //handle make admin 
    const handleMakeReview = () => {
            if(reviewData.rating>=1&&reviewData.rating<=5){
                fetch('https://morning-wildwood-92254.herokuapp.com/review',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(reviewData)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.insertedId){
                        setInsertSuccess(true);
                    }
                    
                })
            }
            else{
                alert('rating must should be less then 5 and gretter then 0')
            }
    }

    return (


        //get data

        <Box >
            <Typography variant="h4" sx={{ color: '#51050F' }}>
                Make A Review
            </Typography>
            <Grid sx={{ background: 'lightGray', width: '65%', borderRadius: '8px', marginLeft: 'auto', marginRight: 'auto', marginTop: '150px', marginBottom: '150px', paddingTop: '10%', paddingBottom: '10%' }} container spacing={3}>
                {
                    insertSuccess&& <Alert
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setInsertSuccess(false);
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
                <Grid item xs={12} md={12} lg={12}>

                    <TextField type="text"
                        style={{ marginBottom: '20px' }}
                        label="Review title"
                        onBlur={handleOnBlur}
                        name="reviewTitle"
                        id="standard-size-small"
                        defaultValue=""
                        size="small"
                        variant="filled"
                    />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <TextField
                        label="rating"
                        onBlur={handleOnBlur}
                        type="number"
                        
                        InputLabelProps={{
                          shrink: true,
                        }}
                        name="rating"
                        id="standard-size-small"
                        size="small"
                        variant="filled"
                    />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <TextField
                        multiline
                        label="description"
                        onBlur={handleOnBlur}
                        name="description"
                        id="filled-multiline-static"
                        defaultValue=""
                        rows={4}
                        variant="filled"
                    />
             

                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Button sx={{
                        background: "#51050F", display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', marginBottom: '20px',
                        color: 'white'
                    }} variant="contained" onClick={handleMakeReview} >Make Review</Button>

                </Grid>
            </Grid>
            
        </Box>
    );
};

export default MakeReview;