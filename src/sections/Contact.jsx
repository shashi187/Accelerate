import React from 'react'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div className=''>
      <div id=''>
        <p className='text-[8vw] font-serif text-center mt-8 p-2'>Get In Touch</p>
        <strong className='text-gray-500 p-2'>Growth is not a luxury. It’s the baseline.</strong>
        <p className='p-2'>I’m here to engineer scalable systems that accelerate your digital presence and push your bottom line north — fast.</p>
        <a href="https://shashiraj.vercel.app" target='blank' className='flex flex-col gap-4 justify-center self-center'><img src="/portfolio.png" alt="portfolio" />
        <button className='text-center py-1 px-2 bg-gray-200 rounded-lg place-self-center'>Visit Now</button>
        </a>
      </div >
      <div id='contact' className='bg-gray-300 pt-6 rounded-2xl mt-6'>
        <p className='text-[10vw] text-center font-serif font-bold'>Send a message </p>
        <p className='p-2 text-lg text-center'>
            We're here to answer any question you may have. Got a vision? We'll build the system to support it.
        </p>
        <div>
            <Form />
        </div>
      </div>
    </div>
  )
}

export default Contact
