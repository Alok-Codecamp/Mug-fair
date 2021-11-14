import React from 'react';
import Products from '../../MoreProducts/Products/Products';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import Reviews from '../ReviewsPage/Reviews';
import TopBrands from '../TopBrands/TopBrands';

const Home = () => {
    return (
        <div>
          <Header></Header>
            <Banner></Banner>
            <DisplayProducts></DisplayProducts>
            <div style={{margin:'40px',backgroundColor:'#51050F',color:'white'}}><h2>Ratings {'&'} Reviews</h2></div>
            <Reviews></Reviews>
            <div style={{margin:'40px',backgroundColor:'#51050F',color:'white'}}><h2>Top Brands for printed mug</h2></div>
            <TopBrands></TopBrands>
          <Footer></Footer>
        </div>
    );
};

export default Home;