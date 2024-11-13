import React, { useState } from 'react'
import { createContext } from 'react';
import { PRODUCTS } from '../products'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}



export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getCartTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0){
                let ItemInfo = PRODUCTS.find((product) => product.id === Number(item))
                totalAmount += ItemInfo.price * cartItems[item]
            }
           
        }
        return totalAmount
    }
    const addToCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] + 1}))
    }
    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] - 1}))
    }

    const UpdateCartItemCount = (newAmount, itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: newAmount}))

    }
   
  return (

    <ShopContext.Provider value={{cartItems, addToCart, removeFromCart, UpdateCartItemCount, getCartTotalAmount}}>{props.children}</ShopContext.Provider>
  )
}
