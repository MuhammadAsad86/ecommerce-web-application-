import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/admin_assets/assets";

const Sidebar = () => {

  return (

    <aside className="min-h-screen w-[280px] border-r border-slate-200 bg-white">

      {/* Logo Section */}

      <div className="border-b border-slate-200 px-8 py-8">

        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">

          <span className="h-2 w-2 rounded-full bg-blue-600"></span>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">

            Navigation

          </p>

        </div>

        <h2 className="mt-5 text-3xl font-bold text-slate-900">

          Admin Menu

        </h2>

        <p className="mt-2 text-sm text-slate-500">

          Manage your store using the options below.

        </p>

      </div>

      {/* Menu */}

      <div className="space-y-3 p-6">
        <NavLink
  to="/add"
  className={({ isActive }) =>
    `group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
      isActive
        ? "bg-blue-600 text-white shadow-lg"
        : "text-slate-600 hover:bg-slate-100"
    }`
  }
>

  <img
    src={assets.add_icon}
    alt="Add"
    className="h-6 w-6"
  />

  <span className="font-medium">

    Add Product

  </span>

</NavLink>

<NavLink
  to="/list"
  className={({ isActive }) =>
    `group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
      isActive
        ? "bg-blue-600 text-white shadow-lg"
        : "text-slate-600 hover:bg-slate-100"
    }`
  }
>

  <img
    src={assets.order_icon}
    alt="Products"
    className="h-6 w-6"
  />

  <span className="font-medium">

    Product List

  </span>

</NavLink>

<NavLink
  to="/orders"
  className={({ isActive }) =>
    `group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
      isActive
        ? "bg-blue-600 text-white shadow-lg"
        : "text-slate-600 hover:bg-slate-100"
    }`
  }
>

  <img
    src={assets.order_icon}
    alt="Orders"
    className="h-6 w-6"
  />

  <span className="font-medium">

    Orders

  </span>

</NavLink>
      </div>

      {/* Footer */}

      <div className="mt-auto border-t border-slate-200 p-6">

        <div className="rounded-2xl bg-slate-50 p-5">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">

            Admin Panel

          </p>

          <p className="mt-2 text-sm leading-6 text-slate-500">

            Manage products, customer orders and your online store from one dashboard.

          </p>

        </div>

      </div>

    </aside>

  );

};

export default Sidebar;