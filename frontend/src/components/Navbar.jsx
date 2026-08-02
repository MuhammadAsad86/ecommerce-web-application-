import React, { useContext, useEffect, useRef, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const profileRef = useRef(null);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  // Close profile dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Subtle shadow intensification on scroll for depth
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `
    relative px-4 py-2
    rounded-2xl
    text-[11px]
    font-semibold
    tracking-[0.15em]
    transition-all
    duration-300
    ${
      isActive
        ? "bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-[0_8px_18px_rgba(79,70,229,0.35)] scale-[1.03]"
        : "text-slate-600 hover:bg-white hover:shadow-md hover:-translate-y-0.5"
    }
    `;

  const mobileLinkClass = ({ isActive }) =>
    `
    rounded-2xl px-5 py-3.5 text-sm font-semibold transition-all
    ${
      isActive
        ? "bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-200"
        : "text-slate-700 hover:bg-white hover:shadow-md"
    }
    `;

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-8 md:px-12 lg:px-16">
      <div
        className={`
        h-[76px]
        flex items-center justify-between
        px-7
        rounded-[28px]
        bg-gradient-to-br from-white/95 to-slate-100/80
        border border-white
        backdrop-blur-xl
        transition-all duration-300
        ${
          scrolled
            ? "shadow-[10px_10px_28px_rgba(15,23,42,0.16),-8px_-8px_25px_rgba(255,255,255,1)]"
            : "shadow-[8px_8px_25px_rgba(15,23,42,0.12),-8px_-8px_25px_rgba(255,255,255,0.95)]"
        }
        `}
      >
        {/* Logo */}
        <Link to="/" className="group relative transition-transform duration-300 hover:scale-105">
          <img
            src={assets.logo}
            alt="RA Collection"
            className="w-28 sm:w-32 drop-shadow-[0_8px_12px_rgba(0,0,0,0.15)]"
          />
          {/* animated gradient underline on hover */}
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full rounded-full" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-2 p-1.5 rounded-2xl bg-white/40 shadow-inner">
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
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button
            onClick={() => setShowSearch(true)}
            aria-label="Search"
            className="
            flex h-10 w-10 items-center justify-center rounded-full
            bg-gradient-to-br from-white to-slate-100
            border border-white
            shadow-[5px_5px_12px_rgba(15,23,42,0.12),-5px_-5px_12px_white]
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-[8px_10px_18px_rgba(15,23,42,0.15)]
            active:scale-95
            "
          >
            <img src={assets.search_icon} alt="Search" className="h-[18px] w-[18px]" />
          </button>

          {/* Profile */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => {
                if (!token) {
                  navigate("/login");
                } else {
                  setProfileOpen((prev) => !prev);
                }
              }}
              aria-label="Profile"
              className="
              flex h-10 w-10 items-center justify-center rounded-full
              bg-gradient-to-br from-white to-slate-100
              border border-white
              shadow-[5px_5px_12px_rgba(15,23,42,0.12),-5px_-5px_12px_white]
              transition-all duration-300
              hover:-translate-y-1
              active:scale-95
              "
            >
              <img src={assets.profile_icon} alt="Profile" className="h-[18px] w-[18px]" />
            </button>

            {/* Dropdown */}
            {token && profileOpen && (
              <div
                className="
                absolute right-0 top-12 w-44
                origin-top-right
                rounded-2xl
                bg-white/95
                border border-white
                p-2
                shadow-[8px_12px_25px_rgba(15,23,42,0.15)]
                backdrop-blur-xl
                animate-dropdown-in
                "
              >
                <button
                  onClick={() => {
                    setProfileOpen(false);
                    navigate("/orders");
                  }}
                  className="w-full rounded-xl px-4 py-3 text-left text-sm text-slate-700 transition hover:bg-slate-100"
                >
                  My Orders
                </button>

                <button
                  onClick={logout}
                  className="w-full rounded-xl px-4 py-3 text-left text-sm text-red-600 transition hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link
            to="/cart"
            aria-label="Cart"
            className="
            relative flex h-10 w-10 items-center justify-center rounded-full
            bg-gradient-to-br from-white to-slate-100
            border border-white
            shadow-[5px_5px_12px_rgba(15,23,42,0.12),-5px_-5px_12px_white]
            transition-all duration-300
            hover:-translate-y-1
            active:scale-95
            "
          >
            <img src={assets.cart_icon} alt="Cart" className="h-[18px] w-[18px]" />

            {getCartCount() > 0 && (
              <span
                className="
                absolute -right-1 -top-1
                flex h-5 min-w-5
                items-center justify-center
                rounded-full
                bg-gradient-to-br from-indigo-600 to-blue-600
                text-[10px] font-bold text-white
                shadow-lg shadow-indigo-300
                animate-badge-pulse
                "
              >
                {getCartCount()}
              </span>
            )}
          </Link>

          {/* Mobile Menu */}
          <button
            onClick={() => setVisible(true)}
            aria-label="Open menu"
            className="
            flex lg:hidden h-10 w-10
            items-center justify-center
            rounded-full
            bg-gradient-to-br from-white to-slate-100
            border border-white
            shadow-[5px_5px_12px_rgba(15,23,42,0.12),-5px_-5px_12px_white]
            active:scale-95
            "
          >
            <img src={assets.menu_icon} alt="Menu" className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setVisible(false)}
        className={`
          fixed inset-0 z-40
          bg-slate-900/30
          backdrop-blur-sm
          transition-all duration-300
          ${visible ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`
          fixed right-0 top-0 z-50
          h-screen w-80
          bg-gradient-to-br from-white to-slate-100
          border-l border-white
          shadow-2xl
          transition-transform duration-300
          ${visible ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200/70">
          <img src={assets.logo} alt="Logo" className="w-28 drop-shadow-md" />

          <button
            onClick={() => setVisible(false)}
            aria-label="Close menu"
            className="
            flex h-9 w-9
            items-center justify-center
            rounded-full
            bg-gradient-to-br from-white to-slate-100
            shadow-md
            transition-transform duration-300
            hover:rotate-90
            "
          >
            <img src={assets.dropdown_icon} alt="Close" className="h-4 rotate-180" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex flex-col gap-2 p-6">
          <NavLink to="/" onClick={() => setVisible(false)} className={mobileLinkClass}>
            HOME
          </NavLink>

          <NavLink to="/collection" onClick={() => setVisible(false)} className={mobileLinkClass}>
            COLLECTION
          </NavLink>

          <NavLink to="/about" onClick={() => setVisible(false)} className={mobileLinkClass}>
            ABOUT
          </NavLink>

          <NavLink to="/contact" onClick={() => setVisible(false)} className={mobileLinkClass}>
            CONTACT
          </NavLink>

          {!token ? (
            <button
              onClick={() => {
                setVisible(false);
                navigate("/login");
              }}
              className="
              mt-4 rounded-2xl
              bg-gradient-to-br from-indigo-600 to-blue-600
              px-5 py-3.5
              text-left text-sm font-semibold text-white
              shadow-lg shadow-indigo-200
              transition-transform active:scale-95
              "
            >
              LOGIN
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  setVisible(false);
                  navigate("/orders");
                }}
                className="
                mt-4 rounded-2xl
                bg-white
                px-5 py-3.5
                text-left text-sm font-semibold text-slate-700
                shadow-md
                transition-transform active:scale-95
                "
              >
                MY ORDERS
              </button>

              <button
                onClick={() => {
                  setVisible(false);
                  logout();
                }}
                className="
                mt-2 rounded-2xl
                bg-red-50
                px-5 py-3.5
                text-left text-sm font-semibold text-red-600
                transition-transform active:scale-95
                "
              >
                LOGOUT
              </button>
            </>
          )}
        </nav>
      </aside>

      {/* Local keyframes — no extra dependencies */}
      <style>{`
        @keyframes dropdownIn {
          from { opacity: 0; transform: scale(0.95) translateY(-6px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-dropdown-in { animation: dropdownIn 0.18s ease-out; }

        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(79,70,229,0.4); }
          50% { box-shadow: 0 0 0 5px rgba(79,70,229,0); }
        }
        .animate-badge-pulse { animation: badgePulse 2s infinite; }
      `}</style>
    </header>
  );
};

export default Navbar;