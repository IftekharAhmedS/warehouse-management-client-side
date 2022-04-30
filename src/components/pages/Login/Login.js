import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const { email, password } = data;
        createUserWithEmailAndPassword(email, password)
    };
    let errormsg = '';
    if (error) {
        if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
            errormsg = 'Password must be at least 6 characters.'
        }
        else if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
            errormsg = 'Account already exists with this email'
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
                <p>{ errormsg }</p>
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