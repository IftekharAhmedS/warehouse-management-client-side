import React from 'react';
import { useForm } from "react-hook-form";
import './AddItem.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const AddItems = () => {
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/items', {
            method: 'Post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
        navigate('/manage-inventory')
    };
    return (
        <div className=' w-4/5 mx-auto mt-5'>
            <h1 className='text-3xl text-center'>Add a new item</h1>
            <div className="items-form flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col add-item-form form-area w-4/5 '>
                <input placeholder='Name' required {...register("productName")} />
                <input placeholder='Price' required {...register("productPrice")} />
                <input placeholder='Supplier' required {...register("productSupplier")} />
                <input placeholder='Image URL' required {...register("productImgURL")} />
                <input placeholder='Quantity' required {...register("productQTY")} />
                <input placeholder='Your email' style={{opacity: '75%'}} value={user.email} readOnly {...register("email")} />
                <textarea placeholder='Type a short description of the product' required {...register("productDescription")}></textarea>
                <div className="add-item-submit form-submit-btn">
                    <input type='submit' value='Add Item'></input>
                </div>
            </form>
            </div>
        </div>
    );
};

export default AddItems;