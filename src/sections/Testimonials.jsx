import React from 'react'

const Testimonials = () => {
  return (
    <div className='overflow-x-hidden pt-4 bg-gray-100'>
      <h2 className="text-3xl font-bold text-center mb-10 md:mb-0">What Our Clients Say</h2>
      <div className="flex flex-row w-full overflow-x-auto md:p-12" id="testimonial">
        <div className='flex flex-col flex-none p-2 m-1 bg-white shadow-lg rounded-lg w-full md:w-1/4'>
            <strong>Priya Sharma</strong>
            <p>UrbanCraft Home Decor</p>
            <p className='text-yellow-400'>★★★★★</p>
            <p>“Sales exploded by 185% in 60 days after Accelerates rebuilt our website and Google Ads funnel!”</p>
        </div>
        <div className='flex flex-col p-2 m-2 flex-none bg-white shadow-lg rounded-lg w-full md:w-1/4'>
            <strong>Dr Arjun Singh</strong>
            <p>SmileCraft Dental Clinic</p>
            <p className='text-yellow-400' >★★★★</p>
            <p>“Ranked #1 for 12 keywords in Delhi - now getting 25+ new patients monthly from Google alone!”</p>
        </div>
        <div className='flex flex-col p-2 m-2 flex-none bg-white shadow-lg rounded-lg w-full md:w-1/4'>
            <strong>Rohan Kapoor</strong>
            <p>SaasFlow CRM</p>
            <p className='text-yellow-400' >★★★★★</p>
            <p>“320% organic traffic surge in 90 days with Accelerates' tech stack overhaul - global signups achieved!”</p>
        </div>
        <div className='flex flex-col p-2 m-2 flex-none bg-white shadow-lg rounded-lg w-full md:w-1/4'>
            <strong>Vikram Sharma</strong>
            <p>Bharat Industrial Solutions</p>
            <p className='text-yellow-400' >★★★★★</p>
            <p>"Went from 2 leads/month to 15+ weekly - our machinery orders doubled with their lead-gen system!"</p>
        </div>
        <div className='flex flex-col p-2 m-2 flex-none bg-white shadow-lg rounded-lg w-full md:w-1/4'>
            <strong>Ananya Reddy</strong>
            <p>LeadBeyond Academy</p>
            <p className='text-yellow-400' >★★★★★</p>
            <p>"31.7% conversion on my ₹50K course page - booked out 6 months within weeks of launch!"</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
