import React from 'react'
import {BrowserRouter , Routes, Route, } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import Welcome from './Components/Welcome'
import Transactions from './Components/Transactions'
import Footer from './Components/Footer'

export default function App() {
  return (
    <div>

   
    
        <Navbar  />

    <Welcome />
    <Services />
    <Transactions />
    <Footer />
    </div>
    
    
  )
}
