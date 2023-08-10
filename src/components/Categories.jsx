import React from 'react'
import {useEffect} from 'react'
import CategoryItem from './CategoryItem'
import useEmblaCarousel from 'embla-carousel-react'
import { products } from '../../data/data'


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
        {products.map((category) => (
            <CategoryItem key={category.id} title={category.title} imgSrc={category.imgSrc} />
        ))}
      </div>
            </div>
    </section>
    )
  
}

export default Categories



          