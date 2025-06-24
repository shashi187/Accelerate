import React, { useRef, useState } from "react";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const About = () => {
  const tiltref = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const mouseMoving = (e) => {
    setXVal(
      (e.clientX -
        tiltref.current.getBoundingClientRect().x -
        tiltref.current.getBoundingClientRect().width / 2 +
        150) /
        20
    );
    setYVal(
      -(
        e.clientY -
        tiltref.current.getBoundingClientRect().y -
        tiltref.current.getBoundingClientRect().width / 2 +
        300
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
    <div className="bg-gray-100 overflow-hidden">
        
      <div className="w-full bg-gray-100 my-5 mt-8 flex flex-col m-1">
        <h1 className="text-center text-[8.2vw] md:text-[7vw] font-bold bg-white text-black">
          About Us
        </h1>
        <div onMouseMove={(e)=>{mouseMoving(e)}} className='md:h-screen p-5 bg-white overflow-hidden'>
            <div ref={tiltref} id='tilt' className='bg-white place-self-center'>
                <img className='relative md:h-[50vh] md:w-[30vw] md:top-28 lg:top-36' src="/person.webp" alt="" />
            </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-gray-400 shadow-2xl">
          <p className="text-start text-[5vw] md:text-[4vw] font-normal text-gray-700">
            We are a team of passionate professionals dedicated to delivering
            high-quality services that help businesses grow and succeed. Our
            expertise spans across various domains, ensuring that we can meet
            the unique needs of each client.
          </p>
          <p className="text-start text-[5vw] md:text-[4vw] font-normal text-gray-700 mt-4">
            Our mission is to provide innovative solutions that drive results
            and create lasting value for our clients. We believe in building
            strong relationships based on trust, transparency, and mutual
            respect.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default About;
