import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {

  const {
    products,
    currency,
    cartItems,
    updateQuantity,
    navigate,
  } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {

    if (products.length > 0) {

      const tempData = [];

      for (const items in cartItems) {

        for (const item in cartItems[items]) {

          if (cartItems[items][item] > 0) {

            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });

          }

        }

      }

      setCartData(tempData);

    }

  }, [cartItems, products]);

  return (

    <section className="my-16">

      {/* Heading */}

      <div className="mb-12 text-center">

        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2">

          <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">

            SHOPPING CART

          </p>

        </div>

        <div className="mt-6">

          <Title text1={"YOUR"} text2={"CART"} />

        </div>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-secondary">

          Review your selected products before proceeding to secure checkout.

        </p>

      </div>

      {/* Cart Items */}

      <div className="overflow-hidden rounded-[32px] border border-border bg-card shadow-card">

        {cartData.map((item, index) => {

          const productData = products.find(
            (product) => product._id === item._id
          );

          if (!productData) return null;

          return (
                        <div
              key={index}
              className="group grid grid-cols-1 gap-6 border-b border-border p-6 transition-all duration-300 hover:bg-surface md:grid-cols-[1fr_auto]"
            >

              {/* Product */}

              <div className="flex gap-5">

                <div className="overflow-hidden rounded-[22px] bg-surface shadow-card">

                  <img
                    src={productData.image[0]}
                    alt={productData.name}
                    className="h-32 w-28 object-cover transition-all duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="flex flex-col justify-between">

                  <div>

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600">

                      Premium Product

                    </span>

                    <h2 className="mt-3 text-xl font-semibold text-primary">

                      {productData.name}

                    </h2>

                    <div className="mt-4 flex flex-wrap items-center gap-4">

                      <p className="text-2xl font-bold text-accent">

                        {currency}
                        {productData.price}

                      </p>

                      <span className="rounded-full border border-border bg-card px-4 py-2 text-sm text-secondary">

                        Size : {item.size}

                      </span>

                    </div>

                  </div>

                </div>

              </div>

              {/* Quantity & Delete */}

              <div className="flex items-center justify-between gap-5 md:flex-col md:justify-center">

                <div>

                  <p className="mb-2 text-xs uppercase tracking-[0.15em] text-secondary">

                    Quantity

                  </p>

                  <input
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                    onChange={(e) =>
                      e.target.value === "" || e.target.value === "0"
                        ? null
                        : updateQuantity(
                            item._id,
                            item.size,
                            Number(e.target.value)
                          )
                    }
                    className="w-24 rounded-xl border border-border bg-card px-4 py-3 text-center outline-none transition-all duration-300 focus:border-accent"
                  />

                </div>

                <button
                  onClick={() =>
                    updateQuantity(item._id, item.size, 0)
                  }
                  className="rounded-full bg-red-50 p-4 transition-all duration-300 hover:scale-110 hover:bg-red-100"
                >

                  <img
                    src={assets.bin_icon}
                    alt="Delete"
                    className="h-5 w-5"
                  />

                </button>

              </div>

            </div>

                      );

        })}

      </div>

      {/* Checkout Section */}

      <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_420px]">

        {/* Left Side */}

        <div className="rounded-[32px] border border-border bg-card p-8 shadow-card">

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">

            <span className="h-2 w-2 rounded-full bg-blue-600"></span>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">

              Secure Checkout

            </p>

          </div>

          <h2 className="mt-6 text-3xl font-heading text-primary">

            Ready To Complete Your Order?

          </h2>

          <p className="mt-5 leading-8 text-secondary">

            Review your order, verify quantities and continue to our
            secure checkout to complete your purchase.

          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl bg-surface p-5">

              <h3 className="font-semibold text-primary">
                Secure Payment
              </h3>

              <p className="mt-2 text-sm text-secondary">
                Protected checkout.
              </p>

            </div>

            <div className="rounded-2xl bg-surface p-5">

              <h3 className="font-semibold text-primary">
                Fast Delivery
              </h3>

              <p className="mt-2 text-sm text-secondary">
                Nationwide shipping.
              </p>

            </div>

            <div className="rounded-2xl bg-surface p-5">

              <h3 className="font-semibold text-primary">
                Easy Returns
              </h3>

              <p className="mt-2 text-sm text-secondary">
                7 day return policy.
              </p>

            </div>

          </div>

        </div>

        {/* Order Summary */}

        <div className="rounded-[32px] border border-border bg-card p-8 shadow-card">

          <CartTotal />

          <button
            onClick={() => navigate("/place-order")}
            className="mt-8 w-full rounded-2xl bg-primary px-8 py-5 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-accent"
          >

            Proceed To Checkout

          </button>

        </div>

      </div>
            {/* Empty Cart */}

      {cartData.length === 0 && (

        <div className="mt-16 rounded-[32px] border border-dashed border-border bg-card py-24 text-center shadow-card">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-50">

            <img
              src={assets.cart_icon}
              alt="Empty Cart"
              className="h-12 w-12"
            />

          </div>

          <h2 className="mt-8 font-heading text-3xl text-primary">

            Your Cart Is Empty

          </h2>

          <p className="mx-auto mt-5 max-w-lg leading-8 text-secondary">

            Looks like you haven't added any products yet.
            Browse our latest collection and find something
            you'll love.

          </p>

          <button
            onClick={() => navigate("/collection")}
            className="mt-8 rounded-2xl bg-primary px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-accent"
          >

            Continue Shopping

          </button>

        </div>

      )}

    </section>

  )

}

export default Cart
            