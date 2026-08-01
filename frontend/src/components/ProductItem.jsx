import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({
  id,
  image,
  name,
  price,
  showBadge = false
}) => {

  const { currency } = useContext(ShopContext)

  return (

    <Link
      to={`/product/${id}`}
      className="group relative block overflow-hidden rounded-[28px] border border-border bg-white shadow-card transition-all duration-500 hover:-translate-y-3 hover:border-accent/40 hover:shadow-card-hover"
    >

      {/* Badge */}

      {showBadge && (

        <span className="absolute left-4 top-4 z-30 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-white shadow-lg">

          NEW

        </span>

      )}

      {/* Image */}

      <div className="relative overflow-hidden rounded-t-[28px] bg-surface">

        <div className="absolute inset-0 z-10 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>

        <img
          src={image[0]}
          alt={name}
          className="aspect-[0.78] w-full object-cover transition-all duration-700 group-hover:scale-110"
        />

      </div>

      {/* Content */}

      <div className="px-5 pt-5 pb-6">
                {/* Product Name */}

        <h3 className="line-clamp-2 min-h-[52px] text-base font-semibold text-primary transition-colors duration-300 group-hover:text-accent">

          {name}

        </h3>

        {/* Rating */}

        <div className="mt-3 flex items-center gap-1">

          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>

          <span className="ml-2 text-xs text-secondary">
            (4.9)
          </span>

        </div>

        {/* Price & Button */}

        <div className="mt-5 flex items-center justify-between">

          <div>

            <p className="text-xs uppercase tracking-widest text-secondary">
              Price
            </p>

            <p className="mt-1 text-2xl font-bold text-accent">
              {currency}{price}
            </p>

          </div>

          <button
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-accent hover:scale-105"
          >
            View
          </button>

        </div>

      </div>

    </Link>

  )
}

export default ProductItem