import type { NextPage } from 'next'
import Navbar from './components/Navbar'

const Whitepaper: NextPage = () => {
  return (
    <div className='bg-gradient-to-r from-[#263529] via-[#415a45] to-[#668f6d] h-screen'>
        <Navbar/>
        <div className='flex items-center justify-center h-3/4'>
            <div className="text-center self-center pt-10 animate-bounce">
                <img src="/images/button.png" alt="logo" width='200px' className="self-center"  />
                <div className=" -translate-y-11 self-center text-lg ">
                    Coming Soon
                </div>

            </div>
        </div>
    </div>
  )

}

export default Whitepaper