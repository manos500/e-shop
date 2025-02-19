import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import { close, menu } from '../assets'
import { motion, AnimatePresence  } from "motion/react"
import { ShopContext } from '../context/ShopContext'
import {useContext } from 'react'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 630)
  const [toggle, setToggle] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const {scrollToTarget} = useContext(ShopContext)
  const {scrollToTarget2} = useContext(ShopContext)

  const dropDownMenuVariants = {
    open: {
            clipPath: "inset(0% 0% 0% 0%)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% )",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
  }

 useEffect(() => {
      const handleResize = () => {
        const newWidth = window.innerWidth;
        if (newWidth > 630) {
          setIsSmallScreen(false);
          setToggle(false)
        }else{
          setIsSmallScreen(true);
        }
        setWindowWidth(newWidth);
      };

      window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [windowWidth]);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  }, []);
  return (
    <div className={`navbar_container ${scrolled ? "scrolled" : ""}`}>
        <div className='logo_container'>
          <p className='logo_text' onClick={scrollToTarget}>e-Shop</p>
        </div>
        <div className={`links_container ${scrolled ? "scrolled" : ""}`}>{!isSmallScreen ? (<>
            <Link to="/" className='hover-underline-animation' onClick={scrollToTarget2}>Shop</Link> 
            <Link to="/cart" className='hover-underline-animation'>Cart</Link></>) : (<><img src={toggle ? close : menu} alt="" onClick = {() => {setToggle(!toggle)}} className = "menu-icon"/>
            <div>
              <AnimatePresence>
                  {toggle && (
              <motion.div className='hidden-menu'
                          initial= "closed"
                          animate="open"
                          exit="closed"
                          variants={dropDownMenuVariants}>
              <div className='hidden_links_container'>
                <Link to="/" className='hover-underline-animation'>Shop</Link> 
                <Link to="/cart" className='hover-underline-animation'>Cart</Link>
              </div>

              </motion.div>)}
              </AnimatePresence>
            
            </div> 
            </>)
        }
        </div>
       
     
    
     
        
  
    </div>
  )
}
