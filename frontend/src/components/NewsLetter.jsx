import React from 'react'

const Newsletter = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className='surface-panel text-center bg-surface rounded-[28px] px-6 py-12 sm:py-16'>
      <p className='text-2xl font-medium text-primary'>
        Subscribe now & get 20% Off
      </p>

      <p className='text-muted mt-3'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className='w-full sm:w-2/3 flex items-center gap-3 mx-auto my-7 border border-border bg-card pl-5 rounded-2xl shadow-card focus-within:shadow-card-hover focus-within:border-accent transition-all duration-300'
      >
        <input
          className='w-full min-w-0 sm:flex-1 outline-none bg-transparent text-sm'
          type='email'
          placeholder='Enter your email'
          required
        />

        <button
          type='submit'
          className='premium-button bg-primary text-white text-xs px-8 py-4 shadow-button'
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  )
}

export default Newsletter
