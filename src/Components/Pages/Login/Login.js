import React, { useEffect, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import SocialSignin from '../../SocialSignin/SocialSignin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const [signInWithEmailAndPassword, , loading, error,] = useSignInWithEmailAndPassword(auth);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

     if(user){
      navigate(from , {replace: true})
    }
    useEffect(() => {
        if (error) {
            toast('Incorrect Login Details')
        }
    }, [error])
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleLogin = event => {
        event.preventDefault();
        fetch('https://stockroom-server.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    signInWithEmailAndPassword(email,password)
                    localStorage.setItem('accessToken', data.accessToken);
                }
            
            })
    }
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const resetpassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email Sent');
        }
        else {
            toast('Input Email First');
        }
    }

    return (
        <div className='w-full flex justify-center mb-20'>
            <div className="colm-form mx-auto my-7">
                <div className="form-container">
                    <form onSubmit={handleLogin}>
                        <input onBlur={handleEmailBlur} type="text" placeholder="Email address" required />
                        <input onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                        <p onClick={resetpassword} className='text-right text-blue-700 underline my-1'>Forgotten password?</p>
                        <button type='submit' className="btn-login bg-indigo-600
            ">Login</button>
                    </form>
                    <div className='w-full flex flex-col items-center p-2 my-1 '>

                        <div className=" w-3/4  p-2 border cursor-pointer mb-2  md:w-3/4 mx-auto rounded-full">
                            <Link to={'/signup'}> Join StoockRoom</Link>
                        </div>
                        <div className="div w-3/4">
                            <SocialSignin />
                        </div>
                    </div>
                    <ToastContainer />
                </div>

            </div>
        </div>

    )
};

export default Login;