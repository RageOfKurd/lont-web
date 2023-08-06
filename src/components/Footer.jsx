import React from 'react'
import lontLogo from '../assets/lont-white-logo.png'
import { Facebook, Instagram } from 'react-feather'
import Bnchina from './Bnchina'

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-900 mt-10 px-5 ">
          {/* logo */}
        <img src={lontLogo} alt="" className='w-24 sm:w-20 lg:w-24'/>
          {/* Lont Comp */}
          <section>
              <h3 className="text-gray-300 font-semibold text-lg mt-5">Lont Company</h3> 
              <ul className="flex flex-col">
                  <li className="text-gray-500 text-sm mt-2">0770 123 4567</li>
                  <li className="text-gray-500 text-sm mt-2">
                      sales@lontcompany.com
                  </li>
                  <li className="text-gray-500 text-sm mt-2">
                      Sulaymaniyah - Kurdsat st. 
                  </li>
                  <li>
        <div className="flex  space-x-1 mt-3">
          <Facebook className="text-gray-100 opacity-60 hover:opacity-80 transition-all duration-200 hover:cursor-pointer" />
          <Instagram className="text-gray-100 opacity-60 hover:opacity-80 transition-all duration-200 hover:cursor-pointer" />
        </div>
                  </li>
              </ul>
        
        </section>
          <div className="flex  items-center space-x-10">
               {/* quick Links */}
          <section>
              <h3 className="text-gray-300 font-semibold text-lg mt-5">Quick Links</h3> 
              <ul className="flex flex-col">
                  <li className="text-gray-500 text-sm mt-2">Home</li>
                  <li className="text-gray-500 text-sm mt-2">
                      Products
                  </li>
                  <li className="text-gray-500 text-sm mt-2">
                     About Us 
                  </li>
                  
              </ul>
        
        </section>
          {/* Zones */}
          <section>
              <h3 className="text-gray-300 font-semibold text-lg mt-5">Zones</h3> 
              <ul className="flex flex-col">
                  <li className="text-gray-500 text-sm mt-2">Home</li>
                  <li className="text-gray-500 text-sm mt-2">
                      Products
                  </li>
                  <li className="text-gray-500 text-sm mt-2">
                     About Us 
                  </li>
                  
              </ul>
        
        </section>
         </div>
          {/* copyrights */}
          <p className="text-gray-500 text-sm mt-10 text-center">
              © 2021 Lont Company. All rights reserved.
          </p>
          <div className="flex items-center justify-center mt-5 gap-2">
          <p className="text-gray-500 text-sm  text-center">
              developed by 
              </p>
                <Bnchina />
          </div>
          
    </footer>
  )
}

export default Footer