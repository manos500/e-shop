import React from 'react'
import "./hero.css"
import { laptop } from '../assets'
import { motion} from "motion/react"
import splitString from '../utils/splitString'
import { ShopNowBtn } from './ShopNowBtn'
import MovingContainer from './MovingContainer'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Outlet } from 'react-router-dom'


const heading = "Your Favourite Shop";
const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab similique tempora corrupti dolorem laudantium! Perspiciatis, corporis explicabo. Deleniti itaque animi fugit facere, id reprehenderit cupiditate aliquam eligendi dolor expedita voluptates!";



const charVariants = {
  hidden: {opacity: 0},
  reveal: {opacity: 1},

}

  const letterVariants = {
    hidden: { y: "-70px", opacity: 0 },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 1, // Time it takes for each letter to animate
        ease: "easeInOut",
      },
    },
  };
export const Hero = () => {
  
  const {targetRef} = useContext(ShopContext)
  const textChars = splitString(text);

  return (
    <>
    <div className='hero_container' ref={targetRef}>
      <div className='light'></div>
        <div>
            <motion.h1
            variants={letterVariants}
          initial="hidden"
          animate="visible"
         >{heading}</motion.h1>
            <motion.p  initial="hidden"
                       whileInView="reveal"
                       transition={{staggerChildren: .02}}
            >{textChars.map((char,index) => (
              <motion.span key={index}
                           transition={{duration: 0.35}} 
                           variants={charVariants}  
              >{char}
              </motion.span>
              ))}
            </motion.p>
            <div className='btn_container'>
             
               <ShopNowBtn/> 
               

            </div>    
        </div>
        <Outlet/>
        <div className='image_container'>
            <img src={laptop} alt="" />
        </div>       
         
    </div>
      
   <div className='moving_text_container'>
      <MovingContainer/>
     </div>
     
        </>
    
  ) 
}

