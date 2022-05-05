import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const ItemInfo = () => {
    const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm({ defaultValues: { productQTY: "" } });
    useEffect(() => {
        if (isSubmitSuccessful) {
           reset({productQTY: ''})
       } 
    },[isSubmitSuccessful, reset])
    const { id } = useParams();
    const [itemInfo, setItemInfo] = useState({});
    useEffect(() => {
        const getItemInfo = async () => {
            const url = `https://warehouse-manage-api.herokuapp.com/items/${id}`
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessKey')}`
                }
            })
        setItemInfo(data)
        }
        getItemInfo()
    }, [id])

    const handleDecrease = async () => {
        const url = `https://warehouse-manage-api.herokuapp.com/items/${id}`;
        const itemQty = parseInt(productQTY)
        const updatedItem = {...itemInfo, productQTY: itemQty - 1}
        const { data } = await axios.put(url,
            {productQTY: itemQty - 1 },
            {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessKey')}`
            }
        })
        console.log(data)
        setItemInfo(updatedItem)
    }

    const onSubmit = async itemData => {
        console.log(itemData);
        const url = `https://warehouse-manage-api.herokuapp.com/items/${id}`;
        const itemQty = parseInt(productQTY)
        const updatedQty = parseInt(itemData.productQTY);
        const updatedItem = {...itemInfo, productQTY: itemQty + updatedQty}
        const { data } = await axios.put(url,
            {productQTY: itemQty + updatedQty },
            {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessKey')}`
            }
        })
        console.log(data)
        setItemInfo(updatedItem)
    };
    
    const {productName, productDescription, productImgURL, productPrice, productQTY, productSupplier, _id, email } = itemInfo;

    return (
        <div className='flex container mx-auto mt-4'>
            <div className="item-image-area w-4/12">
                <img src={ productImgURL } alt={ productName } />
            </div>
            <div className="item-info-area ml-5 w-6/12">
                <div className="item-name text-3xl">
                    <h1>{ productName }</h1>
                </div>
                <div className="item-price-area text-lg">
                    <p>Price: <span className=' font-semibold'>${ productPrice }</span></p>
                </div>
                <div className="item-qty-area text-lg">
                    <p>Quantity: <span className=' font-semibold'>{ productQTY }x</span></p>
                </div>
                <div className="item-supplier-area text-lg">
                    <p>Supplier: <span className=' font-semibold'>{ productSupplier }</span></p>
                </div>
                <div className="item-description-area text-base">
                    <p>{ productDescription }</p>
                </div>
                <div className="item-delivered-btn">
                    <button onClick={handleDecrease} className='bg-[#7FB069] text-[#F8F7FF] py-3 px-5 my-3 rounded'>Delivered</button>
                </div>
                <div className="item-delivered-btn">
                    <form onSubmit={handleSubmit(onSubmit)} className=' form-area'>
                        <input placeholder='Add to stock' type='number' required {...register("productQTY")} />
                        <button className='bg-[#7FB069] text-center text-[#F8F7FF] py-3 px-5 my-3 rounded'>Add to stock</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ItemInfo;