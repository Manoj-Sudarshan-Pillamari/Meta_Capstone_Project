import React from 'react'
import { Route, Routes } from 'react-router'
import BookingForm from './BookingForm'
import Home from './Home'
import AboutUs from './AboutUs'
import OnlineOrder from './OnlineOrder'
import Menu from './Menu'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/About' element={<AboutUs/>}/>
        <Route path='/Reservation' element={<BookingForm/>}/>
        <Route path='/Order' element={<OnlineOrder/>}/>
        <Route/>
    </Routes>
  )
}

export default Routing