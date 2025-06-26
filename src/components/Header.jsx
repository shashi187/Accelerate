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
      <div className='fixed bottom-5 md:block md:top-10 sm:left-150 md:left-200 lg:left-220 xl:left-250 flex w-full justify-end px-6 '>
        <a href="https://wa.me/919718179994" target="_blank" rel="noopener noreferrer">
        <i className="ri-whatsapp-line hover:text-black ml-5 text-[14vw] text-green-500 sm:text-[4vw]"></i>
        </a>
      </div>
    </div>
  )
}

export default Header
