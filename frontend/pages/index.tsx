import type { NextPage } from 'next'
import Navbar from './components/Navbar'
import Popup from './components/popup'


const Home: NextPage = () => {
  return (
    <div>
      <Popup/>
      <div className='bg-[#364b3a] h-screen'>
        <Navbar/>
        <div className='flex flex-row items-center justify-center text-white '>
          <div className='flex flex-col items-center z-[20] space-y-3 cursor-pointer'>
            <span className='text-[160px] font-ahsing'>
              CalyxDAO
            </span>
            <span className='text-2xl font-codec'>
              Together, we pioneer the future of cannabis.
            </span>
          </div>
          <img src='/images/image.jpg' alt='hemp' className='absolute z-[10] mx-48 translate-y-12 translate-x-40 ' width='310px'  />
        </div>
        
        
      </div>
     
    </div>
  )
}

export default Home
