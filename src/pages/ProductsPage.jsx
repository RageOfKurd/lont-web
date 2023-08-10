import React from 'react'
import { Select, Option } from "@material-tailwind/react";
import { zones , categories , products } from '../../data/data';
import ProductsGrid from '../components/ProductsGrid';

const ProductsPage = () => {
  return (
    <div className="mt-5">
          
          {/* filters */}
          <div className="flex gap-1 ">
        <div className="w-40 scale-75">
        <Select size="md" label="Category">
                      {categories.map((category, index) => (
                          <Option key={index} value={category}>
                              {category}
                          </Option>
                        ))}
         </Select>
                </div>
              
        <div className="w-40 scale-75">
        <Select size="md" label="Zone">
                      {zones.map((zone, index) => (
                          <Option key={index} value={zone}>
                              {zone}
                          </Option>
                        ))}
                  </Select>
          </div>

            </div>

          {/* products Grid*/}

         <ProductsGrid/>
             
    </div>
  )
}

export default ProductsPage