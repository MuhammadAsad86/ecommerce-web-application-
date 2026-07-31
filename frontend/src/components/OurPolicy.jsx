import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-20 text-xs sm:text-sm md:text-base text-secondary'>

            <div className='group cursor-default rounded-[20px] border border-border bg-card px-6 py-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover'>
                <img src={assets.exchange_icon} className='w-12 m-auto mb-5 transition-transform duration-300 group-hover:-translate-y-1' alt="" />
                <p className='font-semibold text-primary'>Easy Exchange Policy</p>
                <p className='mt-2 text-muted leading-6'>We offer hassle free exchange policy</p>
            </div>
            <div className='group cursor-default rounded-[20px] border border-border bg-card px-6 py-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover'>
                <img src={assets.quality_icon} className='w-12 m-auto mb-5 transition-transform duration-300 group-hover:-translate-y-1' alt="" />
                <p className='font-semibold text-primary'>7 Days Return Policy</p>
                <p className='mt-2 text-muted leading-6'>We provide 7 days free return policy</p>
            </div>

            <div className='group cursor-default rounded-[20px] border border-border bg-card px-6 py-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover'>
                <img src={assets.support_img} className='w-12 m-auto mb-5 transition-transform duration-300 group-hover:-translate-y-1' alt="" />
                <p className='font-semibold text-primary'>Best customer support</p>
                <p className='mt-2 text-muted leading-6'>We provide 24/7 customer support</p>
            </div>

        </div>
    )
}

export default OurPolicy
