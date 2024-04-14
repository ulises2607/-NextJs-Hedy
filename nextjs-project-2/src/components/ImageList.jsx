import React from 'react'
import Image from 'next/image'
import Parallax from '@/components/Parallax'
import getData from '@/handlers/dataManage'
import Link from 'next/link'

const ImageList = async () => {

  const data = await getData()

  return (
    <>

    {data.map(d => (
      d.id % 3 === 1 ? (
          <Parallax speed={1} className={"self-start"}>
            <Link href={`/${d.id}`}>
              <Image className='hover:transform hover:scale-125 transition-transform' key={d.id} src={d.url_imagen} alt="smooth scroll image" width={600} height={300} loading='lazy'/>
            </Link>
          </Parallax>
        
      ) : d.id % 3 === 0 ? (
        <Parallax speed={-2} className={"self-end"}>
          <Link href={`/${d.id}`}>
            <Image className='hover:transform hover:scale-125 transition-transform' key={d.id} src={d.url_imagen} alt="smooth scroll image" width={600} height={500} loading='lazy'/>
          </Link>
        </Parallax>
      ) : (
        <Link href={`/${d.id}`}>
          <Image className='hover:transform hover:scale-125 transition-transform' key={d.id} src={d.url_imagen} alt="smooth scroll image" width={700} height={400} loading='lazy'/>
        </Link>
      )
    ))}
    </>
        

    
  )
}

export default ImageList