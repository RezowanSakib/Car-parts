import React from 'react';
import Parts from '../Parts/Parts';
import Banner from './Banner';
import Summery from './Summery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summery></Summery>
        </div>
    );
};

export default Home;