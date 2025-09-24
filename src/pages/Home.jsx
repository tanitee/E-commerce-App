import React from 'react'
import LandingPage from '../components/LandingPage'
import Products from './Products'

const Home = () => {
  return (
    <>
      <LandingPage />
      <Products isHome={true} />
    </>
    
  )
}

export default Home