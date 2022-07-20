import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import { useState } from 'react'
import Loader from './components/loader'

function MyApp({ Component, pageProps }: AppProps) {

  const[loader,setLoader]= useState(false)
  Router.events.on("routeChangeStart" , (url) => {
    setLoader(true)
  })

  Router.events.on("routeChangeComplete" , (url) => {
    setLoader(false)
  })
  return (
    <>
    {
      loader?  <Loader/> :   <Component {...pageProps} />
    }
  
    </>
  
  )
}

export default MyApp
