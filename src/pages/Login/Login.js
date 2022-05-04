import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MoonLoader } from 'react-spinners';
import swal from 'sweetalert';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let from = location?.state?.from?.pathname || '/';
    // eslint-disable-next-line no-unused-vars
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)


    useEffect(() => { 
    if (loading) {
        <MoonLoader size={50}></MoonLoader>
    }
    if(user){
        navigate(from, { replace: true })
        swal({
            title: "You are now logged in!",
            icon: "success",
            button: "Okay!",
          });
    }

     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[user])
    const { register, handleSubmit } = useForm();
    const onSubmit = async formData => {
        const { email, password } = formData;
        console.log(formData)
        await signInWithEmailAndPassword(email, password)
        const { data } = await axios.post('http://localhost:5000/login', { email });
        localStorage.setItem('accessKey', data.accessKey)
        
        console.log(data)

    };
    let errormsg = '';
    if (error) {
        if (error.message === 'Firebase: Error (auth/user-not-found).') {
            errormsg = 'User does not exist';
        }
        else if (error.message === 'Firebase: Error (auth/wrong-password).') {
            errormsg = 'Incorrect password'
        }
    }
    return (
        <div>
            <div className=' w-4/5 mx-auto mt-5'>
            <h1 className='text-3xl text-center'>Login</h1>
            <div className="items-form flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col form-area w-4/12 '>
                <input placeholder='Email' type='email' required {...register("email")} />
                <input placeholder='Password' type='password' required {...register("password")} />
                <p className='text-[#F87060]'>{ errormsg }</p>
                <div className="form-submit-btn">
                    <input type='submit' value='Login'></input>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
};

export default Login;