import type { NextPage } from 'next'
import Navbar from './components/Navbar'
import Popup from './components/popup'
import { useEffect, useState } from 'react'
import styles from "../styles/Header.module.css";
import Image from "next/image";

const { heroContent, heroWrapper, imageWrapper } = styles;

const IMAGE_URL =
  "/images/hero.jpg";

const Home: NextPage = (props) => {

  const [showPopUp, setShowPopUp] = useState('')
  useEffect(() => {
    let storageValue = window.sessionStorage.getItem('AcceptedPopup') == 'true' ? 'true' : ''
    setShowPopUp(storageValue)
  }, []);

  return (
    <div> 
    {
      showPopUp == '' ? 
      <Popup />
     
     :
      <div className='bg-gradient-to-r from-[#263529] via-[#415a45] to-[#668f6d] h-full'>
        <div className={heroWrapper}>
        <div className={imageWrapper}>
          <Image
            priority
            src={IMAGE_URL}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="hero image example"
          />
        </div>

        <div className={heroContent}>

          <Navbar/>
          <div className='flex flex-row items-center justify-center text-white h-[85vh] lg:h-[75vh] lg:pb-56 md:pb-10'>
            <div className='flex flex-col items-center z-[20] space-y-3 cursor-pointer'>
              <span className=' text-[60px] md:text-[100px] lg:text-[160px] font-ahsing drop-shadow-xl'>
                GrowersDAO
              </span>
              <span className='text-lg md:text-2xl text-center font-thin'>
                Together we pioneer the future of cannabis.
              </span>
            </div>
          </div>

        </div>
      </div>
        
       
      <div className="bg-gray-300 rounded w-full h-80">
        <p className="pt-20 pl-20 font-bold text-lg">
          Our Mission
        </p>
        <p className="pt-10 pl-20 pr-20 font-light">
          Lorem ipsum dolor sit amet. Non esse ratione et magnam vero eum perferendis doloribus aut harum molestiae. Ut consequuntur ratione et tempora facere non sunt numquam quo modi rerum ut delectus quasi. In exercitationem earum et molestias quasi qui voluptate cupiditate non quas quasi sed voluptatibus molestiae et ducimus consectetur.
        </p>
      </div>

      <div id='About' className='flex flex-row items-end justify-center '>
        <div className='basis-2/4'>
          <img src='/images/aboutPhoto.jpg' alt='about Photo' className='w-[450px] rounded'  />
        </div>
        <div className='absolute'>
        <img src='/images/about-text.png' alt='about Photo' className='w-3/5'  />
        </div>
        <div className='basis-2/4'>
          <img src='/images/honeycomb-phrases.png' alt='about Photo' className='w-[490px] lg:mx-8 -translate-y-[30px] md:-translate-y-[70px]'  />
        </div>
      </div>
        
      </div>
    }
    </div>
  )
}

export default Home
