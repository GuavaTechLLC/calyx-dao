import { useState } from "react"
import cookie from "js-cookie"


const Popup = () => {
    const click =async () => {
        cookie.set("approved", "false" , {expires: 1/24})
        window.location.reload()
    }

    return (
        
            <div className="fixed z-50 bg-white h-screen">
            {
                
                <>
                    <video autoPlay muted loop id="video" className=" translate-y-44 md:translate-y-10 lg:translate-y-0">
                        <source src='/images/video.mp4' type="video/mp4" />
                    </video>
                    <div className="flex flex-col items-center justify-start text-center ">
                        <div className=" w-3/5 ">

                            <div className=" text-white -translate-y-[20vh] md:-translate-y-[60vh] lg:-translate-y-[85vh] ">
                                <div className="mt-10 pb-16 flex flex-col items-center ">
                                    <img src="/images/logo.png" alt="logo" className="self-center w-4 sm:w-8 md:w-14" />
                                    <h3 className="font-ahsing text-sm md:text-2xl">
                                        Calyx DAO
                                    </h3>
                                </div>
                                <div className=" flex flex-col items-center w-full font-codec ">
                                    <div className=" font-bold text-white font-codec ">
                                        <h1 className=" text-lg md:text-4xl">  Are you 21 or older ?</h1>
                                        <div className="flex flex-row items-center justify-around text-sm md:text-lg py-10 ">
                                            <div className="group cursor-pointer">
                                                <button className="bg-green-500 text-gray-50 px-3 pt-3 pb-2 shadow-md rounded-lg group-hover:bg-green-900 group-hover:scale-75 transition-all ease-in-out duration-150" onClick={click}>
                                                    Yes
                                                </button>
                                            </div>
                                            <div className="group">
                                                <button className="bg-green-500 text-gray-50 px-3 pt-3 pb-2 shadow-md rounded-lg group-hover:bg-green-900 group-hover:scale-75 transition-all ease-in-out duration-150">
                                                    No
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </>
            }
            </div>
    
        
        )
}



export default Popup

