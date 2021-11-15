import React from 'react';
import Rating from '@mui/material/Rating';
import useAuth from '../../../Hooks/useAuth'
const Review = ({review}) => {
    const {user}=useAuth();
    const {rating,reviewTitle,description}=review;

    return (
        <div style={{background:'white', boxShadow:'2px 2px 3px 3px gray',padding:'20px', borderRadius:'5px'}}>
            <div className="d-flex flex-wrap justify-content-between">
                <h4 className="">Name :mr omuk {user?.displayName}</h4>
                <h4 className="">rating:  <Rating name="read-only" value={rating} readOnly /></h4>
            </div>
            <div className="" style={{textAlign:'left'}}>
                <h5>{reviewTitle}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Review;