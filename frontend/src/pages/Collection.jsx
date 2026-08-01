import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'
import Title from '../components/Title'

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext)

  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relavent')

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {

      setCategory(prev => prev.filter(item => item !== e.target.value))

    } else {

      setCategory(prev => [...prev, e.target.value])

    }

  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {

      setSubCategory(prev => prev.filter(item => item !== e.target.value))

    } else {

      setSubCategory(prev => [...prev, e.target.value])

    }

  }

  const applyFilter = () => {

    let productsCopy = products.slice()

    if (showSearch && search) {

      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )

    }

    if (category.length > 0) {

      productsCopy = productsCopy.filter(item =>
        category.includes(item.category)
      )

    }

    if (subCategory.length > 0) {

      productsCopy = productsCopy.filter(item =>
        subCategory.includes(item.subCategory)
      )

    }

    setFilterProducts(productsCopy)

  }

  const sortProduct = () => {

    let fpCopy = filterProducts.slice()

    switch (sortType) {

      case 'low-high':

        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price))
        break

      case 'high-low':

        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price))
        break

      default:

        applyFilter()
        break

    }

  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, products, search, showSearch])

  useEffect(() => {
    sortProduct()
  }, [sortType])

  return (

    <section className="my-16">

      {/* Page Header */}

      <div className="mb-14 text-center">

        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2">

          <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">

            PREMIUM COLLECTION

          </p>

        </div>

        <div className="mt-6">

          <Title
            text1={"ALL"}
            text2={"COLLECTIONS"}
          />

        </div>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-secondary">

          Browse our complete collection featuring premium fashion,
          timeless essentials and carefully selected styles for
          every occasion.

        </p>

      </div>

      <div className="flex flex-col gap-8 lg:flex-row">

        {/* Left Sidebar */}

        <aside className="lg:w-72 lg:shrink-0">

          <div className="sticky top-24">

            <div
              onClick={() => setShowFilter(!showFilter)}
              className="mb-5 flex cursor-pointer items-center justify-between rounded-2xl border border-border bg-card px-6 py-4 shadow-card lg:cursor-default"
            >

              <div>

                <p className="text-lg font-semibold text-primary">

                  Filters

                </p>

                <p className="mt-1 text-sm text-secondary">

                  Refine your products

                </p>

              </div>

              <img
                src={assets.dropdown_icon}
                alt=""
                className={`h-3 transition duration-300 lg:hidden ${
                  showFilter ? "rotate-90" : ""
                }`}
              />

            </div>

                       {/* Category Filter */}

            <div
              className={`rounded-[28px] border border-border bg-card p-6 shadow-card transition-all duration-300 ${
                showFilter ? "block" : "hidden"
              } lg:block`}
            >

              <h3 className="mb-5 text-lg font-semibold text-primary">

                Categories

              </h3>

              <div className="space-y-4">

                <label className="group flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-surface">

                  <input
                    type="checkbox"
                    value="Men"
                    onChange={toggleCategory}
                    className="h-4 w-4 accent-accent"
                  />

                  <span className="text-secondary group-hover:text-primary">
                    Men
                  </span>

                </label>

                <label className="group flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-surface">

                  <input
                    type="checkbox"
                    value="Women"
                    onChange={toggleCategory}
                    className="h-4 w-4 accent-accent"
                  />

                  <span className="text-secondary group-hover:text-primary">
                    Women
                  </span>

                </label>

                <label className="group flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-surface">

                  <input
                    type="checkbox"
                    value="Kids"
                    onChange={toggleCategory}
                    className="h-4 w-4 accent-accent"
                  />

                  <span className="text-secondary group-hover:text-primary">
                    Kids
                  </span>

                </label>

              </div>

            </div>

            {/* Type Filter */}

            <div
              className={`mt-6 rounded-[28px] border border-border bg-card p-6 shadow-card transition-all duration-300 ${
                showFilter ? "block" : "hidden"
              } lg:block`}
            >

              <h3 className="mb-5 text-lg font-semibold text-primary">

                Product Type

              </h3>

              <div className="space-y-4">

                <label className="group flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-surface">

                  <input
                    type="checkbox"
                    value="Topwear"
                    onChange={toggleSubCategory}
                    className="h-4 w-4 accent-accent"
                  />

                  <span className="text-secondary group-hover:text-primary">
                    Topwear
                  </span>

                </label>

                <label className="group flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-surface">

                  <input
                    type="checkbox"
                    value="Bottomwear"
                    onChange={toggleSubCategory}
                    className="h-4 w-4 accent-accent"
                  />

                  <span className="text-secondary group-hover:text-primary">
                    Bottomwear
                  </span>

                </label>

                <label className="group flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-surface">

                  <input
                    type="checkbox"
                    value="Winterwear"
                    onChange={toggleSubCategory}
                    className="h-4 w-4 accent-accent"
                  />

                  <span className="text-secondary group-hover:text-primary">
                    Winterwear
                  </span>

                </label>

              </div>

            </div>

          </div>

        </aside>

               {/* Right Side */}

        <div className="flex-1">

          {/* Top Bar */}

          <div className="mb-10 flex flex-col gap-5 rounded-[28px] border border-border bg-card p-6 shadow-card lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}

            <div>

              <h2 className="text-3xl font-heading text-primary">

                Discover Collection

              </h2>

              <p className="mt-2 text-secondary">

                Showing
                <span className="mx-1 font-semibold text-primary">
                  {filterProducts.length}
                </span>
                premium products

              </p>

            </div>

            {/* Right */}

            <div className="flex items-center gap-4">

              <span className="hidden text-sm font-medium text-secondary sm:block">

                Sort By

              </span>

              <select
                onChange={(e) => setSortType(e.target.value)}
                value={sortType}
                className="rounded-full border border-border bg-white px-5 py-3 text-sm shadow-card outline-none transition-all duration-300 focus:border-accent focus:shadow-card-hover"
              >

                <option value="relavent">
                  Relevance
                </option>

                <option value="low-high">
                  Price : Low to High
                </option>

                <option value="high-low">
                  Price : High to Low
                </option>

              </select>

            </div>

          </div>

          {/* Product Grid */}

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4"></div>
                    {/* Product Grid */}

          {filterProducts.length > 0 ? (

            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">

              {filterProducts.map((item, index) => (

                <ProductItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  showBadge={false}
                />

              ))}

            </div>

          ) : (

            <div className="flex flex-col items-center justify-center rounded-[28px] border border-dashed border-border bg-card py-24 text-center shadow-card">

              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">

                <img
                  src={assets.search_icon}
                  alt="No Products"
                  className="h-10 w-10 opacity-70"
                />

              </div>

              <h3 className="text-2xl font-semibold text-primary">

                No Products Found

              </h3>

              <p className="mt-3 max-w-md text-secondary">

                We couldn't find any products matching your selected
                filters. Try changing your filters or browse our full
                collection.

              </p>

              <button
                onClick={() => {
                  setCategory([])
                  setSubCategory([])
                  setFilterProducts(products)
                }}
                className="mt-8 rounded-full bg-primary px-8 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-accent"
              >

                Reset Filters

              </button>

            </div>

          )}

        </div>

      </div>

    </section>

  )
}

export default Collection