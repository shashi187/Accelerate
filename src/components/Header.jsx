import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Header = () => {
  return (
    <div className='w-full fixed z-10 px-12 py-8 md:px-28 md:py-14 flex justify-center items-center'>
      <div className='flex gap-6 text-gray-700 text-[4.5vw] sm:text-[2vw] md:text-[2vw] lg:text-[1.6vw] font-[anzo] bg-gray-200 px-3 py-1 md:px-2 md:py-1 rounded-xl'>
        <a href="#home" className='hover:text-black'>Home</a>
        <a href="#service" className='hover:text-black'>Services</a>
        <a href="#projects" className='hover:text-black'>Projects</a>
        <a href="#contact" className='hover:text-black'>Contact</a>
      </div>
      <div className='fixed bottom-5 md:block md:top-11 md:left-238 flex w-full justify-end px-6 '>
        <a href="https://www.instagram.com/rishiraj_.___/" className='hidden md:inline' target="_blank" rel="noopener noreferrer"><i className="ri-instagram-line text-pink-500 hover:text-black text-[10vw] md:text-[3vw]"></i></a>
        <a href="https://wa.me/919718179994?text=Hello%20Raj,%20I%20want%20to%20work%20with%20you." target="_blank" rel="noopener noreferrer"><i className="ri-whatsapp-line text-green-500 hover:text-black ml-5 text-[10vw] md:text-[3vw]"></i></a>
      </div>
    </div>
  )
}

export default Header
