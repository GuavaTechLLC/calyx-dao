import Link from "next/link"
import { useState } from "react"
import { HiMenu } from "react-icons/hi";
import { BiX } from "react-icons/bi";

const Navbar = () => {
    const [openMenu,setOpenMenu] = useState(false)
  return (
    <div className="w-full z-40 py-5 h-1/5 ">
        <div className="flex items-center h-24 w-full " >
            <div className=' ml-4 md:ml-10 flex items-center justify-between md:justify-start w-full space-x-4 md:space-x-8 '>
            <Link href="/" >
                <img src="/images/logo.png" alt="logo" className="self-center w-8 md:w-14"  />
            </Link>
            <div className= "hidden md:flex space-x-8">
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
            <div className='block md:hidden p-5 group'>
                <button onClick={()=> setOpenMenu(!openMenu)} className='group-hover:scale-110 duration-150 transition-all ml-10 cursor-pointer flex items-centerpx-2 py-2 rounded-lg '>
                    
                    {
                        !openMenu ? 
                        (
                            <>
                             <HiMenu className='font-bold text-2xl absolute self-center mx-[6px] text-[#364b3a] ' /> 
                            <img src="/images/hamburger.png" alt="logo" className="self-center w-10 "  />
                            </>
                           
                        )
                        :
                        (
                            <>
                                <BiX className='font-bold text-3xl absolute self-center mx-[3px] text-red-600 ' />
                            <img src="/images/hamburger.png" alt="logo" className="self-center w-auto"  />
                            </>
                            
                        )
                    }
                </button>
            </div>
            </div>
        </div>
        <div className='md:hidden  bg-white absolute z-40 rounded-b-lg w-full ease-in-out duration-700 transition-all ' >
            <div className=' mx-20 justify-between'>
                {
                    openMenu && 
                    <div className= " flex flex-col items-center space-y-8 py-3 ">
                        <div className="block group cursor-pointer">
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
                }   
            </div>
        </div>       
    </div>
  )

}

export default Navbar