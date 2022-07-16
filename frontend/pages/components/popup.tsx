import { useState } from "react"

const Popup = () => {

    const [isApproved,setIsApproved]= useState(false)
    const Approved = () => {
        setIsApproved(true)
    }

  return (
    isApproved ? 
    (
        <></>
    )
     : 
    (
        <div className=" bg-zinc-50 inset-0 fixed w-full z-50 ">
            
        <div className="flex flex-col items-center justify-center text-center h-screen">
            
            <div className="h-3/5 w-3/5">
                <div className="mt-10 pb-16 flex flex-col items-center ">
                    <img src="/images/logo.png" alt="logo" width='59px' className="self-center"  />
                    <h3 className="font-ahsing text-2xl">
                        Calyx DAO
                    </h3>
                </div>
                <div className=" flex flex-col items-center w-full font-codec ">
                    <div className=" font-bold text-black font-codec ">
                        <h1 className=" text-3xl md:text-4xl">  Are you 21 or older ?</h1>
                        <div className="flex flex-row items-center justify-around text-lg py-10 ">
                            <div className="group cursor-pointer">
                            <button className="bg-green-500 text-gray-50 px-3 py-2 shadow-md group-hover:bg-green-900 group-hover:scale-75 transition-all ease-in-out duration-150  " onClick={Approved}>
                                Yes
                            </button>
                            </div>
                            <div className="group">
                            <button className="bg-green-500 text-gray-50 px-3 py-2 shadow-md group-hover:bg-green-900 group-hover:scale-75 transition-all ease-in-out duration-150  " >
                                No
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    
  )
}


export default Popup