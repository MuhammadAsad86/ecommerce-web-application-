import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-10 pt-12 min-h-[80vh]">
      {/* ---------------- Left Side ---------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[520px] surface-panel p-6 sm:p-8">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input
            className="field-control w-full"
            type="text"
            placeholder="First name"
          />
          <input
            className="field-control w-full"
            type="text"
            placeholder="Last name"
          />
        </div>

        <input
          className="field-control w-full"
          type="email"
          placeholder="Email address"
        />

        <input
          className="field-control w-full"
          type="text"
          placeholder="Street"
        />

        <div className="flex gap-3">
          <input
            className="field-control w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="field-control w-full"
            type="text"
            placeholder="State"
          />
        </div>

        <div className="flex gap-3">
          <input
            className="field-control w-full"
            type="number"
            placeholder="Zipcode"
          />
          <input
            className="field-control w-full"
            type="text"
            placeholder="Country"
          />
        </div>

        <input
          className="field-control w-full"
          type="text"
          placeholder="Phone"
        />
      </div>

      {/* ---------------- Right Side ---------------- */}
      <div className="mt-0 sm:w-[420px]">
        <div className="min-w-80 surface-panel p-6 sm:p-8">
          <CartTotal />
        </div>

        <div className="mt-6 surface-panel p-6 sm:p-8">
          <Title text1={"PAYMENT"} text2={"METHOD"} />

          {/* Payment Method Selection */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">

            {/* Stripe */}
            <div
              onClick={() => setMethod("stripe")}
              className={`flex items-center justify-center gap-3 border rounded-2xl px-6 py-5 cursor-pointer transition-all duration-300 flex-1
    ${method === "stripe"
                  ? "border-accent shadow-lg"
                  : "border-border hover:border-accent hover:shadow-md"
                }`}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 ${method === "stripe"
                    ? "bg-accent border-accent"
                    : "border-gray-300"
                  }`}
              ></div>

              <img
                src={assets.stripe_logo}
                alt="Stripe"
                className="h-5"
              />
            </div>

            {/* Razorpay */}
            <div
              onClick={() => setMethod("razorpay")}
              className={`flex items-center justify-center gap-3 border rounded-2xl px-6 py-5 cursor-pointer transition-all duration-300 flex-1
    ${method === "razorpay"
                  ? "border-accent shadow-lg"
                  : "border-border hover:border-accent hover:shadow-md"
                }`}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 ${method === "razorpay"
                    ? "bg-accent border-accent"
                    : "border-gray-300"
                  }`}
              ></div>

              <img
                src={assets.razorpay_logo}
                alt="Razorpay"
                className="h-5"
              />
            </div>

            {/* Cash On Delivery */}
            <div
              onClick={() => setMethod("cod")}
              className={`flex items-center justify-center gap-3 border rounded-2xl px-6 py-5 cursor-pointer transition-all duration-300 flex-1
    ${method === "cod"
                  ? "border-accent shadow-lg"
                  : "border-border hover:border-accent hover:shadow-md"
                }`}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 ${method === "cod"
                    ? "bg-accent border-accent"
                    : "border-gray-300"
                  }`}
              ></div>

              <p className="text-sm font-semibold text-secondary">
                CASH ON DELIVERY
              </p>
            </div>

          </div>

          <div className="w-full text-end mt-8">
            <button onClick={() => navigate("/orders")} className="premium-button bg-primary text-white px-10 py-4 text-xs shadow-button">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
