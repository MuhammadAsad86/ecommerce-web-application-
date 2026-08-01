import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        {
          headers: { token },
        }
      );

      if (response.data.success) {
        let allOrdersItem = [];

        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            allOrdersItem.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
            });
          });
        });

        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <section className="space-y-16">
      {/* Hero */}
      <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-slate-900 via-slate-800 to-blue-700 px-8 py-16 text-white shadow-2xl lg:px-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
              Order History
            </span>

            <h1 className="mt-6 text-4xl font-bold lg:text-6xl">
              My Orders
            </h1>

            <p className="mt-6 max-w-2xl leading-8 text-slate-200">
              Track your purchases, monitor delivery status and review all your
              previous orders in one place.
            </p>
          </div>

          <div className="rounded-[28px] bg-white/10 px-8 py-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.18em]">
              Total Orders
            </p>

            <h2 className="mt-3 text-5xl font-bold">
              {orderData.length}
            </h2>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {orderData.map((item, index) => (
          <div
            key={index}
            className="group rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="grid gap-6 lg:grid-cols-[130px_1fr_220px]">
              {/* Product Image */}
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={item.image?.[0] || ""}
                  alt={item.name}
                  className="h-32 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Details */}
              <div>
                <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                  Premium Order
                </div>

                <h2 className="mt-4 text-2xl font-bold text-slate-900">
                  {item.name}
                </h2>

                <div className="mt-5 flex flex-wrap gap-5 text-slate-600">
                  <p>
                    <span className="font-semibold">Price:</span>{" "}
                    {currency}
                    {item.price}
                  </p>

                  <p>
                    <span className="font-semibold">Quantity:</span>{" "}
                    {item.quantity}
                  </p>

                  <p>
                    <span className="font-semibold">Size:</span>{" "}
                    {item.size}
                  </p>
                </div>

                <div className="mt-5 space-y-2 text-slate-600">
                  <p>
                    <span className="font-semibold">Ordered On:</span>{" "}
                    {new Date(item.date).toDateString()}
                  </p>

                  <p>
                    <span className="font-semibold">Payment:</span>{" "}
                    {item.paymentMethod}
                  </p>
                </div>
              </div>

              {/* Status & Action */}
              <div className="flex flex-col justify-center gap-5">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-3 w-3 rounded-full ${
                        item.status === "Delivered"
                          ? "bg-green-500"
                          : item.status === "Shipped"
                          ? "bg-blue-500"
                          : item.status === "Packing"
                          ? "bg-yellow-500"
                          : "bg-orange-500"
                      }`}
                    ></span>

                    <p className="text-lg font-semibold text-slate-900">
                      {item.status}
                    </p>
                  </div>

                  <p className="mt-3 text-sm text-slate-500">
                    {item.payment ? "Payment Completed" : "Payment Pending"}
                  </p>
                </div>

                <button
                  onClick={loadOrderData}
                  className="rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-blue-700"
                >
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Empty State */}
        {orderData.length === 0 && (
          <div className="rounded-[32px] border border-dashed border-slate-300 bg-white py-24 text-center shadow-sm">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-50">
              <span className="text-5xl">📦</span>
            </div>

            <h2 className="mt-8 text-3xl font-bold text-slate-900">
              No Orders Yet
            </h2>

            <p className="mx-auto mt-5 max-w-lg leading-8 text-slate-500">
              You haven't placed any orders yet. Browse our latest collection
              and start shopping today.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Orders;