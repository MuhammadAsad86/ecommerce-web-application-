import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
<<<<<<< HEAD
    <div className='hero-depth relative flex flex-col sm:flex-row overflow-hidden sm:overflow-visible rounded-[28px] border border-border mt-7 sm:mb-7'>

      {/* Hero Left Side */}
      <div className='relative z-10 w-full sm:w-1/2 flex items-center justify-center py-12 px-6 sm:py-14 sm:px-10'>
        <div className='hero-content text-secondary max-w-md'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-accent'></p>
=======
    <div className='flex flex-col sm:flex-row border border-gray-400'>

      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
            <p className='font-medium text-sm md:text-base'>
              OUR BESTSELLERS
            </p>
          </div>

<<<<<<< HEAD
          <h1 className='prata-regular text-4xl sm:py-5 lg:text-6xl leading-[1.08] tracking-[-.055em] text-primary'>
            Latest Arrivals
          </h1>

          <div className='premium-button inline-flex items-center gap-3 group cursor-pointer border border-primary px-5 py-3 mt-2 hover:bg-primary hover:text-white'>
            <p className='font-semibold text-xs tracking-[.12em] md:text-sm group-hover:text-white transition-colors duration-200'>
              SHOP NOW
            </p>
            <p className='w-8 md:w-11 h-[1px] bg-accent transition-all duration-300 group-hover:w-12 md:group-hover:w-16'></p>
=======
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
            Latest Arrivals
          </h1>

          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>
              SHOP NOW
            </p>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <img
<<<<<<< HEAD
        className='image-depth relative z-10 w-full sm:w-[48%] min-h-[300px] sm:my-6 sm:mr-6 rounded-b-[27px] sm:rounded-[22px] object-cover transition-transform duration-500 hover:scale-[1.025]'
=======
        className='w-full sm:w-1/2'
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
        src={assets.hero_img}
        alt=""
      />

    </div>
  )
}

<<<<<<< HEAD
export default Hero
=======
export default Hero
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
