import React from 'react';
import Products from '../../MoreProducts/Products/Products';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import Reviews from '../ReviewsPage/Reviews';

const Home = () => {
    return (
        <div>
          <Header></Header>
            <Banner></Banner>
            <DisplayProducts></DisplayProducts>
            <Reviews></Reviews>
          <Footer></Footer>
        </div>
    );
};

export default Home;