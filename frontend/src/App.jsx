import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
<<<<<<< HEAD
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
=======
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54


const App = () => {
  return (
<<<<<<< HEAD
    <div className='site-shell px-4 sm:px-8 md:px-12 lg:px-16'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
=======
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />

      </Routes>
      <Footer />
    </div>
  )
}

<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
