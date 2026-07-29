import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-32 mb-10 px-7 py-12 rounded-[28px] bg-primary text-white text-sm'>

        <div>
          <img
            src={assets.logo}
            alt="RA Collection Logo"
            className="mb-5 w-32 invert"
          />
          <p className='w-full md:w-2/3 text-border'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 font-heading">COMPANY</p>

          <ul className="flex flex-col gap-3 text-border">
            <li className="cursor-pointer w-fit transition-all duration-300 hover:text-white hover:translate-x-1 hover:underline underline-offset-4">
              Home
            </li>

            <li className="cursor-pointer w-fit transition-all duration-300 hover:text-white hover:translate-x-1 hover:underline underline-offset-4">
              About us
            </li>

            <li className="cursor-pointer w-fit transition-all duration-300 hover:text-white hover:translate-x-1 hover:underline underline-offset-4">
              Delivery
            </li>

            <li className="cursor-pointer w-fit transition-all duration-300 hover:text-white hover:translate-x-1 hover:underline underline-offset-4">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 font-heading'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-border'>
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr className='border-border' />
        <p className='py-5 text-sm text-center text-muted'>
          Copyright 2024@ RA_Collection.com - All Right Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer