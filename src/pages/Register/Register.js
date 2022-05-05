import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Box, CircularProgress } from '@mui/material';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true})
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
        swal({
            title: "Your account has been created successfully",
            icon: "success",
            button: "Okay!",
          });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user])
    let emailError = '';
    if (error) {
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
            emailError = 'Account already exists with this email';
        }
    }
    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
              <CircularProgress />
            </Box>
          );
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
                <p>Already have an account? <Link to='/login' className=' text-blue-400'>login</Link> instead</p>
            </form>
                </div>
                <div className="social-account-area flex justify-center">
                    <button className=' p-3 rounded mt-4 bg-yellow-300'>Google Signin</button>
                </div>
        </div>
        </div>
    );
};

export default Register;