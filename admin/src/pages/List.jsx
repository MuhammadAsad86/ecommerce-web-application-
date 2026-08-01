import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(
        backendUrl + "/api/product/list"
      );

      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        {
          headers: { token },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

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
          Product List
        </h1>
        <p className="mt-3 max-w-2xl text-slate-500">
          Manage products, review pricing and remove products from your store.
        </p>
      </div>

      {/* Products */}
      <div className="space-y-5">
        {list.map((item, index) => {
          return (
            <div
              key={item._id || index}
              className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="grid gap-6 items-center lg:grid-cols-[120px_1fr_180px_140px_120px]">
                {/* Product Image */}
                <div className="overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={item.image?.[0] || ""}
                    alt={item.name}
                    className="h-28 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                      Product #{index + 1}
                    </p>
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-slate-900">
                    {item.name}
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    {item.description || "Premium quality product available in your store."}
                  </p>
                </div>

                {/* Category */}
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.15em] text-slate-500">
                    Category
                  </p>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                    {item.category}
                  </span>
                </div>

                {/* Price */}
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.15em] text-slate-500">
                    Price
                  </p>
                  <h3 className="text-2xl font-bold text-blue-600">
                    {currency}
                    {item.price}
                  </h3>
                </div>

                {/* Action */}
                <div className="flex justify-center">
                  <button
                    onClick={() => removeProduct(item._id)}
                    className="rounded-xl bg-red-50 px-5 py-3 text-sm font-semibold text-red-600 transition-all duration-300 hover:scale-105 hover:bg-red-600 hover:text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Empty State */}
        {list.length === 0 && (
          <div className="rounded-[28px] border border-dashed border-slate-300 bg-white py-24 text-center shadow-sm">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V7a2 2 0 00-2-2h-3V3H9v2H6a2 2 0 00-2 2v6m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0H4"
                />
              </svg>
            </div>
            <h2 className="mt-8 text-3xl font-bold text-slate-900">
              No Products Found
            </h2>
            <p className="mx-auto mt-4 max-w-lg leading-8 text-slate-500">
              There are currently no products available. Add your first product to start managing your store.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default List;