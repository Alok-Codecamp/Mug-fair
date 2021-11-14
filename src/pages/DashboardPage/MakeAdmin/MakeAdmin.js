import { Alert, AlertTitle, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
const MakeAdmin = () => {
const [adminEmail,setAdminEmail]=useState('');
const [success, setSuccess]=useState(false);
    const handleOnBlur=(e)=>{
        setAdminEmail(e.target.value);
    }
    const handleMakeAdmin=()=>{
        const admin={email:adminEmail};
        fetch('http://localhost:5000/users',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(admin)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                setSuccess(true)
            }
            
        })

    }
    return (
        <div>
            <div>
            <TextField
        onBlur={handleOnBlur}
          name="email"
          type="email"
          label="Size"
          id="filled-size-small"
          defaultValue="Small"
          variant="filled"
          size="small"
        />
            </div>
            <Button variant="contained" onClick={handleMakeAdmin}>Make Admin</Button>
            {
                success&&<Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                <strong>  congradulation ! Admin making successfull</strong>
              </Alert>
            }
        </div>
    );
};

export default MakeAdmin;