import React from 'react'
import { fetchProduct } from '../../api/products'
import { Product } from './product'
import { Loader } from '../../components/Loader'
import './shop.css'
import { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../../context/ShopContext'
import {useQuery} from "@tanstack/react-query"



export const Shop = () => {
  const {targetRef2} = useContext(ShopContext)
  
  const productQuery = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProduct()
  })

  if(productQuery.isLoading) {
    return <div> <Loader/></div>
  } 

  if(productQuery.isError) {
    return <pre className='shopTitle'>{JSON.stringify(productQuery.error)}</pre>
  } 

  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch(url)
  //     const parseData = await data.json()
  //     setProducts(parseData)
  //   }

  //   fetchData()
  // }, [])
  // console.log(products)
  return (
    <div className='shop_container' ref={targetRef2}>
      <div className='shopTitle' id="shop_section">
        <h1>Shop</h1>
      </div>
      <div className='products'>
        {productQuery.data.map(product => (
          <Product key={product.id} data={product} />
            
        ))}
        
      
      </div>
    </div>
  )
}
