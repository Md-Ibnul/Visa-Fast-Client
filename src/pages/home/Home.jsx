import React from 'react';
import Banner from './banner/Banner';
import About from './about/About';
import Category from './category/Category';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Category />
        </div>
    );
};

export default Home;