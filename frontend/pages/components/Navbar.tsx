import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  return (
    <div className="w-full z-40 py-5 ">
        <div className="flex items-center h-24 w-full " >
            <div className=' ml-4 md:ml-10 flex items-center justify-center  space-x-5 md:space-x-8 '>
            <Link href="/" >
                <img src="/images/logo.png" alt="logo" className="self-center w-10 md:w-14"  />
            </Link>
                <div className="group cursor-pointer">
                    <Link href="/Whitepaper" >
                        <div className="text-center group-hover:scale-110 duration-150 transition-all">
                            <img src="/images/button.png" alt="logo" className="self-center w-28 md:w-40"/>
                            <div className=" -translate-y-6 md:-translate-y-[33px] -translate-x-1 md:-translate-x-2 flex items-center justify-center font-codec text-[10px] md:text-base pb-0">
                                <img src="/images/notion_logo.png" alt="logo" className="md:mx-2 pb-1 w-4 md:w-5"/> Whitepaper
                            </div>

                        </div>
                    
                    </Link>
                </div>
                <div className="group cursor-pointer">
                    <Link href="/MintToken"  >
                        <div className="text-center group-hover:scale-110 duration-150 transition-all">
                            <img src="/images/button.png" alt="logo"  className="self-center w-28 md:w-40"  />
                            <div className=" -translate-y-[21px] md:-translate-y-[33px] flex items-center justify-center font-codec text-xs md:text-base px-2">
                                Mint Token
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="group cursor-pointer">
                    <Link href="/#About"  >
                        <div className="text-center group-hover:scale-110 duration-150 transition-all">
                            <img src="/images/button.png" alt="logo" className="self-center w-28 md:w-40"  />
                            <div className=" -translate-y-[21px] md:-translate-y-[33px] flex self-end justify-center font-codec  text-xs md:text-base p-0">
                                About
                            </div>
                        </div>
                    </Link>
                </div> 
            </div>
        </div>
    </div>
  )

}

export default Navbar