import React from 'react';
import ItemCards from '../../components/ItemCards/ItemCards';
import useGetItems from '../../hooks/useGetItems';

const ManageInventory = () => {
    const [items] = useGetItems();
    return (
        <div>
            <div className="inventory-title">
                <h1>Inventory</h1>
            </div>
                <div className="item-cards grid grid-cols-3 gap-6 mx-auto w-10/12">
                    {items.map(item => <ItemCards key={item._id} data={item}></ItemCards>)}
                </div>
        </div>
    );
};

export default ManageInventory;