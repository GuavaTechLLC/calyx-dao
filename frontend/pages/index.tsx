import type { NextPage } from 'next'
import Navbar from './components/Navbar'
import Popup from './components/popup'
import { GetServerSideProps } from "next";

const Home: NextPage = (props) => {
 const ShowPopUp = JSON.stringify(props)
  return (
    <div> 
    {
      ShowPopUp == `{"token":""}` ? 
      <Popup />
     
     :
      <div className='bg-gradient-to-r from-[#263529] via-[#415a45] to-[#668f6d] h-full'>
        <Navbar/>
        <div className='flex flex-row items-center justify-center text-white h-[85vh] lg:h-[75vh] lg:pb-56 md:pb-10'>
          <div className='flex flex-col items-center z-[20] space-y-3 cursor-pointer'>
            <span className=' text-[60px] md:text-[100px] lg:text-[160px] font-ahsing drop-shadow-xl'>
              CalyxDAO
            </span>
            <span className='text-lg md:text-2xl text-center font-thin'>
              Together we pioneer the future of cannabis.
            </span>
          </div>
          {/* <img src='/images/image.jpg' alt='hemp' className='absolute z-[10] mt-12 md:mt-0 mx-14 md:mx-32 lg:mx-48 md:translate-y-12 lg:translate-x-40 w-[250px] md:w-[310px] '  /> */}
        </div>
        {/* <div className='w-full flex flex-row items-end justify-end'>
          <div className=' font-codec absolute text-[10px] md:text-xl lg:text-2xl  w-14 md:w-32 px-1 -ml-[92px] md:-ml-[157px] lg:mr-[330px] translate-y-[110px] md:translate-y-[220px] lg:translate-y-[340px]'>
              Investing in cannabis businesses
          </div>
        </div> */}
       
        <div id='About' className='flex flex-row items-end justify-center '>
          <div className='basis-2/4 '>
            <img src='/images/aboutPhoto.jpg' alt='about Photo' className='w-[450px] rounded'  />
          </div>
          <div className='absolute'>
          <img src='/images/about-text.png' alt='about Photo' className='w-3/5'  />
          </div>
          <div className='basis-3/4'>
            <img src='/images/honeycomb-phrases.png' alt='about Photo' className='w-[690px] lg:mx-16 -translate-y-[50px] md:-translate-y-[90px]'  />
          </div>
          
        </div>
        
        
      </div>
    }
    </div>
  )
}

export default Home

export const getServerSideProps :GetServerSideProps = async (context) => {
  
  console.log(context.req.cookies.approved )
  return { props :{token: context.req.cookies.approved || ""} }
}