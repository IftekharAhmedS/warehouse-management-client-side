import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemCards = (props) => {
    const { _id, productName, productImgURL, productPrice, productDescription, productQTY, productSupplier } = props.data;
    const deleteBtn = props.delete;
    const navigate = useNavigate();
    const itemDetails = id => {
        navigate(`/item/${id}`)
    }
    return (
        <div className=' border px-4 py-3 text-center'>
            <div className="item-name text-center text-2xl">
                <h1>{ productName }</h1>
            </div>
            <div className="item-image">
                <img src={ productImgURL } alt={productName} />
            </div>
            <div className="item-price">
                <h4 className=' text-lg font-semibold text-center'>Price: ${ productPrice }</h4>
            </div>
            <hr />
            <div className="item-description text-center my-3">
                <p>{ `${productDescription.slice(0, 200)}...` }</p>
            </div>
            <hr />
            <div className="item-qty font-semibold">
                <p>Quantity: { productQTY }</p>
            </div>
            <div className="item-supplier">
                <p className=' font-semibold'>Supplier: { productSupplier }</p>
            </div>
            <div className="item-btn">
                <button className='bg-[#2B2D42] text-[#F8F7FF] py-3 px-5 my-3 rounded' onClick={()=> itemDetails(_id) }>Manage Stock</button>
                {deleteBtn && <button className='bg-[#F87060] text-[#F8F7FF] py-3 px-5 my-3 rounded ml-3'>Delete</button>}
            </div>
        </div>
    );
};

export default ItemCards;