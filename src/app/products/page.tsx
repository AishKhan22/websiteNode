// app/products/page.tsx
import Hero from '@/components/Hero';
import React from 'react';

const Products = () => {
  return (
    <div>
      
      <h1 className='text-4xl text-center text-[maroon]'>Our Products</h1>
      <p className='text-2xl text-center'>Discover our top-selling products...</p>
      <Hero/>
    </div>
  );
};

export default Products;
