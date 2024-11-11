import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import { close, menu } from '../assets'

export const Navbar = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 630)
  const [toggle, setToggle] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
  return (
    <div className='navbar_container'>
        <div className='logo_container'>
          <p className='logo_text'>e-Shop</p>
        </div>
        <div className='links_container '>{!isSmallScreen ? (<>
            <Link to="/" className='hover-underline-animation'>Shop</Link> 
            <Link to="/cart" className='hover-underline-animation'>Cart</Link></>) : (<><img src={toggle ? close : menu} alt="" onClick = {() => {setToggle(!toggle)}} className = "menu-icon"/>
            <div>{toggle && (<div className='hidden-menu '>
              <div className='hidden_links_container'>
                <Link to="/" className='hover-underline-animation'>Shop</Link> 
                <Link to="/cart" className='hover-underline-animation'>Cart</Link>
              </div>

            </div>)}</div> 
            </>)
        }
        </div>
       
     
    
     
        
  
    </div>
  )
}
