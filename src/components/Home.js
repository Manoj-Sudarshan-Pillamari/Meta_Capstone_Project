import { Button } from '@chakra-ui/react'
import React from 'react'
import Hero from './Hero'
import Specials from './Specials'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Specials/>
      <Testimonials/>
    </div>
  )
}

export default Home