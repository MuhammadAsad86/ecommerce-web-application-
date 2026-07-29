import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {

  const { currency } = useContext(ShopContext);

  return (
<<<<<<< HEAD
    <Link className='group text-secondary cursor-pointer block rounded-[20px] border border-border bg-card p-2.5 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 hover:shadow-card-hover' to={`/product/${id}`}>
      <div className='relative overflow-hidden rounded-[15px] bg-surface shadow-[inset_0_0_0_1px_rgba(10,10,11,.03)]'>
        <img
          className='aspect-[.78] w-full object-cover group-hover:scale-105 transition duration-500 ease-out'
=======
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img
          className='hover:scale-110 transition ease-in-out'
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
          src={image[0]}
          alt=""
        />
      </div>

<<<<<<< HEAD
      <div className='flex items-start justify-between gap-3 px-1 pt-4 pb-2'>
        <p className='text-sm leading-5 text-primary'>{name}</p>
        <p className='shrink-0 text-sm font-semibold text-primary'>{currency}{price}</p>
      </div>
=======
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
    </Link>
  )
}

<<<<<<< HEAD
export default ProductItem
=======
export default ProductItem
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
