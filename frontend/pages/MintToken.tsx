import type { NextPage } from 'next'
import Navbar from './components/Navbar'

const MintToken: NextPage = () => {
  return (
    <div className='bg-gradient-to-r from-[#263529] via-[#415a45] to-[#668f6d] h-screen'>
        <Navbar/>
            <div className='flex items-center justify-center h-3/4'> 
                <div className='p-10 bg-gray-50 rounded-lg h-4/5 md:w-2/5 w-3/5'>
                    <div className='flex flex-col items center justify-center space-y-6'>
                    <img src="/images/logo.png" alt="logo" width='59px' className="self-center"  />
                        <div className='text-lg md:text-3xl font-sans font-bold text-black self-center'>
                            $CLX Token Drop
                        </div>
                        <div className='text-lg md:text-xl font-sans font-thin text-black self-center'>
                           My $CLX Token NFT Drop
                        </div>
                        <div className="text-center self-center pt-10 animate-bounce">
                            <img src="/images/button.png" alt="logo" width='166px' className="self-center"  />
                            <div className=" -translate-y-9 self-center">
                               Coming Soon
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default MintToken