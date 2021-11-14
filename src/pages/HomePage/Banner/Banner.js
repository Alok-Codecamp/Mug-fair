import { Opacity } from '@mui/icons-material';
import React from 'react';


const textBackground={
  color:'#51050F',
  backgroundColor:'rgba(255,255,255,0.4)',
  borderRadius:'6px',
  fontSize:'18px',
  fontWeight:'600'
}


const Banner = () => {
    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://i.ibb.co/pXjyZbp/rsz-5799478.jpg" className="d-block w-100" alt="..."/>
      <div style={textBackground} className="carousel-caption d-none d-md-block " >
        <h5>STANDARD SIZE</h5>
        <p>Our Standard 11 oz mug comes in your choice of all-white or with a color handle and interior.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://i.ibb.co/86gsxj4/rsz-1mug-11.jpg" className="d-block w-100" alt="..."/>
      <div style={textBackground} className="carousel-caption d-none d-md-block">
        <h5>DURABLE CERAMIC</h5>
        <p>Strong construction with scratch-resistant finish and easy-grip handle for easy sipping. Ideal for both hot and cold beverages.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/8gHWZML/rsz-5691549.jpg" className="d-block w-100" alt="..."/>
      <div style={textBackground} className="carousel-caption d-none d-md-block">
        <h5>MICROWAVE, DISHWASHER SAFE</h5>
        <p>Our mugs are microwave safe and dishwasher safe (top shelf recommended). </p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    );
};

export default Banner;