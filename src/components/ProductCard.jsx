import React, { useState } from 'react';// Import the custom CSS for smooth animations


const ProductCard = ({title , imgSrc , category}) => {
 

  return (
      <article className=" w-4/5 px-10 py-8 bg-gray-100/80 rounded m-5 flex flex-col items-center justify-center " >
      <div className="w-44 h-44">
        <img src={imgSrc} alt={title} className="w-full h-full object-contain object-center" />
      </div>
      <div className=" self-start mt-5  flex flex-col items-start gap-1 justify-start">
        <p className='text-gray-500/80'>{category}</p>
        <h3 className='text-gray-700 font-semibold text-lg'>{title}</h3>
        </div>
      </article>
          
  );
};

export default ProductCard;