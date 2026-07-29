import React from 'react'
<<<<<<< HEAD
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetter from "../components/NewsLetter";
const About = () => {
  return (
    <div className='pb-4'>

      <div className='text-2xl text-center pt-12'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-12 flex flex-col md:flex-row gap-10 lg:gap-16'>
        <img className='w-full md:max-w-[450px] aspect-[.9] object-cover rounded-[28px] shadow-hero' src={assets.about_img} alt="" />

        <div className='surface-panel flex flex-col justify-center gap-6 md:w-2/4 p-7 sm:p-10 text-secondary leading-7'>
          <p className='eyebrow'>OUR STORY</p>
          <p>
            RA Collection was born out of a passion for innovation and a desire
            to revolutionize the way people shop online. Our journey began with
            a simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>

          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>

          <b className='text-primary font-heading text-lg'>Our Mission</b>

          <p>
            Our mission at RA Collection is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div>
        <div className='text-xl py-4 section-heading'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-20'>

          <div className='group border border-border bg-surface rounded-2xl shadow-card hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 px-8 py-10 flex flex-col gap-5'>
            <b className='text-primary'>Quality Assurance:</b>
            <p className='text-secondary'>
              We meticulously select and vet each product to ensure it meets our stringent quality standards.
            </p>
          </div>

          <div className='group border border-border bg-surface rounded-2xl shadow-card hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 px-8 py-10 flex flex-col gap-5'>
            <b className='text-primary'>Convenience:</b>
            <p className='text-secondary'>
              With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
            </p>
          </div>

          <div className='group border border-border bg-surface rounded-2xl shadow-card hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 px-8 py-10 flex flex-col gap-5'>
            <b className='text-primary'>Exceptional Customer Service:</b>
            <p className='text-secondary'>
              Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.
            </p>
          </div>

        </div>
        <NewsLetter />
      </div>

    </div>
  )
}

export default About
=======

const About = () => {
  return (
    <div>About</div>
  )
}

export default About
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
