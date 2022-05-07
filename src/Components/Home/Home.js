import React from 'react';
import Banner from '../Banner/Banner';
import BecomeASupplier from '../BecomeASupplier/BecomeASupplier';
import Benifte from '../Benifte/Benifte';
import BestSupplier from '../BestSupplier/BestSupplier';
import Homenventory from '../Homenventory/Homenventory';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Homenventory  > </Homenventory>

            <Benifte/>
            <BecomeASupplier/>
            <BestSupplier/>
        </div>
    );
};

export default Home;