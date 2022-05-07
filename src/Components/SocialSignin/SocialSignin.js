import React from 'react';
import { useAuthState, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init'

const SocialSignin = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth)
    const email = user?.email
    const signingoogle =()=>{
      
        fetch('https://stockroom-server.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    signInWithGoogle()
                    localStorage.setItem('accessToken', data.accessToken);
                }
            
            })
    }
    
    return (
        <div >
            <div onClick={signingoogle} className="google p-2 border cursor-pointer w-full  mx-auto rounded-full flex justify-center items-center"> <img className='w-6 h-6 mx-2' src="https://i.ibb.co/G5XJbwq/google.png" alt="" />Google Signin</div>
        </div>
    );
};

export default SocialSignin;