import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../providers/AuthProviders';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../../../api/Auth';

const SocialLogin = () => {
    const{signInWithGoogle, role} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            toast.success("Login Successfully");
            saveUser(loggedUser);
            navigate('/');
        })
        .catch(error => {
            console.log(error);
            toast.error(error.message)
        })
    }

    return (
        <div className='flex flex-col items-center mt-5'>
            <p className='divider font-Inter font-bold'> Or Login With </p>
            <div onClick={() => handleGoogleSignIn()} className='border-2 cursor-pointer rounded-full hover:bg-orange-200 transition'>
            <FcGoogle className='text-4xl m-3'/>
            </div>
        </div>
    );
};

export default SocialLogin;