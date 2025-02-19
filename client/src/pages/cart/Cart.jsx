import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { CartItem } from './CartItem'
import './cart.css'

export const Cart = () => {
   const { cartItems, getCartTotalAmount, productQuery } = useContext(ShopContext); 
  const totalAmount = getCartTotalAmount();

  const products = productQuery?.data || []; // Ensure products exist


  return (
    <div className='cart_container'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {products.map((product) => {
          if (cartItems[product.id] !== 0){
            return <CartItem key={product.id} data={product} />
          }
        })}
        <div className=''>
          <p>SubTotal: {totalAmount}</p>
          <button>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  )
}
