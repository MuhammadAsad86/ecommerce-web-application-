import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex gap-3 items-center mb-3'>
      <p className='text-muted font-heading text-[.72em] font-semibold tracking-[.13em]'>
        {text1} <span className='text-primary'>{text2}</span>
      </p>
      <span className='w-7 sm:w-10 h-[2px] rounded-full bg-accent'></span>
    </div>
  )
}

export default Title
