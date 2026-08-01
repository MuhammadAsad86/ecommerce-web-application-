import React from "react";
import { assets } from "../assets/admin_assets/assets";

const Navbar = ({ setToken }) => {

  const logoutHandler = () => {

    localStorage.removeItem("token");
    setToken("");

  };

  return (

    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-lg">

      <div className="flex items-center justify-between px-8 py-5">

        {/* Logo */}

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-blue-50 p-3">

            <img
              src={assets.logo}
              alt="RA Admin"
              className="h-10 w-10 object-contain"
            />

          </div>

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">

              Admin Dashboard

            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">

              RA Collection

            </h2>

          </div>

        </div>
                {/* Logout Button */}

        <button
          onClick={logoutHandler}
          className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-600"
        >

          Logout

        </button>

      </div>

    </header>

  );

};

export default Navbar;