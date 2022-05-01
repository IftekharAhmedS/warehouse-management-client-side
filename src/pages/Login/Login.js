import React from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const { email, password } = data;
        signInWithEmailAndPassword(email, password)
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
            <div className=' w-3/5 mx-auto mt-5'>
            <h1 className='text-3xl text-center'>Login</h1>
            <div className="items-form flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col form-area'>
                <input placeholder='Name' type='email' required {...register("email")} />
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