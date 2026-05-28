import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Addcat from './addcat'
import Header from './adminheader'
import Landing from './landing'
import Showcat from './showcat'
import Addsub from './addsub'
import Showsub from './showsub'
import Detail from './detail'
import Addcart from './addcart'
import PaymentMethod from './paymentmethod'
import Register from './register'
import Login from './login'
import ContactPage from './contactPage'
import Service from './service'
import AboutPage from './aboutPage'
import Arrivals from './arrivals'

const Siterouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/landing' element={<Landing/>}/>
            <Route path='/addcat' element={<Addcat/>}/>
            <Route path='/showcat' element={<Showcat/>}/>
            <Route path='/addsub' element={<Addsub/>}/>
            <Route path='/showsub' element={<Showsub/>}/> {/* This should work with query params */}
            <Route path='/detail' element={<Detail/>}/>
            <Route path='/addcart' element={<Addcart/>}/>
            <Route path='/payment' element={<PaymentMethod/>}/>
            <Route path='/signup' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
             <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/arrival' element={<Arrivals/>}/>
        </Routes>
    </div>
  )
}

export default Siterouter