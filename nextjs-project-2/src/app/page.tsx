import React from 'react';
import Image from 'next/image';
import ImageList from '@/components/ImageList';
import Hero from '@/components/main/Hero';

const Home = () => {
  
  return (
    
    <main className="relative h-screen">
      <Hero />

      <div className="relativ z-10 w-[75%]  mx-auto my-auto ">
        <div className=" flex flex-col w-full items-center justify-center rounded-full backdrop-blur-lg">
          <h1 className="text-4xl text-white mb-8 mt-8 cursor-pointer hover:text-orange-500 transform hover:scale-110 transition-all duration-300 hover:bg-orange-500 hover:bg-opacity-50 hover:backdrop-blur-lg p-2 rounded-lg">
            EL BLOG <span className="text-orange-800 hover:text-gray-300">RUTERO</span>
          </h1>
          <ImageList />
        </div>
      </div>
    </main>
  );
};

export default Home;
