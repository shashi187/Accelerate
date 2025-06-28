import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <div className='bg-black flex flex-col-reverse justify-center items-center'>
        <p className='text-white text-center pb-8 pt-3'>© Accelerates 2024. All Rights Reserved. </p>
        <div className='text-white flex justify-center gap-5 py-5 md:pb-5 items-center'>
            <a href="https://www.linkedin.com/in/rishiraj1360/" target='blank'><FaLinkedin className='h-10 w-10' /></a>
            <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=rishiraj1360@gmail.com&amp;su=Hello%20from%20Accelerates&amp;body=Hi,%20I%20am%20interested%20in%20your%20services%20." target='blank'><IoMailUnread className='h-10 w-10'/></a>
            <a href="https://www.instagram.com/rishiraj_.___/" target='blank'><FaSquareInstagram  className='h-10 w-10'/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
