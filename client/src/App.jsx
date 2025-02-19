import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import './App.css'
import { Cart } from './pages/cart/Cart';
import { Shop } from './pages/shop/Shop';
import { ShopContextProvider } from './context/ShopContext';




function App() {


  return (
   
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar/>
          
          <Routes>
            <Route path="/" element={
              <>
                <Hero/>
                <Shop/>
              </>
            }
          />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </ShopContextProvider>
   
 
  )
}

export default App
