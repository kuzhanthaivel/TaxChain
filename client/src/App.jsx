import React from 'react'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import Welcome from './Components/Welcome'

export default function App() {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      
    </div>
  )
}
