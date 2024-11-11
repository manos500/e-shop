import React from 'react'


export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    return (
        <div className='product_container'>
            <div className='product_image'>
                <img src= {productImage} alt="" />
            </div>
       
            <div className='product_details'>
                <p className='product_title'>{productName}</p>
                <p className='product_price'>{price}€</p>
            </div>
            <button className='addToCartBtn'>Add To Cart</button>
 
        </div>
    );
};