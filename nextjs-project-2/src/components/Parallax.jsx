'use client'
import React, { useEffect, useRef } from 'react'

const Parallax = ({className, children, speed=1, id="parallax"}) => {
  const trigger = useRef();
  const target = useRef();
  const timeLine = useRef();

  useEffect(() => {
    return () => {

    }
  }, [])

  return (
    <div ref={trigger} className={className}>
      <div ref={target}>
        children
      </div>
    </div>
  )
}

export default Parallax