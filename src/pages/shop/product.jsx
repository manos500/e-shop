import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems} = useContext(ShopContext)
    return (
        <div className='product_container'>
            <div className='product_image'>
                <img src= {productImage} alt="" />
            </div>
       
            <div className='product_details'>
                <p className='product_title'>{productName}</p>
                <p className='product_price'>{price}€</p>
            </div>
            <button className='addToCartBtn' onClick={() => addToCart(id)}>Add To Cart {cartItems[id] > 0 && 
                <>{(cartItems[id])}</>}</button>
 
        </div>
    );
};