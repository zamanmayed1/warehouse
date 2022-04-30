import React from 'react';
import Banner from '../Banner/Banner';
import BecomeASupplier from '../BecomeASupplier/BecomeASupplier';
import BestSupplier from '../BestSupplier/BestSupplier';
import Homenventory from '../Homenventory/Homenventory';

const Home = () => {
    return (
        <div className='pb-24'>
            <Banner></Banner>
            <Homenventory  > </Homenventory>
            <BecomeASupplier/>
            <BestSupplier/>
        </div>
    );
};

export default Home;