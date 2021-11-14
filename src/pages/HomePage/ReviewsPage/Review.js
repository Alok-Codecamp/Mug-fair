import React from 'react';
import Rating from '@mui/material/Rating';
import useAuth from '../../../Hooks/useAuth'
const Review = ({review}) => {
    const {user}=useAuth();
    const {rating,reviewTitle,description}=review;

    return (
        <div style={{background:'white', boxShadow:'2px 2px 3px 3px gray', borderRadius:'5px'}}>
            <div className="row">
                <h4 className="col-6">Name : {user?.displayName}</h4>
                <h4 className="col-6">rating:  <Rating name="read-only" value={rating} readOnly /></h4>
            </div>
            <div style={{textAlign:'left', marginLeft:'25px'}}>
                <h5>{reviewTitle}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Review;