import React from 'react'
import { Carousel } from "@material-tailwind/react";
import offer from '../assets/15-off.png'


const AdSection = () => {
  return (
    <section className="mx-5 mt-5 sm:max-w-4xl lg:mx-auto">
    <Carousel
      transition={{ duration: 0.5 }}
      navButtonsAlwaysVisible={true}
      autoPlay={true}
      autoPlayDelay={'100'}
      loop={'true'}
      
      
      className="rounded-xl space-x-2">
    <img
      src={offer}
      alt="image 1"
      className="h-full w-full object-cover"
    />
     <img
      src={offer}
      alt="image 1"
      className="h-full w-full object-cover"
    />
    
    <img
      src={offer}
      alt="image 1"
      className="h-full w-full object-cover"
    />
    
  </Carousel>
   </section>
  )
}

export default AdSection