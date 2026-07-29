import React from 'react'

<<<<<<< HEAD
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
=======
const NewsletterBox = () => {
  const OnSubmithandler =(event) => {
    event.preventDefault();
    // Handle form submission logic here
  }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>
        Subscribe now & get 20% off
      </p>
      <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input
          className='w-full sm:flex-1 outline-none'
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
          type='email'
          placeholder='Enter your email'
          required
        />

        <button
          type='submit'
<<<<<<< HEAD
          className='premium-button bg-primary text-white text-xs px-8 py-4 shadow-button'
=======
          className='bg-black text-white text-xs px-10 py-4'
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  )
}

<<<<<<< HEAD
export default Newsletter
=======
export default NewsletterBox
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
