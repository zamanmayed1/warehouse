import React from 'react';
import CustomLink from '../../Shared/CustomLink';

const Header = () => {
    return (
        <div className='border-b py-3 px-10 md:flex justify-between '>
            <div className='flex items-center '>
            <img className='w-8 h-8' src="https://i.ibb.co/tDDkMFP/icon-stockroom-io-d129f9.png" alt="" />
            <h5 className='font-bold mx-1 text-xl'>Stock Room</h5>
            </div>
            <nav className='flex'>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/login'}>Login</CustomLink>
                <CustomLink to={'/signup'}>Sign Up</CustomLink>
            </nav>
        </div>
           
    );
};

export default Header;