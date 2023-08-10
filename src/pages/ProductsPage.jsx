import React from 'react'
import { Select, Option } from "@material-tailwind/react";
import { zones , categories , products } from '../../data/data';
import ProductsGrid from '../components/ProductsGrid';

const ProductsPage = () => {
  return (
    <main className="mt-5 w-full ">
         
      <div className="grid grid-cols-2">
      
        <div className='ml-2 scale-90'>
        <Select size="md" label="Category" >
                      {categories.map((category, index) => (
                          <Option key={index} value={category}>
                              {category}
                          </Option>
                        ))}
         </Select>
     </div>
     
        
     <div className='mr-2 scale-90'>
        <Select size="md" label="Zone" >
                      {zones.map((zone, index) => (
                          <Option key={index} value={zone}>
                              {zone}
                          </Option>
                        ))}
         </Select>
     </div>
      
      </div>    

      <ProductsGrid />
     
     
      
    </main>
  )
}

export default ProductsPage


