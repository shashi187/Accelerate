import React from 'react'

const Services = () => {
  return (
    <div className='p-2'>
      <div className='w-full bg-gray-200 py-5 pt-2 pb-20 md:pb-4 md:mb-5 flex rounded-4xl flex-col p-1' id='service'>
        <h1 className='text-center text-[6.2vw] md:text-[6vw] font-bold text-black'>Exactly What You Need to Grow</h1>
        <div className='bg-gray-200 md:p-18 p-2 md:flex gap-3 md:-mt-3'>
          <div className='bg-white shadow-gray-400 shadow-2xs bg-fit w-full p-5 rounded-lg mt-5 md:mt-0 '>
            <img src="/web.gif" alt="coding" height={80} width={100} className='place-self-center md:h-50 w-50'/>
            <h1 className='text-center text-[6.2vw] md:text-[2vw] font-bold text-black'>High-ImpacWebsite</h1>
            <h1 className='text-start text-[5vw] md:text-[1.7vw] font-bold text-gray-700'>Built for Sales, Not Just Visits</h1>
            <h1 className='text-start text-[4.5vw] md:text-[1.5vw] font-bold text-gray-700'>We engineer websites that convert visitors into buyers. Mobile-perfect, lighting-fast, and obsessed with your ROI.</h1>
          </div>
          <div className='bg-white shadow-gray-400 shadow-2xs bg-fit w-full p-5 rounded-lg mt-5 md:mt-0'>
            <img src="/seo.gif" alt="seo" height={50} width={100} className='place-self-center md:h-50 w-50'/>
            <h1 className='text-center text-[6.2vw] md:text-[2vw] font-bold text-black'>SEO</h1>
            <h1 className='text-start text-[5vw] md:text-[1.7vw] font-bold text-gray-700'>Be Found First,<br/> Always</h1>
            <h1 className='text-start text-[4.5vw] md:text-[1.5vw] font-bold text-gray-700'>Data-driven SEO that captures high-value traffic. We don't just rank keywords - we rank profit drivers.</h1>
          </div>
          <div className='bg-white shadow-gray-400 shadow-2xs bg-fit w-full p-5 rounded-lg mt-5 md:mt-0'>
            <img src="/marketing.gif" alt="ads" height={50} width={100} className='place-self-center md:h-50 w-50'/>
            <h1 className='text-center text-[6.2vw] md:text-[2vw] font-bold text-black'>Profit-Driven Ads</h1>
            <h1 className='text-start text-[5vw] md:text-[1.7vw] font-bold text-gray-700'>Only Pay for Results That Pay You</h1>
            <h1 className='text-start text-[4.5vw] md:text-[1.5vw] font-bold text-gray-700'>Google Ads campaigns designed to scale revenue - not costs. We optimize daily so you profit nightly.</h1>
          </div>
          <div className='bg-white shadow-gray-400 shadow-2xl bg-fit w-full p-5 rounded-lg mt-5 md:mt-0'>
            <img src="/landing.gif" alt="landing-page" height={50} width={100} className='place-self-center md:h-50 w-50'/>
            <h1 className='text-center text-[6.2vw] md:text-[2vw] font-bold text-black'>Landing Pages</h1>
            <h1 className='text-start text-[5vw] md:text-[1.7vw] font-bold text-gray-700'>Stop Traffic Leaks,<br/> Start Revenue Floods</h1>
            <h1 className='text-start text-[4.5vw] md:text-[1.5vw] font-bold text-gray-700'>Scientifically crafted pages that convert 30%+ of visitors. Your ads deserve better than dead-end clicks.</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
