import React from 'react';
import ItemCards from '../../components/ItemCards/ItemCards';
import useGetItems from '../../hooks/useGetItems';
import './Home.css';

const Home = () => {
    const [items] = useGetItems();
    return (
        <div>
            <div className="banner-area"></div>
            <div className="inventory-items-area mt-5">
                <h1 className='text-3xl text-center my-5'>Inventory Items</h1>
                <div className="item-cards grid grid-cols-3 gap-6 mx-auto w-10/12">
                    {items.map(item => <ItemCards key={item._id} data={item}></ItemCards>).slice(0,6)}
                </div>
                <div className="manage-inv-btn text-center">
                    <button className='bg-[#2B2D42] text-[#F8F7FF] py-3 px-5 my-3 rounded'>Manage Inventory</button>
                </div>
            </div>
        </div>
    );
};

export default Home;