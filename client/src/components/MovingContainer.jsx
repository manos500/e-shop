import React from 'react'
import { motion } from 'motion/react';
import './movingContainer.css'

const MovingContainer = () => {
    const movingTextList = [
    "Best Deals!", "Amazing Offers!", "Hurry Up!", "Limited Time!",
    "Best Deals!", "Amazing Offers!", "Hurry Up!", "Limited Time!",
   
  ];
 return (
    <motion.div 
      className="text-right whitespace-nowrap"
      initial={{ x: "-190%" }}
      animate={{ x: "100%" }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
 
        {movingTextList.map((text, index) => (
        <span key={index} className="text">{text}</span>
      ))}
  
      
    </motion.div>
  );
};

export default MovingContainer