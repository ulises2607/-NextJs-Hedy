import React from 'react'
import Image from 'next/image'
import Parallax from '@/components/Parallax'
import getData from '@/handlers/dataManage'

const ImageList = async () => {

  const data = await getData()

  data.map(d => {
    console.log(d.id);
  })

  return (
    <>

    {data.map(d => (
      d.id % 3 === 1 ? (
        <Parallax speed={1} className={"self-start"}>
          <Image key={d.id} src={d.url_imagen} alt="smooth scroll image" width={600} height={300}/>
        </Parallax>
      ) : d.id % 3 === 0 ? (
        <Parallax speed={-2} className={"self-end"}>
          <Image key={d.id} src={d.url_imagen} alt="smooth scroll image" width={600} height={500}/>
        </Parallax>
      ) : (
        <Image key={d.id} src={d.url_imagen} alt="smooth scroll image" width={700} height={400}/>
      )
    ))}
    </>
        

    
  )
}

export default ImageList