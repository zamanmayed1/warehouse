import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import CustomLink from '../../Shared/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <nav className="relative w-full flex items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
            <div className="container-fluid w-full md:flex items-center justify-between px-6">


                <div className="flex items-center place-content-center" ><img className="w-10 h-10" src="https://i.ibb.co/tDDkMFP/icon-stockroom-io-d129f9.png" alt="" loading="lazy" />
                    <h2 className="text-gray-900 font-bold text-xl ml-2">Stock Room</h2></div>

                <div className="flex items-center place-content-center" >
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/inventory'}>Inventory</CustomLink>
                   {
                       !user ? 
                       <> 
                     
                       <CustomLink to={'/login'}>Login</CustomLink>
                       <CustomLink to={'/signup'}>Signup</CustomLink>
                       </> 
                       : <button onClick={()=>signOut(auth)} >Log Out</button>
                   }
                </div>

            </div>
        </nav>

    );
};

export default Header;