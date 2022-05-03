import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemInfo = () => {
    const { id } = useParams();
    const [itemInfo, setItemInfo] = useState({});
    useEffect(() => {
        const getItemInfo = async () => {
            const url = `http://localhost:5000/items/${id}`
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessKey')}`
                }
            })
        setItemInfo(data)
        }
        getItemInfo()
    }, [id])
    
    const {productName, productDescription, productImgURL, productPrice, productQTY, productSupplier, _id, email } = itemInfo;

    return (
        <div className='flex container mx-auto mt-4'>
            <div className="item-image-area w-8/12">
                <img src={ productImgURL } alt={ productName } />
            </div>
            <div className="item-info-area ml-5">
                <div className="item-name text-3xl">
                    <h1>{ productName }</h1>
                </div>
            </div>
        </div>
    );
};

export default ItemInfo;