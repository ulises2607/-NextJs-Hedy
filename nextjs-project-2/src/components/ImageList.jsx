import React from 'react'
import Image from 'next/image'
import Parallax from '@/components/Parallax'

const ImageList = () => {
  return (
    <div className='p-20 flex flex-col w-full items-center justify-center'>
        <Image src={"https://picsum.photos/600/400?random=1"}alt="smooth scroll image" width={600} height={400}/>
        <Image src={"https://picsum.photos/600/400?random=2"}alt="smooth scroll image" width={600} height={400}/>
        
        <Parallax speed={1} className={"self-end"}>
        <Image src={"https://picsum.photos/600/400?random=3"}alt="smooth scroll image" width={600} height={400}/>
        </Parallax>
        <Image src={"https://picsum.photos/600/400?random=4"}alt="smooth scroll image" width={600} height={400}/>
        <Image src={"https://picsum.photos/600/400?random=5"}alt="smooth scroll image" width={600} height={400}/>
        <Image src={"https://picsum.photos/600/400?random=6"}alt="smooth scroll image" width={600} height={400}/>
        <Image src={"https://picsum.photos/600/400?random=7"}alt="smooth scroll image" width={600} height={400}/>
        <Image src={"https://picsum.photos/600/400?random=8"}alt="smooth scroll image" width={600} height={400}/>
        <Image src={"https://picsum.photos/600/400?random=9"}alt="smooth scroll image" width={600} height={400}/>
        <Image src={"https://picsum.photos/600/400?random=10"}alt="smooth scroll image" width={600} height={400}/>
        <Image src={"https://picsum.photos/600/400?random=11"}alt="smooth scroll image" width={600} height={400}/>

    </div>
  )
}

export default ImageList