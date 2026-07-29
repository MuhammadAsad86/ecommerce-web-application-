import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {

  const { currency } = useContext(ShopContext);

  return (
    <Link className='group text-secondary cursor-pointer block rounded-[20px] border border-border bg-card p-2.5 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 hover:shadow-card-hover' to={`/product/${id}`}>
      <div className='relative overflow-hidden rounded-[15px] bg-surface shadow-[inset_0_0_0_1px_rgba(10,10,11,.03)]'>
        <img
          className='aspect-[.78] w-full object-cover group-hover:scale-105 transition duration-500 ease-out'
          src={image[0]}
          alt=""
        />
      </div>

      <div className='flex items-start justify-between gap-3 px-1 pt-4 pb-2'>
        <p className='text-sm leading-5 text-primary'>{name}</p>
        <p className='shrink-0 text-sm font-semibold text-primary'>{currency}{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem
