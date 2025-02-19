import React, { useState, useRef, createContext, useEffect } from 'react';
import {useQuery} from "@tanstack/react-query"
import { fetchProduct } from '../api/products'

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const targetRef = useRef(null);
    const targetRef2 = useRef(null);
    const productQuery = useQuery({
        queryKey: ["products"],
        queryFn: () => fetchProduct()
  })
  
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        if (productQuery.data) {
            let cart = {};
            productQuery.data.forEach((product) => {
                cart[product.id] = 0;
            });
            setCartItems(cart); // Set cart when data is available
        }
    }, [productQuery.data]); // Runs when data is fetched
  

    

    const getCartTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0){
                let ItemInfo = productQuery.data.find((product) => product.id === Number(item))
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

    const scrollToTarget = () => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
  };
    const scrollToTarget2 = () => {
        if (targetRef2.current) {
            targetRef2.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
  };
   
  return (

    <ShopContext.Provider value={{
        cartItems,
        addToCart, 
        removeFromCart, 
        UpdateCartItemCount, 
        getCartTotalAmount,
        targetRef, 
        targetRef2, 
        scrollToTarget,
        scrollToTarget2
    }}>
        {props.children}
    </ShopContext.Provider>
  )
}
