import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import CardDetail from './Components/CardDetail';
import Wishlist from './Components/Wishlist';
import AddToCart from './Components/AddToCart';
import Login from './Components/Login';
import Signup from './Components/Signup';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/carddetails/:id' element = {<CardDetail/>} />
        <Route path='/wishlist' element = {<Wishlist/>} />
        <Route path='/addtocart' element = {<AddToCart/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/signup' element = {<Signup/>} />
      </Routes>
    </div>
  )
}

export default App
