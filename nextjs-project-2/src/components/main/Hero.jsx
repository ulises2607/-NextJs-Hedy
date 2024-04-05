import React from 'react'

const Hero = () => {
  return (
    <div className='relative'>
        <video 
        autoPlay
        muted
        loop
        className='absolute top-0 w-full object-cover'
        >
            <source src='/RN237-VideoDrone.mp4' />
        </video>
    </div>
  )
}

export default Hero