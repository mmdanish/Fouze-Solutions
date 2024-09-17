import React from 'react'
import Hero from '../components/Hero'
import Analytics from '../components/Analytics'
import Explore from '../components/Explore'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <Analytics />
      <Explore />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home
