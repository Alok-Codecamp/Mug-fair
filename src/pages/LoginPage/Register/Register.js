import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Register = () => {
    const [registerData, setRegisterData]=useState({})
    const {user,registerUser}=useAuth();
    const history=useHistory();
    const location=useLocation()

    const handleOnBlur=(e)=>{
      const field=e.target.name;
      const value=e.target.value;
      const newRegisterData={...registerData};
      newRegisterData[field]=value;
      // console.log(newLoginData)
      setRegisterData(newRegisterData);
  
    }
  
   const handleRegister=()=>{
    console.log(registerData)
    registerUser(registerData.email,registerData.password,registerData.userName,history,location);
    const userInfo={...registerData,role:'user'}
    fetch('https://morning-wildwood-92254.herokuapp.com/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(userInfo)
    })
    }
    return (
        <Box >
        <Header></Header>
        <Typography variant="h4" sx={{color:'#51050F'}}>
                    Please SignUp  
                  </Typography>
      <Grid sx={{background:'lightGray', width:'65%',borderRadius:'8px',marginLeft:'auto',marginRight:'auto', marginTop:'200px',marginBottom:'200px',paddingTop:'10%',paddingBottom:'10%' }} container spacing={3}>
                        <Grid item xs={12} md={12} lg={12}>

                        <TextField
                        sx={{marginBottom:'20px'}}               
                  label="user name"
                  type="text"
                  onBlur={handleOnBlur}
                  name="userName"
                  id="standard-size-small"
                  defaultValue=""
                  size="small"
                  variant="standard"
                />
                </Grid>
                        <Grid item xs={12} md={12} lg={12}>

                        <TextField
                        sx={{marginBottom:'20px'}}               
                  label="email"
                  type="email"
                  onBlur={handleOnBlur}
                  name="email"
                  id="standard-size-small"
                  defaultValue=""
                  size="small"
                  variant="standard"
                />
                </Grid>
                <Grid item  xs={12} md={12} lg={12}>
                <TextField
                  type="password"
                  label="password"
                  onBlur={handleOnBlur}
                  name="password"
                  id="standard-size-small"
                  defaultValue=""
                  size="small"
                  variant="standard"
                />
                  <Button sx={{background:"#51050F",display:'block',marginLeft:'auto',marginRight:'auto', marginTop:'20px'
                , marginBottom:'20px'}} variant="inherit"  onClick={handleRegister} >Register</Button>
                  <NavLink style={{textDecoration:'none'}} to='/login'>Allready register? Please Signin</NavLink>
                        </Grid>
                      </Grid>
            <Footer></Footer>
      </Box>
    );
};

export default Register;