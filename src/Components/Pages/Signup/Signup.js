import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import SocialSignin from '../../SocialSignin/SocialSignin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [user] = useAuthState(auth)

   let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const signup = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmpassword = e.target.confirmpassword.value
        if (password === confirmpassword) {
            createUserWithEmailAndPassword(email, password)
            toast("User Created Successful!")
        }
        else {
            toast("Password Not Match")
        }




        if (user) {
            navigate(from , { replace: true });
        }
    }
    return (
        <div >
            <div className='md:flex shadow-sm md:w-3/4 mx-auto rounded-lg mt-20 py-3 h-auto'>
                <img className='hidden md:block md:w-2/4' src="https://i.ibb.co/4Jj4xPR/undraw-Access-account-re-8spm.png" alt="" />
                <div className='md:w-2/4 p-3 h-full'>
                    <form onSubmit={signup} >
                        <h2 className='text-2xl text-indigo-400'>Sign Up</h2>
                        <h2 className='mb-14'>Create An Account</h2>
                        <input className='w-3/4 rounded-full mx-auto' type="text" placeholder='Name' />
                        <input className='w-3/4 rounded-full mx-auto' name='email' type="email" placeholder='Your Email Address' required />
                        <input className='w-3/4 rounded-full mx-auto' name='password' type="password" placeholder='Your Password' required />
                        <input className='w-3/4 rounded-full mx-auto' name='confirmpassword' type="password" placeholder='Confirm Password' required />
                        <input className='w-1/4 p-2 font-bold text-white bg-indigo-600 rounded-full mx-auto' type="submit" value="Sign Up" />

                    </form>
                    <div className='flex items-center my-1 text-gray-600 justify-center'>
                        <div className='border-t w-32 mx-2'></div>
                        <p>or</p>
                        <div className='border-t w-32  mx-2'></div>
                    </div>
                    <SocialSignin />
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Signup;