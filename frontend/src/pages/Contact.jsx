import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import Newsletter from '../components/NewsLetter'

const Contact = () => {
  return (
    <div className='pb-4'>

      <div className='text-center text-2xl pt-12'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-12 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img
          className='w-full md:max-w-[480px] aspect-[.85] object-cover rounded-[28px] shadow-hero'
          src={assets.contact_img}
          alt=""
        />

        <div className='surface-panel flex flex-col justify-center items-start gap-6 p-7 sm:p-10 md:w-[480px]'>
          <p className='eyebrow'>WE ARE HERE TO HELP</p>
          <p className='font-semibold text-xl text-primary font-heading'>
            Our Store
          </p>

          <p className='text-muted'>
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>

          <p className='text-muted'>
            Tel: (415) 555-0132 <br />
            Email: admin@RA_Collection.com
          </p>

          <p className='font-semibold text-xl text-primary font-heading'>
            Careers at RA Collection
          </p>
          <p className='text-muted'>
  Learn more about our teams and job openings.
</p>

<button className='premium-button border border-primary px-7 py-3.5 text-xs hover:bg-primary hover:text-white'>
  Explore Jobs
</button>
        </div>
      </div>
 <Newsletter />
    </div>
  )
}

export default Contact
