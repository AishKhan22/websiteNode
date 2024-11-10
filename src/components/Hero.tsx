import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url(Capture.PNG)" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full">
        <h1 className="text-6xl sm:text-7xl font-extrabold mb-4">Welcome to the Cosmetic Shop</h1>
        <p className="text-xl sm:text-2xl mb-6">Discover the best beauty products for glowing skin</p>
        <button className="bg-red-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-pink-500 transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
