import { async } from '@firebase/util';
import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import auth from '../../firebase.init';

const ResetPassword = () => {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        const { email } = data;
        await sendPasswordResetEmail(email)
        await swal({
            title: "An password reset email has been sent!",
            icon: "success",
            button: "Okay!",
          });
    }
    return (
        <div>
            <div className=' w-4/5 mx-auto mt-5'>
            <h1 className='text-3xl text-center'>Reset your password</h1>
            <div className="items-form flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col form-area w-4/12 '>
                <input placeholder='Email' type='email' required {...register("email")} />
                <div className="form-submit-btn">
                    <input type='submit' value='Send email'></input>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
};

export default ResetPassword;