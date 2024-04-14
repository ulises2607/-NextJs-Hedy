import React from 'react';
import Image from 'next/image';
import ImageList from '@/components/ImageList';
import Hero from '@/components/main/Hero';

const Home = () => {
  
  return (
    
    <main className="relative h-screen">
      <Hero />

      <div className="relative z-10 w-[75%] bg-black mx-auto my-auto ">
        <div className=" flex flex-col w-full items-center justify-center rounded-full">
          <ImageList />
        </div>
      </div>
    </main>
  );
};

export default Home;
