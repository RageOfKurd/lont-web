import React from 'react'
import ProductCard from './ProductCard'
import washingMachine from '../assets/washing-machine.png'
import fryer from '../assets/fryer.png'
import fridge from '../assets/fridge.png'
import stove from '../assets/stove.png'
import hairDryer from '../assets/hair-dryer.png'

const products = [
  {
    title: 'Lont 9KG Washing Machine',
    imageSr: washingMachine, 
    category: 'washing machine'
  },
  {
    title: 'Lont 9KG Fryer',
    imageSr: fryer,
    category: 'Friyer'
  },
  {
    title: 'Lont 9KG Fridge',
    imageSr: fridge,
    category: 'Fridge'
  },
  {
    title: 'Lont 9KG Stove',
    imageSr: stove,
    category: 'Stove'
  },
 
  
  
]

const FeaturedProducts = () => {
  return (
    <section className="flex flex-col items-center mx-5 md:mx-auto">
      <h2 className="text-center md:self-start md:ml-10 text-xl md:text-2xl font-semibold text-gray-700">Featured Products</h2>
      <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start items-center sm:justify-start  gap-5  mt-5 '>
        {
          products.map(product => (
            <div className="w-72 h-72 ">
              <ProductCard key={product.title} title={product.title} imgSrc={product.imageSr} category={product.category} />
            </div>
          )
          )
        }
      </div>
    </section>
  )
}

export default FeaturedProducts