import React, { useState } from 'react'
import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import MetaMask from '../assets/MetaMask.png';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    
    <nav className='w-full flex justify-between lg:justify-center  items-center p-4'>
      <div className='md:flex-[0.5] justify-center items-center'>
        <div className='flex gap-4 items-center mr-5'>
        <img src={MetaMask} alt="MetaMask logo" className='h-14 w-14 cursor-pointer' /><span className='text-white text-2xl font-bold font-mono text-nowrap'><span className='text-3xl font-extrabold'>T</span>axChain</span>
        </div>
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center'>
        <li className='mx-4 cursor-pointer'>Mome</li>
        <li className='mx-4 cursor-pointer'>Services</li>
        <li className='mx-4 cursor-pointer'>Features</li>
        <li className='mx-4 cursor-pointer'>Web 3.0</li>
      </ul>
      <div className='flex relative'>
      {toggleMenu
      ?<AiOutlineClose fontSize={28} className='text-white cursor-pointer md:hidden' onClick={()=>{setToggleMenu(false)}} />
      :<HiMenuAlt4 fontSize={28} className='text-white cursor-pointer md:hidden' onClick={()=>{setToggleMenu(true)}} />
      }
      {toggleMenu &&(
        <ul className='z-10 fixed top-0 right-0 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start  blue-glassmorphism rounded-none text-white animate-slide-in'>
          <li className='text-xl w-full my-2'>
            <AiOutlineClose fontSize={28} className='text-white cursor-pointer ' onClick={()=>setToggleMenu(false)}/>
          </li>
          <div className='flex mt-10 flex-col gap-5'>
          <li className='mx-4 cursor-pointer my-2 text-lg font-semibold '>Market</li>
        <li className='mx-4 cursor-pointer my-2 text-lg font-semibold'>Exchange</li>
        <li className='mx-4 cursor-pointer my-2 text-lg font-semibold'>Tutorials</li>
        <li className='mx-4 cursor-pointer my-2 text-lg font-semibold'>Wallet</li>
          </div>
        </ul>
      )
      }
      </div>
    </nav>
  )
}
