import React from 'react'

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
     <div className='cartItem_container'>
            <div className='cartItem_image'>
                <img src= {productImage} alt="" />
            </div>
       
            <div className='cartItem_details'>
                <p className='cartItem_title'>{productName}</p>
                <p className='cartItem_price'>{price}€</p>
            </div>
        </div>
  )
}
