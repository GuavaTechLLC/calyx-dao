import Link from "next/link"
import { useState } from "react"
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="w-full h-50 bg-gray-300 flex flex-row">
       <div className="p-10">
            <div className="flex">
                <img src="/images/logo.png" alt="logo" className="self-center w-3 md:w-6"  />
                <span className="p-2">GrowersDAO</span>
            </div>
            <p className="font-thin">© All Rights Reserved.</p>
       </div>
       <div className="flex flex-row flex-wrap p-10 ml-auto">
            <div className="p-5 cursor-pointer">
                <AiFillTwitterCircle />
            </div>
            <div className="p-5 cursor-pointer">
                <FaDiscord />
            </div>
            <div className="p-5 cursor-pointer">
                <BsFacebook />
            </div>
       </div>
    </div>
  )

}

export default Footer