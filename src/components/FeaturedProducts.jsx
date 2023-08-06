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
  {
    title: 'Lont 9KG Hair Dryer',
    imageSr: hairDryer,
    category: 'Hair Dryer'
  },
  
  
]

const FeaturedProducts = () => {
  return (
    <section className=" mt-12 flex flex-col items-center justify-center ">
            <h2 className="text-center text-xl font-semibold text-gray-700 ">Featured Products</h2>
      {
        products.map((product) => (
          <ProductCard key={product.title} title={product.title} imgSrc={product.imageSr} category={product.category} />
        ))
            }
    </section>
  )
}

export default FeaturedProducts