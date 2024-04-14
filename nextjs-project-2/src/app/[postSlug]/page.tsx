import React from 'react';
import Image from 'next/image';
import Hero from '@/components/main/Hero';
import { useRouter } from 'next/navigation';
import getPost from '@/handlers/getPost'
import { HiArrowCircleLeft } from "react-icons/hi";
import Link from 'next/link';

const postSlug: React.FC = async ( { params }) => {
  const id = params.postSlug
  const post = await getPost(id)
  
  
  return (
    <main className="relative h-screen">
      <Hero />
      
      <div className="relative z-10 w-[75%] mx-auto my-auto ">
        
        <div className=" flex flex-col w-full items-center justify-center rounded-sm p-10 backdrop-blur-lg">
          <Link href="/">
            <HiArrowCircleLeft className='absolute right-0 top-0 mt-4 mr-4 text-gray-400 size-12 cursor-pointer hover:transform hover:scale-125 transition-transform'/>
          </Link>
          <h1 className='text-white text-6xl my-4'>{post.title} </h1>
          <Image key={id} src={post.url_imagen} alt='image' width={700} height={500} loading='lazy'/>
          <h2 className='text-white text-6xl my-4'>Te cuento...</h2>
          <p className='text-white'>{post.descripcion}</p>
        </div>
      </div>
    </main>
  );
};

export default postSlug;

