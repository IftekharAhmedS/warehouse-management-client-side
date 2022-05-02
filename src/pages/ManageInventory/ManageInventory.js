import React from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCards from '../../components/ItemCards/ItemCards';
import useGetItems from '../../hooks/useGetItems';

const ManageInventory = () => {
    const [items] = useGetItems();
    const navigate = useNavigate();
    return (
        <div>
            <div className="inventory-title mt-3">
                <h1 className='text-center text-3xl font-semibold'>Inventory</h1>
            </div>
            <div className="inventory-btns text-right w-10/12 mx-auto">
                <button onClick={()=> navigate('/add-items')} className='bg-[#7FB069] text-[#F8F7FF] py-3 px-5 my-3 rounded'>Add New Item</button>
            </div>
            <div className="item-cards grid grid-cols-3 gap-6 mx-auto w-10/12">
                {items.map(item => <ItemCards key={item._id} data={item}></ItemCards>)}
            </div>
        </div>
    );
};

export default ManageInventory;