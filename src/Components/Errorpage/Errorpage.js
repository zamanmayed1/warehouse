import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='h-[60vh] md:h-[80vh] py-8'>
            <img className="w-2/4 my-5 block mx-auto" src="https://mironmahmud.com/ghurnek/assets/images/404.png" alt="" />
            <button type="button" className="inline-block w-[150px] px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><Link to={'/'}>Back To Home</Link></button>
        </div>
    );
};

export default Errorpage;