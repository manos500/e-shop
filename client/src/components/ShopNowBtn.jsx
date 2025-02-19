import { motion } from 'motion/react'
import { ShopContext } from '../context/ShopContext'
import {React, useContext } from 'react'

export const ShopNowBtn = () => {
    const {scrollToTarget2} = useContext(ShopContext)
  return (
     <motion.button onClick={scrollToTarget2} 
              whileHover={{ scale: 1.05 }}
              whileTap={{scale: 0.9}}
              transition={{type: "spring", stiffness: 400, damping: 10}}>Shop Now
      </motion.button>
  )
}
