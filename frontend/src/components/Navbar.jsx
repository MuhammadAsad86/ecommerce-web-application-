<<<<<<< HEAD
import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  const navLinkClass = ({ isActive }) =>
    `px-3.5 py-1.5 rounded-full transition-all duration-300 border ${
      isActive
        ? "bg-gray-100 text-primary border-gray-200/80 ring-2 ring-blue-500/20 shadow-sm font-semibold"
        : "text-secondary border-transparent hover:bg-gray-100 hover:text-primary hover:border-gray-200/80 hover:ring-2 hover:ring-blue-500/20"
    }`;

  return (
    <div className="sticky top-0 z-30 -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 px-4 sm:px-8 md:px-12 lg:px-16 pt-2 pb-1">
      <div className="flex justify-between items-center px-4 sm:px-6 py-1 font-medium bg-background/70 backdrop-blur-xl border border-border/70 rounded-2xl shadow-card supports-[backdrop-filter]:bg-background/60">        
        <Link to="/" className="shrink-0 transition-transform duration-300 hover:scale-[1.03]" aria-label="Go to homepage">
          <img src={assets.logo} className="w-24 sm:w-28" alt="Logo" />
        </Link>

        <ul className="hidden sm:flex items-center gap-4 text-[11px] tracking-[.14em]">
          <NavLink to="/" className={navLinkClass}>
            HOME
          </NavLink>

          <NavLink to="/collection" className={navLinkClass}>
            COLLECTION
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            ABOUT
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            CONTACT
          </NavLink>
        </ul>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setShowSearch(true)}
            aria-label="Search"
            className="grid place-items-center w-8 h-8 rounded-full text-secondary transition-all duration-300 hover:bg-surface hover:text-primary hover:scale-105 active:scale-95"
          >
            <img src={assets.search_icon} className="w-[18px]" alt="" />
          </button>

          <div className="group relative">
            <Link
              to="/login"
              aria-label="Account"
              className="grid place-items-center w-8 h-8 rounded-full text-secondary transition-all duration-300 hover:bg-surface hover:text-primary hover:scale-105 active:scale-95"
            >
              <img className="w-[18px]" src={assets.profile_icon} alt="" />
            </Link>

            <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-300 ease-out absolute right-0 pt-2 z-40">
              <div className="flex flex-col gap-1 w-44 py-3 px-2 bg-card/95 backdrop-blur-xl text-secondary rounded-2xl shadow-card-hover border border-border/70">
                <p className="cursor-pointer px-3 py-2 rounded-xl text-sm hover:bg-surface hover:text-primary transition-colors duration-200">
                  My Profile
                </p>
                <p className="cursor-pointer px-3 py-2 rounded-xl text-sm hover:bg-surface hover:text-primary transition-colors duration-200">
                  Orders
                </p>
                <p className="cursor-pointer px-3 py-2 rounded-xl text-sm hover:bg-surface hover:text-primary transition-colors duration-200">
                  Logout
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/cart"
            aria-label="Cart"
            className="relative grid place-items-center w-8 h-8 rounded-full text-secondary transition-all duration-300 hover:bg-surface hover:text-primary hover:scale-105 active:scale-95"
          >
            <img src={assets.cart_icon} className="w-[18px] min-w-[18px]" alt="" />
            {getCartCount() > 0 && (
              <p className="absolute right-0 top-0 min-w-[16px] h-4 px-[3px] grid place-items-center bg-accent text-white rounded-full text-[9px] font-bold shadow-button">
                {getCartCount()}
              </p>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setVisible(true)}
            aria-label="Open menu"
            className="grid place-items-center w-8 h-8 rounded-full text-secondary sm:hidden transition-all duration-300 hover:bg-surface hover:text-primary active:scale-95"
          >
            <img src={assets.menu_icon} className="w-[18px]" alt="" />
          </button>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      <div
        onClick={() => setVisible(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-primary/30 backdrop-blur-sm transition-opacity duration-300 ${
          visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar menu for small screens */}
      <div
        role="dialog"
        aria-label="Mobile navigation menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-card/95 backdrop-blur-xl shadow-hero border-l border-border/70 transition-transform duration-300 ease-out ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full text-secondary">
          <button
            type="button"
            onClick={() => setVisible(false)}
            aria-label="Close menu"
            className="flex items-center gap-3 p-5 cursor-pointer hover:bg-surface transition-colors duration-200 border-b border-border/70"
          >
            <img className="h-3 rotate-180" src={assets.dropdown_icon} alt="" />
            <p className="text-sm font-semibold tracking-wide text-primary">Back</p>
          </button>

          <nav className="flex flex-col">
            <NavLink
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `py-4 pl-6 border-b border-border/70 text-sm tracking-wide transition-colors duration-200 hover:bg-surface hover:text-primary ${
                  isActive ? "text-primary bg-surface font-semibold" : ""
                }`
              }
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `py-4 pl-6 border-b border-border/70 text-sm tracking-wide transition-colors duration-200 hover:bg-surface hover:text-primary ${
                  isActive ? "text-primary bg-surface font-semibold" : ""
                }`
              }
              to="/collection"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `py-4 pl-6 border-b border-border/70 text-sm tracking-wide transition-colors duration-200 hover:bg-surface hover:text-primary ${
                  isActive ? "text-primary bg-surface font-semibold" : ""
                }`
              }
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `py-4 pl-6 border-b border-border/70 text-sm tracking-wide transition-colors duration-200 hover:bg-surface hover:text-primary ${
                  isActive ? "text-primary bg-surface font-semibold" : ""
                }`
              }
              to="/contact"
            >
              CONTACT
            </NavLink>
          </nav>
=======
import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex justify-between items-center py-5 font-medium">
     <Link to="/"><img src={assets.logo} className="w-36" alt="Logo" /></Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          {({ isActive }) => (
            <>
              <p>HOME</p>
              <hr
                className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                  isActive ? "" : "hidden"
                }`}
              />
            </>
          )}
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          {({ isActive }) => (
            <>
              <p>COLLECTION</p>
              <hr
                className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                  isActive ? "" : "hidden"
                }`}
              />
            </>
          )}
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          {({ isActive }) => (
            <>
              <p>ABOUT</p>
              <hr
                className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                  isActive ? "" : "hidden"
                }`}
              />
            </>
          )}
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          {({ isActive }) => (
            <>
              <p>CONTACT</p>
              <hr
                className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                  isActive ? "" : "hidden"
                }`}
              />
            </>
          )}
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt=""
        />

        <div className="group relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />

          <div className="group-hover:block hidden absolute right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 min-w-5"
            alt="Cart"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            0
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt=""
            />
            <p>Back</p> 
          </div>
          <NavLink  onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/'>HOME</NavLink>
          <NavLink  onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/collection'>COLLECTION</NavLink>
          <NavLink  onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/about'>ABOUT</NavLink>
          <NavLink  onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/contact'>CONTACT</NavLink> 
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
        </div>
      </div>
    </div>
  );
};

export default Navbar;