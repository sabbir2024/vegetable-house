import React from 'react';
import Banner from '../../UI/Home/Banner';
import About from '../../UI/Home/About';
import CategoryLink from '../../UI/Home/CategoryLink';
import LetexItems from '../../UI/Home/LetexItems';
import Offer from '../../UI/Home/Offer';
import Reviews from '../../UI/Home/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <CategoryLink />
            <LetexItems />
            <Offer />
            <Reviews />
        </div>
    );
};

export default Home;