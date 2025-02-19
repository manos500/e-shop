import React from 'react'
import './footer.css'
import { Helmet } from 'react-helmet';

export const Footer = () => {
  return (
    <>
     <Helmet>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Helmet>
    <footer className='footer_container'>
        <div className='footer_content'>
            <h3>e-shop</h3>
            <p>Μπορείτε να μας βρείτε στους παρακάτων συνδέσμους!</p>
            <ul className="socials">
                <li><i className="fa-brands fa-facebook"></i></li>
                <li><i className="fa-brands fa-instagram"></i></li>
                <li><i className="fa-brands fa-square-x-twitter"></i></li>
            </ul>
             <div className="footer_bottom">
            <p>copyright &copy;2024 e-shop</p>
        </div>
        </div>
    </footer>
    </>
  )
}


