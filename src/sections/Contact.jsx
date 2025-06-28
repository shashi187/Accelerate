import React from 'react'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div className=''>
      <p className='text-[8vw] leading-[6.5vw] md:text-[5vw] md:leading-[8vw] font-serif text-center mt-8 p-2'>Get In Touch<br/></p>
      <div className='flex flex-col md:mt-20 md:flex-row-reverse flex-none'>
        <div className='flex flex-col md:w-full'>
          <strong className='text-gray-500 pb-2 -mt-2 md:-mt-10 md:-pl-10 px-2 md:text-[2.2vw] md:leading-[2vw]'>Growth is not a luxury. It’s the baseline.</strong>
          <p className='p-2 md:text-[1.8vw] md:leading-[2vw] md:p-8'>I’m here to engineer scalable systems that accelerate your digital presence and push your bottom line north — fast.</p>
        </div>
        <div className='flex flex-col md:w-full md:pr-0'>
          <a href="https://shashiraj.vercel.app" target='blank' className='flex flex-col md:h-1/2 md:w-3/4 gap-4 justify-center self-center'><img src="/portfolio.png" alt="portfolio" />
            <button className='text-center py-1 px-2 md:text-[2vw] bg-gray-200 rounded-lg place-self-center'>Visit Now</button>
          </a>
        </div>
      </div >
      <div id='contact' className='bg-gray-300 pt-6 md:m-6 rounded-4xl mt-6 md:-mt-6'>
        <p className='text-[10vw] text-center md:text-[5vw] font-serif font-bold'>Send a message </p>
        <p className='p-2 text-lg md:text-2xl text-center'>
            We're here to answer any question you may have. Got a vision? We'll build the system to support it.
        </p>
        <div className='md:-mt-8'>
            <Form />
        </div>
      </div>
    </div>
  )
}

export default Contact
