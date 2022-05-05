import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let from = location?.state?.from?.pathname || '/';
    // eslint-disable-next-line no-unused-vars
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);

    const handleGoogleSignin = () => {
        signInWithGoogle();
    }

    useEffect(() => { 
    if(user || googleUser){
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
        const { data } = await axios.post('https://warehouse-manage-api.herokuapp.com/login', { email });
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
            <h1 className='text-3xl text-center'>Login</h1>
            <div className="items-form flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col form-area w-4/12 '>
                <input placeholder='Email' type='email' required {...register("email")} />
                <input placeholder='Password' type='password' required {...register("password")} />
                <p className='text-[#F87060]'>{ errormsg }</p>
                <div className="form-submit-btn">
                    <input type='submit' value='Login'></input>
                </div>
                    <p><Link to='/reset-password' className=' text-blue-400'>Forget password?</Link></p>
                    <p>Or <Link to='/register' className=' text-blue-400'>Create an account</Link></p>
            </form>
            </div>
            <div className="social-account-area flex justify-center">
                <button onClick={handleGoogleSignin} className=' p-3 rounded mt-4 bg-yellow-300'>Google Signin</button>
            </div>
        </div>
        </div>
    );
};

export default Login;