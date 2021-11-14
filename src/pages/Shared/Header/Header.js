import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth';
import { Typography } from '@mui/material';
const Header = () => {
  const {user,isLoading,LogOut}=useAuth();
  // console.log(user)
    return (
      <nav className="navbar navbar-expand-lg navbar-dark" style={{background:'#51050F'}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto d-flex align-items-center">
            {/* nav link below */}
          <NavLink style={{color:'white',fontSize:'16px',fontWeight:'600',textDecoration:'none',marginTop:'-6px', marginRight:'20px' }} to="/home">Home</NavLink>
          
          {
            user.email&&<NavLink style={{color:'white',fontSize:'16px',fontWeight:'600',textDecoration:'none',marginTop:'-6px', marginRight:'20px' }} to="/dashboard">Dashboard</NavLink>
          }

          <NavLink style={{color:'white',fontSize:'16px',fontWeight:'600',textDecoration:'none',marginTop:'-6px', marginRight:'20px' }} to="/moreProducts">More Products</NavLink>
          <NavLink style={{color:'white',fontSize:'16px',fontWeight:'600',textDecoration:'none',marginTop:'-6px', marginRight:'20px' }} to="/about">About</NavLink>
          { user?.email? <Button sx={{color:'white'}} variant="inherit" onClick={LogOut}>Log Out</Button> 
          :
         <NavLink style={{color:'white',fontSize:'16px',fontWeight:'600',textDecoration:'none', marginTop:'-5px' }} to="/login">Login</NavLink>
          }
          <Typography sx={{color:'white'}} variant="h6">
            {user?.displayName}
          </Typography>
          </div>
        </div>
      </div>
    </nav>
         
       
       
    );
};

export default Header;