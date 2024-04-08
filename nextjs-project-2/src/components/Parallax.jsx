'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Parallax = ({className, children, speed=1, id="parallax"}) => {
  const trigger = useRef();
  const target = useRef();
  const timeline = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    timeline.current = gsap.timeline({
      scrollTrigger:{
        id: id,
        trigger: trigger.current,
        scrub: true,
        start: "top bottom",
        end: "bottom top"
      }
    })

    return () => {
      timeline?.current.kill()
    }
  }, [id])

  return (
    <div ref={trigger} className={className}>
      <div ref={target}>
        children
      </div>
    </div>
  )
}

export default Parallax