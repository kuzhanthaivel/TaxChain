import React from "react";

  import logo from "../assets/MetaMask.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className=" w-full h-[0.25px] bg-gray-400 mt-5  mb-5" />
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
      <div className='flex gap-4 items-center mr-5'>
        <img src={logo} alt="MetaMask logo" className='h-14 w-14 cursor-pointer' /><span className='text-white text-2xl font-bold font-mono text-nowrap'><span className='text-3xl font-extrabold'>T</span>axChain</span>
        </div>
      </div>
      <div className="flex flex-1 justify-center gap-6 items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer"><a href="#">Home</a></p>
        <p className="text-white text-base text-center mx-2 cursor-pointer"><a href="#Services">Services</a></p>
        <p className="text-white text-base text-center mx-2 cursor-pointer"><a href="#Transactions">Transactions</a></p>
      </div>
    </div>

   
  </div>
);

export default Footer;