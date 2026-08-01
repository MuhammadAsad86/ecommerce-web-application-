import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (

    <section className="my-28">

      {/* Heading */}

      <div className="max-w-3xl mx-auto text-center mb-16">

        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2">

          <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>

          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-blue-600">

            WHY CHOOSE US

          </p>

        </div>

        <h2 className="mt-6 font-heading text-4xl text-primary">

          Shop With Confidence

        </h2>

        <p className="mt-5 text-base leading-8 text-secondary">

          Premium service, trusted quality and customer satisfaction
          are at the heart of everything we do.

        </p>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

        {/* Exchange */}

        <div className="group rounded-[28px] border border-border bg-card px-8 py-10 text-center shadow-card transition-all duration-500 hover:-translate-y-3 hover:shadow-card-hover">

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">

            <img
              src={assets.exchange_icon}
              alt="Exchange"
              className="w-10 transition-transform duration-500 group-hover:rotate-12"
            />

          </div>

          <h3 className="text-xl font-semibold text-primary">

            Easy Exchange

          </h3>

          <p className="mt-4 leading-7 text-secondary">

            Hassle free product exchange with a simple and fast process.

          </p>

        </div>
                {/* Quality */}

        <div className="group rounded-[28px] border border-border bg-card px-8 py-10 text-center shadow-card transition-all duration-500 hover:-translate-y-3 hover:shadow-card-hover">

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">

            <img
              src={assets.quality_icon}
              alt="Quality"
              className="w-10 transition-transform duration-500 group-hover:scale-110"
            />

          </div>

          <h3 className="text-xl font-semibold text-primary">

            Quality Guarantee

          </h3>

          <p className="mt-4 leading-7 text-secondary">

            Every product is carefully inspected to ensure premium
            quality and long lasting durability.

          </p>

        </div>

        {/* Support */}

        <div className="group rounded-[28px] border border-border bg-card px-8 py-10 text-center shadow-card transition-all duration-500 hover:-translate-y-3 hover:shadow-card-hover">

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">

            <img
              src={assets.support_img}
              alt="Support"
              className="w-10 transition-transform duration-500 group-hover:scale-110"
            />

          </div>

          <h3 className="text-xl font-semibold text-primary">

            24/7 Customer Support

          </h3>

          <p className="mt-4 leading-7 text-secondary">

            Our dedicated support team is always available to help
            with your orders, questions and shopping experience.

          </p>

        </div>

      </div>

    </section>

  )
}

export default OurPolicy