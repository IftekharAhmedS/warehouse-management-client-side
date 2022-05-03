import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import ItemCards from '../../components/ItemCards/ItemCards';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            const url = `http://localhost:5000/filtered-items?email=${user.email}`;
            const { data } = await axios.get(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessKey')}`
            }
            })
        setItems(data)
        }
        getItems();
    },[user.email])
    const navigate = useNavigate();
    return (
        <div>
            <div className="inventory-title mt-3">
                <h1 className='text-center text-3xl font-semibold'>My Items</h1>
            </div>
            <div className="inventory-btns text-right w-10/12 mx-auto">
                <button onClick={()=> navigate('/add-items')} className='bg-[#7FB069] text-[#F8F7FF] py-3 px-5 my-3 rounded'>Add New Item</button>
            </div>
            <div className="item-cards grid grid-cols-3 gap-6 mx-auto w-10/12">
                {items.map(item => <ItemCards key={item._id} data={item} delete={true}></ItemCards>)}
            </div>
        </div>
    );
};

export default MyItems;