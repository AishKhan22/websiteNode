// app/about/page.tsx
import Hero from '@/components/Hero';
import React from 'react';

const about = () => {
  return (
    <div>
      <h1 className='text-4xl text-center text-[maroon]'>About Us</h1>
      <p className='text-2xl text-center'>Welcome to our cosmetic brand. We are dedicated to providing high-quality products...</p>
      <Hero/>
    </div>
  );
};

export default about;
