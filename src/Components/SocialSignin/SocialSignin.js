import React from 'react';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init'

const SocialSignin = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    
    return (
        <div >
            <div onClick={()=>signInWithGoogle()} className="google p-2 border cursor-pointer w-full md:w-3/4 mx-auto rounded-full flex justify-center items-center"> <img className='w-6 h-6 mx-2' src="https://i.ibb.co/G5XJbwq/google.png" alt="" /> Continue With Google</div>
        </div>
    );
};

export default SocialSignin;