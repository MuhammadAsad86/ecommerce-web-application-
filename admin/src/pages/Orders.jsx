import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/admin_assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        {
          orderId,
          status: event.target.value,
        },
        {
          headers: { token },
        }
      );

      if (response.data.success) {
        fetchAllOrders();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-blue-600"></span>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            Admin Dashboard
          </p>
        </div>
        <h1 className="mt-5 text-4xl font-bold text-slate-900">
          Order Management
        </h1>
        <p className="mt-3 max-w-2xl text-slate-500">
          Manage customer orders, update delivery status and monitor payments from one place.
        </p>
      </div>

      {/* Orders */}
      <div className="space-y-6">
        {orders.map((order, index) => {
          const paymentDone = order.payment;

          return (
            <div
              key={order._id || index}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="grid gap-6 xl:grid-cols-[80px_1fr_260px]">
                {/* Parcel Icon */}
                <div className="flex items-start justify-center">
                  <div className="rounded-2xl bg-blue-50 p-4">
                    <img
                      src={assets.parcel_icon}
                      alt="Parcel"
                      className="w-12"
                    />
                  </div>
                </div>

                {/* Order Details */}
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
                      Order #{index + 1}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        paymentDone
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {paymentDone ? "Paid" : "Pending"}
                    </span>
                  </div>

                  {/* Products */}
                  <div className="space-y-2">
                    {order.items?.map((item, i) => (
                      <p key={i} className="text-slate-700">
                        <span className="font-semibold">{item.name}</span>
                        {" × "}
                        {item.quantity}
                        {item.size && (
                          <span className="ml-2 rounded-lg bg-slate-100 px-2 py-1 text-xs">
                            {item.size}
                          </span>
                        )}
                      </p>
                    ))}
                  </div>

                  {/* Customer Address */}
                  <div className="mt-6">
                    <h3 className="font-semibold text-slate-900">
                      {order.address?.firstName} {order.address?.lastName}
                    </h3>
                    <p className="mt-2 text-slate-500">
                      {order.address?.street}
                    </p>
                    <p className="text-slate-500">
                      {order.address?.city}, {order.address?.state}
                    </p>
                    <p className="text-slate-500">
                      {order.address?.country}, {order.address?.zipcode}
                    </p>
                    <p className="mt-2 font-medium text-slate-700">
                      {order.address?.phone}
                    </p>
                  </div>
                </div>

                {/* Summary */}
                <div className="flex flex-col justify-between">
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <h3 className="mb-4 text-lg font-semibold text-slate-900">
                      Order Summary
                    </h3>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Items</span>
                        <span className="font-semibold">
                          {order.items?.reduce(
                            (total, item) => total + item.quantity,
                            0
                          ) || 0}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-slate-500">Payment</span>
                        <span className="font-semibold">
                          {order.paymentMethod}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-slate-500">Date</span>
                        <span className="font-semibold">
                          {new Date(order.date).toLocaleDateString()}
                        </span>
                      </div>

                      <div className="flex justify-between border-t border-slate-200 pt-3">
                        <span className="font-semibold text-slate-700">
                          Total
                        </span>
                        <span className="text-xl font-bold text-blue-600">
                          ${order.amount}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status Dropdown */}
                  <div className="mt-6">
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Update Status
                    </label>
                    <select
                      value={order.status}
                      onChange={(event) => statusHandler(event, order._id)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-medium outline-none transition-all duration-300 focus:border-blue-600"
                    >
                      <option value="Order Placed">Order Placed</option>
                      <option value="Packing">Packing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Out for delivery">Out for Delivery</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Empty State */}
        {orders.length === 0 && (
          <div className="rounded-[28px] border border-dashed border-slate-300 bg-white py-24 text-center shadow-sm">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-50">
              <img
                src={assets.parcel_icon}
                alt="Orders"
                className="h-12 w-12"
              />
            </div>
            <h2 className="mt-8 text-3xl font-bold text-slate-900">
              No Orders Found
            </h2>
            <p className="mx-auto mt-4 max-w-lg leading-8 text-slate-500">
              There are currently no customer orders available. New orders will
              automatically appear here once customers complete their purchases.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Orders;