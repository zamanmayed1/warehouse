import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import SocialSignin from '../../SocialSignin/SocialSignin';

const Login = () => {
    const [user] = useAuthState(auth)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div >
            <div className='md:flex shadow-sm md:w-3/4 mx-auto rounded-lg mt-20 h-auto py-3'>
                <img className='hidden md:block md:w-2/4' src="https://i.ibb.co/1r5t1w4/undraw-logistics-x4dc.png" alt="" />
                <div className='md:w-2/4 p-3 h-full'>
                    <form >
                        <h2 className='text-2xl text-indigo-300'>Log In</h2>
                        <h2 className='mb-14'>Log in your Account</h2>

                        <input className='w-3/4 rounded-full mx-auto' type="email" placeholder='Your Email Address' required />
                        <input className='w-3/4 rounded-full mx-auto' type="password" placeholder='Your Password' required />
                        <input className='w-1/4 p-2 font-bold text-white bg-indigo-500 rounded-full mx-auto' type="submit" value="Log In" />
                        <p className='text-right text-blue-600 underline cursor-pointer pr-14'>Forget Password</p>
                    </form>
                    <div className='flex items-center my-1 text-gray-600 justify-center'>
                        <div className='border-t w-32 mx-2'></div>
                        <p>or</p>
                        <div className='border-t w-32  mx-2'></div>
                    </div>
                    <SocialSignin />
                </div>
            </div>
        </div>
    );
};

export default Login;