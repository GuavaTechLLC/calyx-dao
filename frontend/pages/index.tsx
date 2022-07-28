import type { NextPage } from 'next'
import Navbar from './components/Navbar'
import Popup from './components/popup'
import { GetServerSideProps } from "next";

const Home: NextPage = (props) => {
 
  return (
    <div> 
    {
      JSON.stringify(props) == `{"token":""}` && 
      <Popup />
     }
     
      <div className='bg-[#364b3a] h-full'>
        <Navbar/>
        <div className='flex flex-row items-center justify-center text-white h-[80vh] pb-44 md:pb-56 md:h-fit  '>
          <div className='flex flex-col items-center z-[20] space-y-3 cursor-pointer'>
            <span className=' text-[60px] md:text-[160px] font-ahsing'>
              CalyxDAO
            </span>
            <span className='text-lg md:text-2xl font-codec'>
              Together, we pioneer the future of cannabis.
            </span>
          </div>
          <img src='/images/image.jpg' alt='hemp' className='absolute z-[10] mt-12 md:mt-0 mx-24 md:mx-48 md:translate-y-12 md:translate-x-40 w-[250px] md:w-[310px] '  />
        </div>
        <div className='w-full flex flex-row items-end justify-end  '>
          <div className='text-[13px] md:text-2xl font-codec absolute w-16 md:w-32 text-center md:px-1 mr-[165px]  md:mr-[330px] translate-y-[170px] md:translate-y-[340px]'>
              Lorem ipsum dolor sit amet.
          </div>
        </div>
       
        <div id='About' className='flex flex-row items-end justify-center '>
          <div className='basis-2/4 '>
            <img src='/images/aboutPhoto.jpg' alt='about Photo' className='w-[450px]'  />
          </div>
          <div className='absolute'>
          <img src='/images/about-text.png' alt='about Photo' className='w-3/5'  />
          </div>
          <div className='basis-3/4 '>
            <img src='/images/honeycomb.png' alt='about Photo' className='w-[690px] md:mx-16 -translate-y-[80px] md:-translate-y-[90px]'  />
          </div>
          
        </div>
        
        
      </div>
     
    </div>
  )
}

export default Home

export const getServerSideProps :GetServerSideProps = async (context) => {
  
  console.log(context.req.cookies.approved )
  return { props :{token: context.req.cookies.approved || ""} }
}