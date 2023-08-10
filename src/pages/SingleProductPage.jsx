import React from 'react'
import img from '../assets/fryer.png'

const SingleProductPage = () => {
    return (
      
        <main className=" flex flex-col md:flex-row items-center md:items-start  md:max-w-5xl md:mx-auto  p-5 md:py-20 md:px-10 md:gap-5 lg:gap-7 bg-gray-100/50 xl:gap-8 xl:py-32 rounded xl:my-10">
       
        <div className="   w-72 rounded  ">
          <img className=' w-full h-full  object-cover object-center ' src={img} alt="" />
            </div>
            <div className="flex flex-col items-start justify-start gap-2 mt-5 md:flex-1">
                <h2 className="text-gray-800 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Lont 9KG Washing Machine</h2>
                <p className="text-gray-500 text-sm">Washing Machine</p>
                <p className='mt-5  md:leading-5 lg:text-base '>
                    Introducing the Lont XL Washing Machine – a game-changer for your laundry needs! With its extra-large drum capacity, intelligent sensor technology, and customizable wash programs, it delivers efficiency and impeccable cleaning performance. Its sleek design complements your home's aesthetics, making laundry day a breeze. Embrace efficiency, style, and unrivaled performance with the Lont XL Washing Machine. Laundry day just got better!
                </p>
            </div>
        </main>
      
  )
}

export default SingleProductPage



{/* <main className="mt-5 mx-5 flex flex-col md:flex-row items-center justify-center md:gap-12 md:max-w-3xl md:mx-auto">
          <div className="w-full h-48    " >
              <img className=' w-full h-full  object-contain object-center ' src={img} alt="" />
          </div> 
          <section className="mt-5">
          <div className="flex flex-col items-start justify-start gap-2 mt-5">
              <h2 className="text-gray-800 text-2xl font-bold">Lont 9KG Washing Machine</h2>
              <p className="text-gray-500 text-sm">Washing Machine</p>
          </div>
          <p className='mt-5 sm:text-xs'>
          Introducing the Lont XL Washing Machine – a game-changer for your laundry needs! With its extra-large drum capacity, intelligent sensor technology, and customizable wash programs, it delivers efficiency and impeccable cleaning performance. Its sleek design complements your home's aesthetics, making laundry day a breeze. Embrace efficiency, style, and unrivaled performance with the Lont XL Washing Machine. Laundry day just got better!
              </p>
            </section>
    </main> */}