import React from 'react';
import { useParams } from 'react-router-dom';

const SingleInventory = () => {
    let quntity = 98 
    const {id} = useParams()
    console.log(id);
    return (
        <div className='h-[100vh] py-6' >
            Product id : {id}
            <p>Quantify : {quntity}</p>
        </div>
    );
};

export default SingleInventory;