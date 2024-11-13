import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {cartItems, addToCart, removeFromCart, UpdateCartItemCount} = useContext(ShopContext);
  return (
     <div className='cartItem_container'>
        <img src={productImage} />
        <div className="description">
            <p>
                {" "}
                <b>{productName}</b>
            </p>
            <p>{price}€</p>
            <div className='amount_container'>
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value = {cartItems[id]} onChange={(e) => UpdateCartItemCount(e.target.value,id)}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
       </div>        
    </div>
        
  )
}
