import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";

// Key used to persist the in-progress order form across a login redirect
const PLACE_ORDER_STORAGE_KEY = "placeOrderFormData";
const PLACE_ORDER_METHOD_KEY = "placeOrderMethod";

const PlaceOrder = () => {
  // Restore saved payment method (if any) so it survives a login redirect
  const [method, setMethod] = useState(
    () => sessionStorage.getItem(PLACE_ORDER_METHOD_KEY) || "cod"
  );

  const {
    navigate,
    products,
    cartItems,
    setCartItems,
    token,
    backendUrl,
    getCartAmount,
    delivery_fee,
  } = useContext(ShopContext);

  // Restore saved address fields (if any) so it survives a login redirect
  const [formData, setFormData] = useState(() => {
    const saved = sessionStorage.getItem(PLACE_ORDER_STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // fall through to defaults if saved data is corrupted
      }
    }
    return {
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      phone: "",
    };
  });

  // Keep formData saved to sessionStorage on every change
  useEffect(() => {
    sessionStorage.setItem(PLACE_ORDER_STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  // Keep selected payment method saved to sessionStorage on every change
  useEffect(() => {
    sessionStorage.setItem(PLACE_ORDER_METHOD_KEY, method);
  }, [method]);

  // NOTE: No auto-redirect-on-mount here anymore.
  // Users can view and fill the form even when logged out.
  // Login is only required at the moment they submit — see onSubmitHandler below.

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Only require login at submit time — form data is already saved in
    // sessionStorage via the useEffect above, so nothing is lost.
    if (!token) {
      navigate("/login", {
        state: {
          from: {
            pathname: "/place-order",
          },
        },
      });
      return;
    }

    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );

            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        // ================= COD =================
        case "cod": {
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            {
              headers: {
                token,
              },
            }
          );

          if (response.data.success) {
            // Order placed successfully — clear cart AND the saved draft form
            setCartItems({});
            sessionStorage.removeItem(PLACE_ORDER_STORAGE_KEY);
            sessionStorage.removeItem(PLACE_ORDER_METHOD_KEY);
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;
        }

        // ================= Stripe =================
        case "stripe": {
          const stripeResponse = await axios.post(
            backendUrl + "/api/order/stripe",
            orderData,
            {
              headers: {
                token,
              },
            }
          );

          if (stripeResponse.data.success) {
            // Clear the saved draft before leaving for Stripe checkout
            sessionStorage.removeItem(PLACE_ORDER_STORAGE_KEY);
            sessionStorage.removeItem(PLACE_ORDER_METHOD_KEY);
            window.location.replace(stripeResponse.data.session_url);
          } else {
            toast.error(stripeResponse.data.message);
          }
          break;
        }

        // ================= Razorpay =================
        case "razorpay": {
          toast.info("Razorpay is currently unavailable.");
          break;
        }

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-10 pt-5 sm:pt-14 min-h-[80vh]"
    >
      {/* ---------------- Left Side ---------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-120">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First name"
          />
          <input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last name"
          />
        </div>

        <input
          required
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email address"
        />

        <input
          required
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
        />

        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            required
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>

        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Zipcode"
          />
          <input
            required
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>

        <input
          required
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Phone"
        />
      </div>

      {/* ---------------- Right Side ---------------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />

          {/* --------------- Payment Selection --------------- */}
          <div className="flex gap-3 flex-col lg:flex-row mt-4">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe" />
            </div>

            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay" />
            </div>

            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;