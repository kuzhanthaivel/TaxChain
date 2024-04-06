import React from 'react'
import {BrowserRouter , Routes, Route, } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import Welcome from './Components/Welcome'
import Features from './Components/Features'
import Web3 from './Components/Web3'

export default function App() {
  return (
    <BrowserRouter>
    

    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar  />
        <Welcome />
      </div>
      <div className='gradient-bg-services'>
      <Services />
      </div>
    </div>
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/services' element={<Services />} />
      <Route path='/features' element={<Features />} />
      <Route path='/web3' element={<Web3 />} />
      
    </Routes>
    </BrowserRouter>
  )
}
