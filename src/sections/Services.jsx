import React from 'react'

const Services = () => {
  return (
    <div>
      <div className='w-full bg-gray-100 py-5 pt-8 pb-20 flex flex-col p-1' id='service'>
        <h1 className='text-center text-[5.2vw] md:text-[4vw] font-bold text-black'>Exactly What You Need to Grow</h1>
        <div className='bg-white'>
          <div className='bg-gradient-to-r from-red-200 to-blue-200 shadow-gray-400 shadow-2xs bg-fit w-full p-5 rounded-lg mt-5 '>
            <img src="/coding.png" alt="coding" height={50} width={50} className='place-self-center'/>
            <h1 className='text-center text-[5.2vw] md:text-[5vw] font-bold text-black'>High-Impact Websites</h1>
            <h1 className='text-start text-[3.5vw] md:text-[4vw] font-bold text-gray-700'>Built for Sales, Not Just Visits</h1>
            <h1 className='text-start text-[3vw] md:text-[4vw] font-bold text-gray-700'>We engineer websites that convert visitors into buyers. Mobile-perfect, lighting-fast, and obsessed with your ROI.</h1>
          </div>
          <div className='bg-gradient-to-l from-green-200 to-blue-200 shadow-gray-400 shadow-2xs bg-fit w-full p-5 rounded-lg mt-5 '>
            <img src="/coding.png" alt="coding" height={50} width={50} className='place-self-center'/>
            <h1 className='text-center text-[5.2vw] md:text-[7vw] font-bold text-black'>Page-1 SEO</h1>
            <h1 className='text-start text-[3.5vw] md:text-[7vw] font-bold text-gray-700'>Be Found First, Always</h1>
            <h1 className='text-start text-[3vw] md:text-[7vw] font-bold text-gray-700'>Data-driven SEO that captures high-value traffic. We don't just rank keywords - we rank profit drivers.</h1>
          </div>
          <div className='bg-gradient-to-l from-blue-200 to-yellow-200 shadow-gray-400 shadow-2xs bg-fit w-full p-5 rounded-lg mt-5 '>
            <img src="/coding.png" alt="coding" height={50} width={50} className='place-self-center'/>
            <h1 className='text-center text-[5.2vw] md:text-[7vw] font-bold text-black'>Profit-Driven Ads</h1>
            <h1 className='text-start text-[3.5vw] md:text-[7vw] font-bold text-gray-700'>Only Pay for Results That Pay You</h1>
            <h1 className='text-start text-[3vw] md:text-[7vw] font-bold text-gray-700'>Google Ads campaigns designed to scale revenue - not costs. We optimize daily so you profit nightly.</h1>
          </div>
          <div className='bg-gradient-to-l from-cyan-200 to-violet-200 shadow-gray-400 shadow-2xl bg-fit w-full p-5 rounded-lg mt-5 '>
            <img src="/coding.png" alt="coding" height={50} width={50} className='place-self-center'/>
            <h1 className='text-center text-[5.2vw] md:text-[7vw] font-bold text-black'>Conversion Landing Pages</h1>
            <h1 className='text-start text-[3.5vw] md:text-[7vw] font-bold text-gray-700'>Stop Traffic Leaks, Start Revenue Floods</h1>
            <h1 className='text-start text-[3vw] md:text-[7vw] font-bold text-gray-700'>Scientifically crafted pages that convert 30%+ of visitors. Your ads deserve better than dead-end clicks.</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
