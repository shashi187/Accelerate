import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
    <div className="bg-gray-200 -mt-16 p-2 overflow-hidden md:mx-2 md:rounded-b-4xl">
      <div className="w-full bg-gray-100 md:bg-gray-200 my-5 rounded-4xl flex flex-col m-1 md:m-0">
        <h1 className="text-center text-[8.2vw] md:text-[5vw] md:font-medium md:pb-8 font-bold bg-white md:bg-gray-200 text-black">
          About Us
        </h1>
        <div className="md:flex md:justify-around">
          <div
            onMouseMove={(e) => {
              mouseMoving(e);
            }}
            className="p-5 bg-white md:bg-gray-200 md:w-1/3 overflow-hidden"
          >
            <div
              ref={tiltref}
              id="tilt"
              className="bg-white md:bg-gray-200 place-self-center pl-10 md:pl-0"
            >
              <img
                className="relative md:h-[50vh] md:w-[30vw] md:top-4 lg:top-2"
                src="/person.webp"
                alt=""
              />
            </div>
          </div>
          <div className="bg-white md:bg-gray-200 p-5 rounded-lg h-200px md:w-1/2 shadow-gray-400 md:shadow-none shadow-2xl">
            <p className="text-start text-[5vw] md:text-[2vw] font-normal text-gray-700">
              We are a team of passionate professionals dedicated to delivering
              high-quality services that help businesses grow and succeed. Our
              expertise spans across various domains, ensuring that we can meet
              the unique needs of each client.
            </p>
            <p className="text-start text-[5vw] md:text-[2vw] font-normal text-gray-700 mt-4">
              Our mission is to provide innovative solutions that drive results
              and create lasting value for our clients. We believe in building
              strong relationships based on trust, transparency, and mutual
              respect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
