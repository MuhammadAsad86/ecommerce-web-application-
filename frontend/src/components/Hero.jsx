import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {

  const navigate = useNavigate()

  const scrollToLatest = () => {
    const section = document.getElementById('latest-collection')

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="relative overflow-hidden mt-8 rounded-[32px] border border-border bg-white shadow-card">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-blue-500/10 blur-[130px]"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-400/10 blur-[120px]"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 px-8 py-16 lg:px-16">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2">

            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>

            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600">
              NEW COLLECTION 2026
            </p>

          </div>

          {/* Heading */}

          <h1 className="mt-8 font-heading text-5xl lg:text-7xl leading-tight text-primary">

            Timeless Fashion

            <br />

            <span className="text-accent">
              For Every Occasion
            </span>

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-xl text-lg leading-8 text-secondary">

            Discover premium clothing, footwear and accessories designed
            for modern lifestyles. Every piece is carefully selected
            to combine elegance, comfort and exceptional quality.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            {/* Shop Now */}

            <button
              onClick={scrollToLatest}
              className="premium-button rounded-full bg-primary px-8 py-4 text-white shadow-button transition-all duration-300 hover:bg-accent hover:scale-105"
            >
              Shop Now
            </button>

            {/* Explore Collection */}

            <button
              onClick={() => navigate('/collection')}
              className="rounded-full border border-primary px-8 py-4 font-medium transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105"
            >
              Explore Collection
            </button>

          </div>

          {/* Stats */}

          <div className="mt-14 flex flex-wrap gap-10">

            <div>

              <h2 className="text-3xl font-bold text-primary">
                15K+
              </h2>

              <p className="mt-2 text-secondary">
                Happy Customers
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-primary">
                750+
              </h2>

              <p className="mt-2 text-secondary">
                Premium Products
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-primary">
                99%
              </h2>

              <p className="mt-2 text-secondary">
                Satisfaction Rate
              </p>

            </div>

          </div>

        </div>

                {/* RIGHT SIDE */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center py-16 overflow-hidden">

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,#3B5BFF_1px,transparent_1px)] bg-[size:28px_28px]"></div>

          {/* Ambient Glow */}
          <div className="absolute h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[150px]"></div>

          {/* Hero Image */}
          <img
            src={assets.hero_img}
            alt="RA Collection"
            className="relative z-20 w-[90%] max-w-[580px] rounded-[30px] object-cover shadow-[0_45px_90px_rgba(10,10,11,.22)] transition-all duration-500 hover:scale-[1.04] hover:rotate-1"
          />

          {/* Card 1 */}
          <div className="absolute top-12 left-8 z-30 surface-panel px-6 py-4 backdrop-blur-xl animate-float">

            <div className="flex items-center gap-2 mb-2">

              <span className="h-3 w-3 rounded-full bg-blue-600"></span>

              <p className="eyebrow">
                PREMIUM
              </p>

            </div>

            <h3 className="font-heading text-lg text-primary">
              Premium Quality
            </h3>

            <p className="mt-2 text-sm text-secondary">
              Carefully selected fashion essentials.
            </p>

          </div>

          {/* Card 2 */}
          <div className="absolute bottom-12 right-8 z-30 surface-panel px-6 py-4 backdrop-blur-xl animate-float">

            <div className="flex items-center gap-2 mb-2">

              <span className="h-3 w-3 rounded-full bg-green-500"></span>

              <p className="eyebrow">
                SHIPPING
              </p>

            </div>

            <h3 className="font-heading text-lg text-primary">
              Free Shipping
            </h3>

            <p className="mt-2 text-sm text-secondary">
              Free delivery on all orders over $99.
            </p>

          </div>

          {/* Card 3 */}
          <div className="absolute top-1/2 right-4 -translate-y-1/2 z-30 surface-panel px-6 py-4 backdrop-blur-xl animate-float">

            <div className="flex items-center gap-2 mb-2">

              <span className="h-3 w-3 rounded-full bg-orange-500"></span>

              <p className="eyebrow">
                SERVICE
              </p>

            </div>

            <h3 className="font-heading text-lg text-primary">
              Easy Returns
            </h3>

            <p className="mt-2 text-sm text-secondary">
              30 day hassle free returns.
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Hero