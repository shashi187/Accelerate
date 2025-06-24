import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <div className='bg-black'>
        <p className='text-white text-center pt-3'>© Accelerates 2024. All Rights Reserved. </p>
        <div className='text-white flex justify-center gap-5 py-5 pb-20 items-center'>
            <a href="https://www.linkedin.com/in/rishiraj1360/" target='blank'><FaLinkedin className='h-10 w-10' /></a>
            <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=rishiraj1360@gmail.com&amp;su=Hello%20from%20Accelerates%20App&amp;body=Hi%20there%2C%0A%0AThis%20email%20is%20being%20composed%20in%20Gmail%20from%20a%20React%20button.%0A%0ABest%20regards%2C%0AYour%20App" target='blank'><IoMailUnread className='h-10 w-10'/></a>
            <a href="https://www.instagram.com/rishiraj_.___/" target='blank'><FaSquareInstagram  className='h-10 w-10'/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
