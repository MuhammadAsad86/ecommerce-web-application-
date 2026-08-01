import React from 'react'

const Newsletter = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  return (

    <section className="relative my-32 overflow-hidden rounded-[32px] border border-border bg-primary px-8 py-16 text-center text-white shadow-card">

      {/* Background Glow */}

      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]"></div>

      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-400/15 blur-[120px]"></div>

      <div className="relative z-10">

        {/* Badge */}

        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">

          <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>

          <p className="text-xs font-semibold uppercase tracking-[0.25em]">

            JOIN OUR COMMUNITY

          </p>

        </div>

        {/* Heading */}

        <h2 className="mt-8 font-heading text-4xl lg:text-5xl">

          Get Exclusive Offers

        </h2>

        {/* Description */}

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75">

          Subscribe to receive exclusive discounts, early access
          to new arrivals and the latest fashion updates from
          RA Collection.

        </p>
                 <form
          onSubmit={onSubmitHandler}
          className="mx-auto mt-10 flex w-full max-w-2xl flex-col gap-4 rounded-[24px] border border-white/10 bg-white/10 p-3 backdrop-blur-xl shadow-card sm:flex-row"
        >

          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="w-full rounded-2xl bg-transparent px-5 py-4 text-white placeholder:text-white/50 outline-none"
          />

          <button
            type="submit"
            className="rounded-2xl bg-white px-8 py-4 font-semibold text-primary transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-white"
          >

            Subscribe

          </button>

        </form>

        {/* Bottom Text */}

        <p className="mt-6 text-sm text-white/60">

          No spam. Unsubscribe anytime.
          We respect your privacy.

        </p>

      </div>

    </section>

  )
}

export default Newsletter