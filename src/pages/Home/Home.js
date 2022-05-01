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
            </div>
        </div>
    );
};

export default Home;