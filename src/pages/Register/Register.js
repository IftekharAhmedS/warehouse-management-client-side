import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth)
    const [updateProfile] = useUpdateProfile(auth);
    const { register, handleSubmit } = useForm();
    
    const [formError, setFormError] = useState('')

    const navigate = useNavigate();

    const onSubmit = async data => {
        const { username, email, password, confirmPassword } = data;
        if (password !== confirmPassword) {
            setFormError('Password did not match')
            return;
        }
        else if (password.length < 6) {
            setFormError('Password must be at least 6 characters.')
            return;
        }
        else {
            setFormError('')
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: username })
        
    };
    useEffect(() => {
        if (user) {
            navigate('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user])
    let emailError = '';
    if (error) {
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
            emailError = 'Account already exists with this email';
        }
    }
    return (
        <div>
            <div className=' w-4/5 mx-auto mt-5'>
            <h1 className='text-3xl text-center'>Register</h1>
            <div className="items-form flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col form-area w-4/12 '>
                <input placeholder='Username' required {...register("username")} />
                <input placeholder='Email address' type='email' required {...register("email")} />
                <input placeholder='Password' required type='password' {...register("password")} />
                <input placeholder='Confirm password' required type='password' {...register("confirmPassword")} />
                <p className='text-[#F87060]'>{ formError }</p>
                <p className='text-[#F87060]'>{ emailError }</p>
                <div className="form-submit-btn">
                    <input type='submit' value='Register'></input>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
};

export default Register;