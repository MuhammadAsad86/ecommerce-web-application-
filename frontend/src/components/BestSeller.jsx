import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import { useNavigate } from 'react-router-dom'

const BestSeller = () => {

  const { products } = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([])

  const navigate = useNavigate()

  useEffect(() => {

    const bestProduct = products.filter((item) => item.bestseller)

    setBestSeller(bestProduct.slice(0, 5))

  }, [products])

  return (

    <section className="my-28">

      {/* Heading */}

      <div className="max-w-3xl mx-auto text-center">

        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-5 py-2">

          <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>

          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-yellow-700">

            TOP SELLERS

          </p>

        </div>

        <div className="mt-6">

          <Title
            text1={"BEST"}
            text2={"SELLERS"}
          />

        </div>

        <p className="mt-6 text-base leading-8 text-secondary">

          Discover our most loved products chosen by thousands
          of satisfied customers. Premium quality, modern style
          and best value in one collection.

        </p>

      </div>

      {/* Button */}

      <div className="flex justify-center mt-10">

        <button
          onClick={() => navigate('/collection')}
          className="premium-button rounded-full bg-primary px-8 py-4 text-white transition-all duration-300 hover:bg-accent hover:scale-105"
        >

          Shop Best Sellers

        </button>

      </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

        {bestSeller.map((item, index) => (

          <div
            key={index}
            className="group relative transition-all duration-500 hover:-translate-y-2"
          >

            <ProductItem
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
              showBadge={false}
            />

          </div>

        ))}

      </div>

    </section>

  )
}

export default BestSeller
