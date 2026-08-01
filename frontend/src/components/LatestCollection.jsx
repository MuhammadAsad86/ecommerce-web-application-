import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import { useNavigate } from 'react-router-dom'

const LatestCollection = () => {

  const { products } = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    setLatestProducts(products.slice(0, 10))
  }, [products])

  return (

    <section id="latest-collection" className="my-28">
      {/* Heading */}

      <div className="max-w-3xl mx-auto text-center">

        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2">

          <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>

          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-blue-600">

            NEW ARRIVALS

          </p>

        </div>

        <div className="mt-6">

          <Title
            text1={"LATEST"}
            text2={"COLLECTION"}
          />

        </div>

        <p className="mt-6 text-secondary leading-8 text-base">

          Explore our newest collection featuring premium fashion,
          timeless elegance and carefully selected pieces crafted
          for every occasion.

        </p>

      </div>

      {/* View All Button */}

      <div className="flex justify-center mt-10">

        <button
          onClick={() => navigate('/collection')}
          className="premium-button rounded-full bg-primary px-8 py-4 text-white transition-all duration-300 hover:bg-accent hover:scale-105"
        >

          View Collection

        </button>

      </div>
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

        {latestProducts.map((item, index) => (

          <div
            key={index}
            className="group relative fade-in-up transition-all duration-500 hover:-translate-y-2"
          >

            {/* NEW Badge */}

            <span className="absolute left-3 top-3 z-20 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-semibold tracking-wider text-white shadow-lg">

              NEW

            </span>

            {/* Product Card */}

            <div className="overflow-hidden rounded-[28px] border border-border bg-white shadow-card transition-all duration-500 hover:shadow-card-hover">

              <div className="overflow-hidden">

                <ProductItem
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  )
}

export default LatestCollection