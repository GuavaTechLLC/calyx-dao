import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  return (
    <div className="w-full z-40 py-5 ">
        <div className="flex items-center h-24 w-full " >
            <div className='ml-10 flex items-center justify-center space-x-8 font-codec'>
            <Link href="/" >
                <img src="/images/logo.png" alt="logo" width='59px' className="self-center"  />
            </Link>
                <div className="group cursor-pointer">
                    <Link href="/Whitepaper" >
                        <div className="text-center group-hover:scale-110 duration-150 transition-all">
                            <img src="/images/button.png" alt="logo" width='166px' className="self-center "  />
                            <div className=" -translate-y-9 self-center">
                                Whitepaper
                            </div>

                        </div>
                    
                    </Link>
                </div>
                <div className="group cursor-pointer">
                    <Link href="/MintToken"  >
                        <div className="text-center group-hover:scale-110 duration-150 transition-all">
                            <img src="/images/button.png" alt="logo" width='166px' className="self-center"  />
                            <div className=" -translate-y-9 self-center">
                                Mint Token
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="group cursor-pointer">
                    <Link href="/About"  >
                        <div className="text-center group-hover:scale-110 duration-150 transition-all">
                            <img src="/images/button.png" alt="logo" width='166px' className="self-center"  />
                            <div className=" -translate-y-9 self-center">
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