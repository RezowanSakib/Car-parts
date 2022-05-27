import React from 'react';

import OurFacility from '../Extra/OurFacility';
import Sugestion from '../Extra/Sugestion';
import Parts from '../Parts/Parts';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner';
import Summery from './Summery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <OurFacility></OurFacility>
            <Sugestion></Sugestion>
            <Summery></Summery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;