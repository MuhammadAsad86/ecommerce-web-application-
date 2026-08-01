import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {

  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
  } = useContext(ShopContext);

  useEffect(() => {

    document.body.style.overflow = visible ? "hidden" : "";

    return () => {

      document.body.style.overflow = "";

    };

  }, [visible]);

  const navLinkClass = ({ isActive }) =>
    `relative rounded-full px-5 py-2 text-[12px] font-semibold tracking-[0.18em] transition-all duration-300 ${
      isActive
        ? "bg-blue-600 text-white shadow-lg"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    }`;

  return (

    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-8 md:px-12 lg:px-16">

      <div className="rounded-[28px] border border-slate-200 bg-white/90 px-6 py-4 shadow-xl backdrop-blur-xl">

        <div className="flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="transition-all duration-300 hover:scale-105"
          >

            <img
              src={assets.logo}
              alt="Logo"
              className="w-28 sm:w-32"
            />

          </Link>

        <ul className="hidden items-center gap-3 lg:flex">

  <NavLink
    to="/"
    className={navLinkClass}
  >
    HOME
  </NavLink>

  <NavLink
    to="/collection"
    className={navLinkClass}
  >
    COLLECTION
  </NavLink>

  <NavLink
    to="/about"
    className={navLinkClass}
  >
    ABOUT
  </NavLink>

  <NavLink
    to="/contact"
    className={navLinkClass}
  >
    CONTACT
  </NavLink>

</ul>

{/* Right Side */}

<div className="flex items-center gap-2 sm:gap-3">

  {/* Search */}

  <button
    type="button"
    onClick={() => setShowSearch(true)}
    className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:bg-slate-100 hover:scale-105"
  >

    <img
      src={assets.search_icon}
      alt="Search"
      className="h-5 w-5"
    />

  </button>

  {/* Cart */}

  <Link
    to="/cart"
    className="relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:bg-slate-100 hover:scale-105"
  >

    <img
      src={assets.cart_icon}
      alt="Cart"
      className="h-5 w-5"
    />

    {getCartCount() > 0 && (

      <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white shadow-lg">

        {getCartCount()}

      </span>

    )}

  </Link>

  {/* Mobile Menu */}

  <button
    type="button"
    onClick={() => setVisible(true)}
    className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:bg-slate-100 hover:scale-105 lg:hidden"
  >

    <img
      src={assets.menu_icon}
      alt="Menu"
      className="h-5 w-5"
    />

  </button>

</div>

</div>

</div>

{/* Overlay */}

<div
  onClick={() => setVisible(false)}
  className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300 ${
    visible
      ? "opacity-100"
      : "pointer-events-none opacity-0"
  }`}
/>

{/* Mobile Sidebar */}

<div
  className={`fixed right-0 top-0 z-50 h-screen w-80 bg-white shadow-2xl transition-transform duration-300 ${
    visible ? "translate-x-0" : "translate-x-full"
  }`}
>

  {/* Header */}

  <div className="flex items-center justify-between border-b border-slate-200 p-6">

    <img
      src={assets.logo}
      alt="Logo"
      className="w-28"
    />

    <button
      onClick={() => setVisible(false)}
      className="rounded-full p-2 transition hover:bg-slate-100"
    >

      <img
        src={assets.dropdown_icon}
        alt="Close"
        className="h-4 rotate-180"
      />

    </button>

  </div>

  {/* Navigation */}

  <nav className="flex flex-col p-5">

    <NavLink
      to="/"
      onClick={() => setVisible(false)}
      className="rounded-xl px-5 py-4 text-sm font-medium transition hover:bg-slate-100"
    >
      HOME
    </NavLink>

    <NavLink
      to="/collection"
      onClick={() => setVisible(false)}
      className="rounded-xl px-5 py-4 text-sm font-medium transition hover:bg-slate-100"
    >
      COLLECTION
    </NavLink>

    <NavLink
      to="/about"
      onClick={() => setVisible(false)}
      className="rounded-xl px-5 py-4 text-sm font-medium transition hover:bg-slate-100"
    >
      ABOUT
    </NavLink>

    <NavLink
      to="/contact"
      onClick={() => setVisible(false)}
      className="rounded-xl px-5 py-4 text-sm font-medium transition hover:bg-slate-100"
    >
      CONTACT
    </NavLink>

  </nav>

</div>

</header>

);

};

export default Navbar;