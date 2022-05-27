import React from 'react';
import Parts from '../Parts/Parts';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner';
import Summery from './Summery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summery></Summery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;