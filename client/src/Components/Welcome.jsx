import React,{useContext,useState} from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { ImLibrary } from "react-icons/im";
import {BsInfoCircle} from 'react-icons/bs'
import Loader from './Loader';
import {TransactionContext} from '../context/TransactionContext';
import { ToastContainer, toast } from 'react-toastify';
import { shortenAddress } from '../utils/shortenAddress';

const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-white'
const Input = ({placeholder,name,type,value,handleChange})=>(
    <input
    placeholder={placeholder}
    type={type}
    value={value}
    step='0.001'
    onChange={(e)=>{handleChange(e,name)}}
    className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none  white-glassmorphism'
/>
)
export default function Welcome() {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !message) return;

    sendTransaction();
  };
 
  return (
    <div id='Home' className='flex w-full justify-center items-center'>
    <div className='flex flex-col lg:flex-row items-start justify-between lg:p-20 py-12 px-4'>
      <div className='flex flex-1 justify-start flex-col md:mr-10'>
          <h1 className='text-3xl sm:text-5xl text-white py-1 text-gradient'>
          Centralized Solution  <br /> for Decentralized Tax Reporting.
          </h1>
          <p className='text-left mt-5 text-gray-500 md:w-9/12 w-11/12 text-base'>
          Improving and enhancing the Income Tax by decentralization. <br />
          </p>
          {!currentAccount && (
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <AiFillPlayCircle className="text-white mr-2" />
            <p className="text-white text-base font-semibold">
              Connect Wallet
            </p>
          </button>
        )}
          <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
            <div className={`rounded-tl-2xl ${commonStyles}`}>
            Reliability
            </div>
            <div className={`rounded-tr-2xl sm:rounded-tr-none ${commonStyles}`}>Security</div>
            <div className={` md:rounded-tr-2xl sm:rounded-tr-2xl ${commonStyles}`}>
            Transparency
            </div>
            <div className={`md:rounded-bl-2xl sm:rounded-bl-2xl ${commonStyles}`}>
            Web 3.0
            </div>
            <div className={`rounded-bl-2xl sm:rounded-bl-none ${commonStyles}`}>Decentralized</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>
            Blockchain
            </div>
          </div>
      </div>


    <div className='flex flex-col  flex-1 items-center justify-start w-full lg:mt-0 mt-10'>
      <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism'>
          <div className='flex justify-between flex-col w-full h-full'>
              <div className='flex justify-between  items-start'>
                    <div className='w-10 h-10 rounded-full  border-2 border-white flex justify-center items-center'>
                        <ImLibrary className='text-3xl text-white' />
                    </div>
                        <BsInfoCircle className='text-white text-xs' />
              </div>
              <div>
                <p className='text-white font-light text-sm'>
                  {shortenAddress(currentAccount)}
                </p>
                <p className='text-white text-lg font-semibold'>
                  TaxChain
                </p>
              </div>
          </div>
      </div>

<div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
<Input placeholder='Address To' name='addressTo' type='text' handleChange={handleChange} />
<Input placeholder='Tax (ETH)' name='amount' type='number'  handleChange={handleChange} />
<Input placeholder='Enter Message' name='message' type='text' handleChange={handleChange} />

<div className='h-[1px] w-full bg-gray-400 my-5 ' />

{
isLoading?
<div>
<Loader />
<h1 className='text-blue-700 font-semibold mt-3 mb-3 text-center'>Sending...</h1>
</div>

:(
  <div>
  <button type='button'
  onClick={handleSubmit}
  className='flex justify-center text-white items-center bg-[#2952e3] p-3 rounded-full cursor-pointer w-full hover:bg-[#2546bd]'
   >
  Pay Tax Now
  </button>
  </div>
)
}
</div>


    </div>


    </div>
  </div>
  )
}
