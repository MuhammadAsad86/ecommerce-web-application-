<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from '../components/RelatedProduct';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });

  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className='pt-12 transition-opacity ease-in duration-500 opacity-100'>

      {/* Product Data */}
      <div className='flex gap-10 lg:gap-16 flex-col sm:flex-row'>

        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>

          <div className='flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img onClick={() => setImage(item)} src={item} key={index} className={`w-[24%] sm:w-full rounded-xl border flex-shrink-0 cursor-pointer transition-all duration-200 ${item === image ? 'border-accent shadow-card' : 'border-transparent opacity-70 hover:opacity-100'}`} />
            ))}
          </div>

          <div className="w-full sm:w-[80%] overflow-hidden rounded-[24px] bg-surface shadow-card">
            <img
              className="w-full h-auto transition-transform duration-500 hover:scale-105"
              src={image}
              alt={productData.name}
            />
          </div>

        </div>

        {/* -------- Product Info -------- */}
        <div className='flex-1 surface-panel p-6 sm:p-8 self-start'>

          <p className='text-[11px] font-semibold tracking-[.14em] text-accent'>CURATED ESSENTIAL</p>
          <h1 className='font-heading font-medium text-3xl tracking-[-.04em] mt-3'>{productData.name}</h1>

          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className='w-3.5' />
            <img src={assets.star_icon} alt="" className='w-3.5' />
            <img src={assets.star_icon} alt="" className='w-3.5' />
            <img src={assets.star_icon} alt="" className='w-3.5' />
            <img src={assets.star_dull_icon} alt="" className='w-3.5' />
            <p className='pl-2'>(122)</p>
          </div>

          <p className='mt-5 text-3xl font-medium'>
            {currency}{productData.price}
          </p>

          <p className='mt-5 text-muted md:w-4/5'>
            {productData.description}
          </p>

          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>

            <div className='flex gap-2'>
              {
                productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`border py-2 px-4 bg-surface rounded-lg transition-colors duration-200 ${item === size ? "border-accent" : "border-border"
                      }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))
              }
            </div>
          </div>

          <button onClick={() => addToCart(productData._id, size)} className='premium-button bg-primary text-white px-8 py-4 text-xs shadow-button'>
            ADD TO CART
          </button>

          <hr className='mt-8 sm:w-4/5' />

          <div className='text-sm text-muted mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>

        </div>

      </div>
      {/* -------- Description & Review Section -------- */}
      <div className='mt-20 surface-panel overflow-hidden'>

        <div className='flex'>
          <b className='bg-primary text-white px-6 py-4 text-sm'>Description</b>
          <p className='px-6 py-4 text-sm text-muted'>Reviews (122)</p>
        </div>

        <div className='flex flex-col gap-4 border-t border-border px-6 py-7 text-sm leading-6 text-muted'>
          <p>
            An e-commerce website is an online platform that facilitates the buying
            and selling of products or services over the internet. It serves as a
            virtual marketplace where businesses and individuals can showcase their
            products, interact with customers, and conduct transactions without the
            need for a physical presence. E-commerce websites have gained immense
            popularity due to the convenience, accessibility, and the global reach
            they offer.
          </p>

          <p>
            E-commerce websites typically display products or services along with
            detailed descriptions, images, prices, and any available variations
            (e.g., sizes, colors). Each product usually has its own dedicated page
            with relevant information.
          </p>
        </div>

      </div>

      {/* -------- display Related Products -------- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className='opacity-0'></div>
  );

};

export default Product;
=======
import React from 'react'

const Product = () => {
  return (
    <div>Product</div>
  )
}

export default Product
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
