import React from 'react';
import AppointBanner from './AppointBanner/AppointBanner';
import Banner from './Banner/Banner';
import Card from './Card/Card';
import Service from './Service/Service';
import Testimonial from './Testimonial/Testimonial';
import Treatment from './Treatment/Treatment';

const Home = () => {
    return (
        <div className='mx-5 section'>
        <Banner/>
        <Card/>
        <Service/>
        <Treatment/>
        <AppointBanner/>
        <Testimonial/>
       
            
        </div>
    );
};

export default Home;