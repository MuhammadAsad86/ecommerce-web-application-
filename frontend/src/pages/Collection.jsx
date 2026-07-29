import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'
import Title from '../components/Title'

const Collection = () => {

<<<<<<< HEAD
  const { products, search, showSearch } = useContext(ShopContext)
=======
  const { products } = useContext(ShopContext)
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54

  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relavent');
   
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

    let productsCopy = products.slice();
<<<<<<< HEAD
    if(showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }
=======
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54

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

    let fpCopy = filterProducts.slice();

    switch (sortType) {

      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(() => {
    applyFilter()
<<<<<<< HEAD
  }, [category, subCategory, products ,search ,showSearch])
=======
  }, [category, subCategory, products])
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54

  useEffect(() => {
    sortProduct()
  }, [sortType])

  return (
<<<<<<< HEAD
    <div className='flex flex-col sm:flex-row gap-6 sm:gap-10 pt-12'>

      {/* Filter Options */}
      <div className='min-w-60 sm:sticky sm:top-24 sm:self-start'>

        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2 text-primary font-heading'
        >
          FILTERS
          <img
            className={`h-3 sm:hidden transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`}
=======
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Options */}
      <div className='min-w-60'>

        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Category Filter */}
<<<<<<< HEAD
        <div className={`border border-border bg-surface px-5 py-5 mt-6 rounded-2xl shadow-card ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-primary'>CATEGORIES</p>

          <div className='flex flex-col gap-2 text-sm font-light text-secondary'>
            <p className='flex gap-2 items-center'>
              <input className='w-3 accent-accent' type='checkbox' value={'Men'} onChange={toggleCategory} />
              Men
            </p>

            <p className='flex gap-2 items-center'>
              <input className='w-3 accent-accent' type='checkbox' value={'Women'} onChange={toggleCategory} />
              Women
            </p>

            <p className='flex gap-2 items-center'>
              <input className='w-3 accent-accent' type='checkbox' value={'Kids'} onChange={toggleCategory} />
=======
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Men'} onChange={toggleCategory} />
              Men
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Women'} onChange={toggleCategory} />
              Women
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Kids'} onChange={toggleCategory} />
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
              Kids
            </p>
          </div>
        </div>

        {/* SubCategory Filter */}
<<<<<<< HEAD
        <div className={`border border-border bg-surface px-5 py-5 my-5 rounded-2xl shadow-card ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-primary'>TYPE</p>

          <div className='flex flex-col gap-2 text-sm font-light text-secondary'>
            <p className='flex gap-2 items-center'>
              <input className='w-3 accent-accent' type='checkbox' value={'Topwear'} onChange={toggleSubCategory} />
              Topwear
            </p>

            <p className='flex gap-2 items-center'>
              <input className='w-3 accent-accent' type='checkbox' value={'Bottomwear'} onChange={toggleSubCategory} />
              Bottomwear
            </p>

            <p className='flex gap-2 items-center'>
              <input className='w-3 accent-accent' type='checkbox' value={'Winterwear'} onChange={toggleSubCategory} />
=======
        <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Topwear'} onChange={toggleSubCategory} />
              Topwear
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Bottomwear'} onChange={toggleSubCategory} />
              Bottomwear
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Winterwear'} onChange={toggleSubCategory} />
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
              Winterwear
            </p>
          </div>
        </div>

      </div>

      {/* Right Side */}
      <div className='flex-1'>

<<<<<<< HEAD
        <div className='flex justify-between items-center text-base sm:text-2xl mb-7'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
      {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border border-border text-sm px-4 py-2.5 rounded-full bg-card shadow-card focus:outline-none focus:border-accent transition-colors duration-200'>
=======
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
      {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
<<<<<<< HEAD
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 gap-y-7'>
=======
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
          {
            filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))
          }
        </div>

      </div>

    </div>
  )
}

<<<<<<< HEAD
export default Collection
=======
export default Collection
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
