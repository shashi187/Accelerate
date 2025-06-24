import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page2 = () => {
  useGSAP(function () {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from('.rotateText', {
      transform: 'rotateX(-40deg)',
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger:{
        trigger: '.rotateText',
        start: 'top 50%',
        end: 'top 100%',
        toggleActions: 'play none none reverse',
      }
    })
  })
  
  return (
    <div className='bg-white text-black overflow-hidden pb-6 pt-6 md:pt-6'>
      <h3 className='font-[anzo] text-xl pb-12 text-center text-gray-400'>© Accelerates 2024</h3>
      <div className='rotateText'>
        <h1 className='font-[anzo] text-[18vw] leading-[18vw] text-center font-extrabold'>WEBSITES</h1>
      </div>
      <div className='rotateText'>
        <h1 className='font-[anzo] text-[18vw] leading-[18vw] text-center font-bold'>THAT</h1>
      </div>
      <div className='rotateText'>
        <h1 className='font-[anzo] text-[18vw] leading-[18vw] text-center font-bold'>CREATES</h1>
      </div>
      <div className='rotateText'>
        <h1 className='font-[anzo] text-[18vw] leading-[18vw] text-center font-bold'>IMPACT!</h1>
      </div>
      <div className='h-1 w-1/3 mx-auto bg-black mt-6 md:mb-20' ></div>
    </div>
  )
}

export default Page2
