import { useRef, useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

function TypewriterEffect() {
  const headingRef = useRef()

  useEffect(()=>{
    const writer = new Typewriter(headingRef.current, {
      loop: false,
      delay: 75
    })

    writer
    .typeString("Researching is my superpower<br/>")
    .typeString("<span style='color: #DFFF00;'>Curiosity: </span><span>my last name</span>")
    .start()
  }, [])

  return (
      <div ref={headingRef} className='text-2xl min-h-14'>
      </div>
  )
}

export default TypewriterEffect