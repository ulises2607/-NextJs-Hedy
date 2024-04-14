import React from 'react';
import Image from 'next/image';
import Hero from '@/components/main/Hero';
import { useRouter } from 'next/navigation';
import getPost from '@/handlers/getPost'

const postSlug: React.FC = async ( { params }) => {
  const id = params.postSlug
  const post = await getPost(id)
  console.log('la imagen es: ', post.url_imagen);


  
  return (
    <main className="relative h-screen">
      {/* <Hero /> */}

      <div className="relative z-10 w-[75%] mx-auto my-auto ">
        <div className=" flex flex-col w-full items-center justify-center rounded-full">
          <h1>Post: {post.title} </h1>
          <Image src={post.url_imagen} alt='image' width={700} height={500}/>
        </div>
      </div>
    </main>
  );
};

export default postSlug;
function useSWR(): { data: any; error: any; } {
  throw new Error('Function not implemented.');
}

