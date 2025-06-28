import React from 'react'
import { FaShopify } from "react-icons/fa";
import { SiWix } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { SiWoocommerce } from "react-icons/si";
import { useRef,useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TypewriterText from '../components/TypeWriterText';
const Hero = () => {
  const tiltref = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const mouseMoving = (e) => {
    setXVal(
      (e.clientX -
        tiltref.current.getBoundingClientRect().x -
        tiltref.current.getBoundingClientRect().width / 2 +
        300) /
        20
    );
    setYVal(
      -(
        e.clientY -
        tiltref.current.getBoundingClientRect().y -
        tiltref.current.getBoundingClientRect().width / 2 +
        0
      ) / 10
    );
  };
  useGSAP(
    function () {
      gsap.to(tiltref.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 3,
        ease: "power4.out",
      });
    },
    [xVal, yVal]
  );
  return (
    <div className='overflow-hidden bg-white p-1 md:p-2' id='home' >
      <div className='w-full h-screen flex flex-col justify-center items-center bg-cover bg-center md:bg-top rounded-2xl p-2 bg-[url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80)]'>
        <div className='flex'>
          <div className='text-center'>
            <h1 className='text-5xl mt-20 font-sans md:text-7xl font-bold text-black'>Your <span className='text-blue-500 font-extrabold'>Growth Engine</span> Starts Here</h1>
            <p className='mt-4 text-lg md:text-xl text-shadow-gray-800'>Websites that convert, SEO that dominates, and ads that scale revenue - all under one roof</p>
            <div className='flex gap-4 mt-4 justify-center'>
                <a href="#contact" className='mt-6 px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500'>Get In Touch</a>
                <a href="#projects" className='mt-6 px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500'>View Work</a>
            </div>
            <div className='mt-4'>
                <TypewriterText words={['Websites that convert', ' SEO that dominates', 'Ads that scale revenue']} />
            </div>
            <p className='text-[8vw] md:text-[4vw] text-gray-700'>all under one roof</p>
          </div>
          <div
            onMouseMove={(e) => {
              mouseMoving(e);
            }}
            className="p-5 md:w-1/3 relative top-36 right-10 overflow-hidden hidden md:block"
          >
            <div
              ref={tiltref}
              id="tilt"
              className="place-self-center pl-20 md:pl-0"
            >
              <img
                className="relative md:h-[60vh] md:w-[40vw] bottom-0 lg:-top-6"
                src="/person.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className='flex w-full mt-4 justify-around md:gap-2 lg:gap-5'>
          <FaWordpress className='h-[12vh] w-[10vw] md:h-[8vh] md:w-[8vw]' />
          <FaShopify className='h-[12vh] w-[10vw] md:h-[8vh] md:w-[8vw]' />
          <SiWix className='h-[12vh] w-[10vw] md:h-[8vh] md:w-[8vw]' />
          <SiWoocommerce className='h-[12vh] w-[20vw] md:h-[8vh] md:w-[12vw]' />
        </div>
      </div>
    </div>
  )
}

export default Hero
