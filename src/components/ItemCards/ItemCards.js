import React from 'react';

const ItemCards = (props) => {
    const { productName, productImgURL, productPrice, productDescription, productQTY, productSupplier } = props.data;
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
                <button className='bg-[#2B2D42] text-[#F8F7FF] py-3 px-5 my-3 rounded'>Manage Stock</button>
            </div>
        </div>
    );
};

export default ItemCards;