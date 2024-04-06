import React from 'react'
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);


export default function Services() {
  return (
    <div id='Services'>
<div className="flex w-full justify-center items-center ">
    <div className="flex lg:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Services for
          <br />
           improve Income Tax by decentralization.
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Privacy and Security"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Implement robust security measures to protect users' sensitive financial information and ensure compliance with data protection regulations."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Smart Contract Integration"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Utilize smart contracts to automate certain aspects of the tax process, such as calculating taxes owed and facilitating payments securely on the blockchain."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Public Verification"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle=" Implement a mechanism for users to publicly verify their tax filings and payments on the blockchain. This allows third parties, such as tax authorities or auditors, to independently verify the accuracy and completeness of users' tax records."
        />
      </div>
    </div>

    
  </div>
    </div>
  )
}
