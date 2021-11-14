import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid, Typography } from '@mui/material';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import useAuth from '../../../Hooks/useAuth';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
const Login = () => {
  const [loginData, setLoginData] = useState({})
  const { SignIn, setIsLoading, setUser } = useAuth();
  const history = useHistory();
  const location = useLocation();
  //get data
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    // console.log(newLoginData)
    setLoginData(newLoginData);
  }

  //handle Login with email and password

  const handleLogin = () => {

    console.log(loginData)
    SignIn(loginData.email, loginData.password,)
      .then((result) => {
        // console.log(location)
        setUser(result.user);
        history.push(location.state.from || '/home')
        setIsLoading(false)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }
  return (
    <Box >
      <Header></Header>
      <Typography variant="h4" sx={{ color: '#51050F' }}>
        Please Login
      </Typography>
      <Grid sx={{ background: 'lightGray', width: '65%', borderRadius: '8px', marginLeft: 'auto', marginRight: 'auto', marginTop: '150px', marginBottom: '150px', paddingTop: '10%', paddingBottom: '10%' }} container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>

          <TextField
            sx={{ marginBottom: '20px' }}
            label="email"
            onBlur={handleOnBlur}
            name="email"
            id="standard-size-small"
            defaultValue=""
            size="small"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField

            label="password"
            onBlur={handleOnBlur}
            name="password"
            id="standard-size-small"
            defaultValue=""
            size="small"
            variant="standard"
          />
          <Button sx={{ background: "#51050F", display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', marginBottom: '20px',color:'white' }} variant="inherit" onClick={handleLogin} >Login</Button>
          <NavLink style={{ textDecoration: 'none', }} to='/register'>New user? Please Sign up</NavLink>
        </Grid>
      </Grid>
      <Footer></Footer>
    </Box>
  );
};

export default Login;