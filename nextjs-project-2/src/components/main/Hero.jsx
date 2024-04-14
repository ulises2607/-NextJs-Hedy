import React from 'react'

const Hero = () => {
  return (
    <div className='relative'>
        <video 
        autoPlay
        muted
        loop
        className='w-full object-cover z-0 fixed'
        >
            <source src='/RN237-VideoDrone.mp4' />
        </video>
    </div>
  )
}

export default Hero