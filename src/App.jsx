import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navbar } from './components/navbar';
import './App.css'
import { Cart } from './pages/cart/cart';
import { Shop } from './pages/shop/shop';

function App() {


  return (

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
 
  )
}

export default App
