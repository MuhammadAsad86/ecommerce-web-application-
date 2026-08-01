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

    <section className="my-14">

      <div className="grid gap-12 lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div className="flex flex-col-reverse gap-5 lg:flex-row">

          {/* Thumbnails */}

          <div className="flex gap-4 overflow-x-auto lg:w-24 lg:flex-col lg:overflow-y-auto">

            {productData.image.map((item, index) => (

              <button
                key={index}
                onClick={() => setImage(item)}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  image === item
                    ? "border-accent shadow-card-hover"
                    : "border-border opacity-70 hover:opacity-100"
                }`}
              >

                <img
                  src={item}
                  alt=""
                  className="h-24 w-24 object-cover"
                />

              </button>

            ))}

          </div>

          {/* Main Image */}

          <div className="relative flex-1 overflow-hidden rounded-[32px] border border-border bg-card shadow-card">

            {/* Glow */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition duration-500 hover:opacity-100"></div>

            <img
              src={image}
              alt={productData.name}
              className="w-full object-cover transition-all duration-700 hover:scale-105"
            />

          </div>

        </div>

               {/* PRODUCT INFO */}

        <div className="surface-panel self-start rounded-[32px] p-8">

          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">

            Premium Collection

          </span>

          <h1 className="mt-5 font-heading text-4xl text-primary">

            {productData.name}

          </h1>

          {/* Rating */}

          <div className="mt-5 flex items-center gap-1">

            <img src={assets.star_icon} className="w-4" alt="" />
            <img src={assets.star_icon} className="w-4" alt="" />
            <img src={assets.star_icon} className="w-4" alt="" />
            <img src={assets.star_icon} className="w-4" alt="" />
            <img src={assets.star_dull_icon} className="w-4" alt="" />

            <span className="ml-3 text-secondary">

              (122 Reviews)

            </span>

          </div>

          {/* Price */}

          <div className="mt-8">

            <p className="text-sm uppercase tracking-[0.2em] text-secondary">

              Price

            </p>

            <h2 className="mt-2 text-5xl font-bold text-accent">

              {currency}{productData.price}

            </h2>

          </div>

          {/* Description */}

          <p className="mt-8 leading-8 text-secondary">

            {productData.description}

          </p>

          {/* Size */}

          <div className="mt-10">

            <p className="mb-4 text-lg font-semibold text-primary">

              Select Size

            </p>

            <div className="flex flex-wrap gap-3">

              {productData.sizes.map((item, index) => (

                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`rounded-xl border px-6 py-3 font-medium transition-all duration-300 ${
                    item === size
                      ? "border-accent bg-accent text-white shadow-card-hover"
                      : "border-border bg-card hover:border-accent"
                  }`}
                >

                  {item}

                </button>

              ))}

            </div>

          </div>

          {/* Button */}

          <button
            onClick={() => addToCart(productData._id, size)}
            className="mt-10 w-full rounded-2xl bg-primary px-8 py-5 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-accent"
          >

            Add To Cart

          </button>

          {/* Features */}

          <div className="mt-10 space-y-3 rounded-2xl border border-border bg-card p-6 text-secondary">

            <p>✓ 100% Original Product</p>

            <p>✓ Cash On Delivery Available</p>

            <p>✓ Easy 7 Day Return & Exchange</p>

            <p>✓ Secure Online Payments</p>

          </div>

        </div>

      </div>

     
          {/* Description & Reviews */}

      <section className="mt-20 overflow-hidden rounded-[32px] border border-border bg-card shadow-card">

        {/* Header */}

        <div className="flex border-b border-border">

          <button className="bg-primary px-8 py-5 text-sm font-semibold uppercase tracking-[0.15em] text-white">

            Description

          </button>

          <button className="px-8 py-5 text-sm font-medium text-secondary transition-colors duration-300 hover:text-primary">

            Reviews (122)

          </button>

        </div>

        {/* Content */}

        <div className="space-y-6 p-8 leading-8 text-secondary">

          <p>

            Experience premium craftsmanship with carefully selected
            materials, modern styling and exceptional comfort. Every
            product is designed to provide lasting quality while
            maintaining a clean and timeless appearance.

          </p>

          <p>

            Our collection is built for everyday wear, combining
            elegant design with durability. Whether you're shopping
            for casual outfits or premium essentials, every piece is
            made to deliver style, comfort and confidence.

          </p>

          <div className="grid gap-5 pt-4 md:grid-cols-3">

            <div className="rounded-2xl border border-border bg-surface p-6">

              <h3 className="font-semibold text-primary">

                Premium Materials

              </h3>

              <p className="mt-3 text-sm text-secondary">

                Carefully selected fabrics with superior comfort and
                long lasting durability.

              </p>

            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">

              <h3 className="font-semibold text-primary">

                Secure Shopping

              </h3>

              <p className="mt-3 text-sm text-secondary">

                Fast checkout with trusted payment methods and secure
                transactions.

              </p>

            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">

              <h3 className="font-semibold text-primary">

                Fast Delivery

              </h3>

              <p className="mt-3 text-sm text-secondary">

                Reliable shipping with easy tracking and quick
                delivery to your doorstep.

              </p>

            </div>

          </div>

        </div>

      </section>

            {/* Related Products */}

      <section className="mt-24">

        <div className="mb-12 text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2">

            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">

              YOU MAY ALSO LIKE

            </p>

          </div>

          <h2 className="mt-6 font-heading text-4xl text-primary">

            Related Products

          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-secondary">

            Discover more products from the same collection that
            perfectly match your style and complete your shopping
            experience.

          </p>

        </div>

        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />

      </section>

    </section>

  ) : (

    <div className="flex items-center justify-center py-32">

      <div className="h-14 w-14 rounded-full border-4 border-accent border-t-transparent animate-spin"></div>

    </div>

  )

}

export default Product