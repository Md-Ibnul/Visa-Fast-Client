import React from 'react';
import Banner from './banner/Banner';
import About from './about/About';
import Category from './category/Category';
import Destination from './destination/Destination';
import ParallaxImage from './parallax/ParallaxImage';
import Choose from './choose/Choose';
import Counter from './counter/Counter';
import Partners from './partners/Partners';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Category />
            <Destination />
            <ParallaxImage />
            <Choose />
            <Counter />
            <Partners />
        </div>
    );
};

export default Home;