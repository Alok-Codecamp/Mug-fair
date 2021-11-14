import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router';
import './DisplayProduct.css'

const Displayproduct = ({product}) => {
    const history=useHistory();
    const {_id,name,price,imgUrl,description,rating}=product;
    const handleBookNow=(id)=>{
        history.push(`/buynow/${id}`);
    }
    return (
        <Box className="cardContainer">
           <div>
               <img style={{width:'100px',height:'100px'}} src={imgUrl}/>
           </div>
           <div style>
               <h3>{name}</h3>
               <p>Price: {price}</p>
               <p>Rating: {rating}</p>
               <p>{description?.slice(0,100)}</p>
               <button onClick={()=>handleBookNow(_id)} className="buyNow">Buy Now</button>
           </div>
           </Box>
    );
};

export default Displayproduct;