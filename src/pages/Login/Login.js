import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    // eslint-disable-next-line no-unused-vars
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
    const { register, handleSubmit } = useForm();
    const onSubmit = async formData => {
        const { email, password } = formData;
        console.log(formData)
        await signInWithEmailAndPassword(email, password)
        const { data } = await axios.post('http://localhost:5000/login', { email });
        console.log(data)

    };

    const location = useLocation();
    const navigate = useNavigate();
    let from = location?.state?.from?.pathname || '/';

    useEffect(() => {
        if (user) {
            navigate(from, {replace: true})
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user])


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
            <div className=' w-3/5 mx-auto mt-5'>
            <h1 className='text-3xl text-center'>Login</h1>
            <div className="items-form flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col form-area'>
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