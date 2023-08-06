import React from 'react'
import {useEffect} from 'react'
import CategoryItem from './CategoryItem'
import useEmblaCarousel from 'embla-carousel-react'
import washingMachine from '../assets/washing-machine.png'
import fryer from '../assets/fryer.png'
import fridge from '../assets/fridge.png'
import stove from '../assets/stove.png'
import hairDryer from '../assets/hair-dryer.png'

const categories = [
   
    {
        title: 'fryer',
        imgSrc: fryer
    },
    {
        title: 'washing machine',
        imgSrc: washingMachine
    },
    {
        title: 'fridge',
        imgSrc: fridge
    },
    {
        title: 'stove',
        imgSrc: stove
    },
    {
        title: 'hair dryer',
        imgSrc: hairDryer
    },


   
]

const Categories = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        speed: 10,
        dragFree: true,
        align: 'start'
      });

      useEffect(() => {
        emblaApi && emblaApi.on('select', () => {});
      }, []);
  
    return (
        <section className=" mt-12 sm:max-w-4xl lg:mx-auto">
            <h2 className="text-center text-xl font-semibold text-gray-700 ">Categories</h2>
             <div ref={emblaRef}>
      <div className=" flex  md:gap-10 lg:gap-12 w-full h-full my-8">
        {categories.map((category) => (
            <CategoryItem key={category.title} title={category.title} imgSrc={category.imgSrc} />
        ))}
      </div>
            </div>
    </section>
    )
  
}

export default Categories



          