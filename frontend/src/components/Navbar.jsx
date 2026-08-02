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

  // Optimized scroll listener to prevent unnecessary re-renders
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `
    relative px-5 py-2.5
    rounded-full
    text-[12px]
    font-semibold
    tracking-[0.12em]
    transition-all
    duration-300
    ease-out
    ${
      isActive
        ? "text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 shadow-[0_4px_16px_rgba(99,102,241,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] scale-[1.04]"
        : "text-slate-600 hover:text-indigo-700 hover:-translate-y-[1px] hover:[text-shadow:0_0_12px_rgba(99,102,241,0.35)]"
    }
    `;

  const mobileLinkClass = ({ isActive }) =>
    `
    rounded-2xl px-5 py-3.5 text-sm font-semibold transition-all duration-300
    ${
      isActive
        ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 text-white shadow-[0_10px_30px_rgba(99,102,241,0.35)]"
        : "text-slate-700 bg-white/60 hover:bg-white hover:shadow-md"
    }
    `;

  return (
    <>
      {/*
        FLOATING 3D GLASS NAVBAR
        - Detached from the very top edge (floats with margin)
        - True glassmorphism: blur + transparency + soft light reflection
        - Neumorphic dual shadow (outer drop + inner highlight) for real depth
        - Shrinks and intensifies blur/shadow on scroll
      */}
      <header
        className={`
          fixed left-0 right-0 z-50
          w-full
          flex justify-center
          transition-all duration-500 ease-out
          px-4 sm:px-8 md:px-12 lg:px-16
          ${scrolled ? "top-2.5" : "top-5"}
        `}
      >
        <div
          className={`
            relative w-full max-w-7xl
            flex items-center justify-between
            transition-all duration-500 ease-out
            rounded-full
            border border-white/60
            bg-white/50
            backdrop-blur-2xl
            ${
              scrolled
                ? "h-[62px] px-5 sm:px-6 shadow-[0_10px_40px_rgba(79,70,229,0.18),0_2px_8px_rgba(15,23,42,0.08),inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(148,163,184,0.15)]"
                : "h-[72px] px-6 sm:px-8 shadow-[0_18px_50px_rgba(79,70,229,0.14),0_4px_14px_rgba(15,23,42,0.06),inset_0_1px_1px_rgba(255,255,255,0.95),inset_0_-1px_2px_rgba(148,163,184,0.12)]"
            }
          `}
        >
          {/* top light reflection sheen */}
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
          {/* subtle inner glow wash */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/40 via-transparent to-indigo-50/20" />

          {/* Logo */}
          <Link
            to="/"
            className="group relative z-10 flex items-center transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <div className="relative">
              {/* glow behind logo */}
              <span className="absolute inset-0 -z-10 rounded-full bg-indigo-400/30 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <img
                src={assets.logo}
                alt="RA Collection"
                className={`
                  drop-shadow-[0_4px_10px_rgba(79,70,229,0.15)]
                  transition-all duration-500 ease-out
                  ${scrolled ? "w-24 sm:w-28" : "w-28 sm:w-32"}
                `}
              />
            </div>
            {/* animated gradient underline on hover */}
            <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 shadow-[0_0_8px_rgba(99,102,241,0.6)] transition-all duration-300 ease-out group-hover:w-full rounded-full" />
          </Link>

          {/* Desktop Menu — floating glass pill capsule */}
          <nav
            className="
              hidden lg:flex items-center gap-1
              p-1.5 rounded-full
              bg-white/50 backdrop-blur-xl
              border border-white/70
              shadow-[inset_0_2px_4px_rgba(148,163,184,0.18),inset_0_-1px_2px_rgba(255,255,255,0.9),0_4px_14px_rgba(79,70,229,0.06)]
            "
          >
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
          <div className="relative z-10 flex items-center gap-2.5 sm:gap-3">
            {/* Search Button — floating glass 3D orb */}
            <button
              onClick={() => setShowSearch(true)}
              aria-label="Search"
              className="
                group relative flex h-10 w-10 items-center justify-center rounded-full
                bg-gradient-to-b from-white to-slate-50/80
                backdrop-blur-md
                border border-white/80
                shadow-[0_4px_10px_rgba(79,70,229,0.12),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_3px_rgba(148,163,184,0.2)]
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_22px_rgba(79,70,229,0.28),inset_0_1px_1px_rgba(255,255,255,1)]
                hover:rotate-6
                active:scale-95
              "
            >
              <span className="absolute inset-0 rounded-full bg-indigo-400/0 blur-md transition-all duration-300 group-hover:bg-indigo-400/25" />
              <img
                src={assets.search_icon}
                alt="Search"
                className="relative h-[17px] w-[17px] opacity-75 transition-opacity duration-300 group-hover:opacity-100"
              />
            </button>

            {/* Profile Dropdown Trigger */}
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
                  group relative flex h-10 w-10 items-center justify-center rounded-full
                  bg-gradient-to-b from-white to-slate-50/80
                  backdrop-blur-md
                  border border-white/80
                  shadow-[0_4px_10px_rgba(79,70,229,0.12),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_3px_rgba(148,163,184,0.2)]
                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_22px_rgba(79,70,229,0.28),inset_0_1px_1px_rgba(255,255,255,1)]
                  active:scale-95
                "
              >
                <span className="absolute inset-0 rounded-full bg-violet-400/0 blur-md transition-all duration-300 group-hover:bg-violet-400/25" />
                <img
                  src={assets.profile_icon}
                  alt="Profile"
                  className="relative h-[17px] w-[17px] opacity-75 transition-opacity duration-300 group-hover:opacity-100"
                />
              </button>

              {/* Dropdown Menu — luxury glass panel */}
              {token && profileOpen && (
                <div
                  className="
                    absolute right-0 top-[52px] w-52
                    origin-top-right
                    rounded-[24px]
                    bg-white/80
                    border border-white/80
                    p-2.5
                    shadow-[0_20px_50px_rgba(79,70,229,0.22),0_4px_14px_rgba(15,23,42,0.08),inset_0_1px_1px_rgba(255,255,255,1)]
                    backdrop-blur-2xl
                    animate-dropdown-in
                    z-50
                  "
                >
                  <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      navigate("/orders");
                    }}
                    className="
                      flex w-full items-center gap-2.5 rounded-2xl px-4 py-3
                      text-left text-sm font-medium text-slate-700
                      transition-all duration-200
                      hover:bg-white hover:text-indigo-600 hover:shadow-sm hover:translate-x-0.5
                    "
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 text-xs">
                      📦
                    </span>
                    My Orders
                  </button>

                  <button
                    onClick={logout}
                    className="
                      mt-1 flex w-full items-center gap-2.5 rounded-2xl px-4 py-3
                      text-left text-sm font-medium text-red-600
                      transition-all duration-200
                      hover:bg-red-50 hover:shadow-sm hover:translate-x-0.5
                    "
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-xs">
                      🚪
                    </span>
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Cart Link — 3D glass orb with glowing gradient badge */}
            <Link
              to="/cart"
              aria-label="Cart"
              className="
                group relative flex h-10 w-10 items-center justify-center rounded-full
                bg-gradient-to-b from-white to-slate-50/80
                backdrop-blur-md
                border border-white/80
                shadow-[0_4px_10px_rgba(79,70,229,0.12),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_3px_rgba(148,163,184,0.2)]
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_22px_rgba(79,70,229,0.28),inset_0_1px_1px_rgba(255,255,255,1)]
                hover:-rotate-6
                active:scale-95
              "
            >
              <span className="absolute inset-0 rounded-full bg-blue-400/0 blur-md transition-all duration-300 group-hover:bg-blue-400/25" />
              <img
                src={assets.cart_icon}
                alt="Cart"
                className="relative h-[17px] w-[17px] opacity-75 transition-opacity duration-300 group-hover:opacity-100"
              />

              {getCartCount() > 0 && (
                <span
                  className="
                    absolute -right-1.5 -top-1.5
                    flex h-5 min-w-5
                    items-center justify-center px-1
                    rounded-full
                    bg-gradient-to-br from-indigo-500 via-violet-500 to-blue-600
                    text-[10px] font-bold text-white
                    shadow-[0_2px_8px_rgba(99,102,241,0.6),inset_0_1px_1px_rgba(255,255,255,0.4)]
                    animate-badge-pulse
                    ring-2 ring-white/90
                  "
                >
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setVisible(true)}
              aria-label="Open menu"
              className="
                flex lg:hidden h-10 w-10
                items-center justify-center
                rounded-full
                bg-gradient-to-b from-white to-slate-50/80
                backdrop-blur-md
                border border-white/80
                shadow-[0_4px_10px_rgba(79,70,229,0.12),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_3px_rgba(148,163,184,0.2)]
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:scale-105
                active:scale-95
              "
            >
              <img src={assets.menu_icon} alt="Menu" className="h-[17px] w-[17px] opacity-75" />
            </button>
          </div>
        </div>

        {/* Overlay Backdrop for Mobile Menu */}
        <div
          onClick={() => setVisible(false)}
          className={`
            fixed inset-0 z-40
            bg-slate-950/30
            backdrop-blur-md
            transition-all duration-300 ease-in-out
            ${visible ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"}
          `}
        />

        {/* Mobile Sidebar — floating glass panel */}
        <aside
          className={`
            fixed right-3 top-3 bottom-3 z-50
            w-[85%] max-w-80
            rounded-[32px]
            bg-white/80 backdrop-blur-2xl
            border border-white/70
            shadow-[0_25px_60px_rgba(79,70,229,0.25),inset_0_1px_1px_rgba(255,255,255,1)]
            transition-all duration-500 ease-out
            overflow-hidden
            ${visible ? "translate-x-0 opacity-100" : "translate-x-[110%] opacity-0"}
          `}
        >
          {/* light sheen */}
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

          {/* Mobile Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/70">
            <img src={assets.logo} alt="Logo" className="w-28 drop-shadow-sm" />

            <button
              onClick={() => setVisible(false)}
              aria-label="Close menu"
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                bg-white
                shadow-[0_4px_10px_rgba(79,70,229,0.15),inset_0_1px_1px_rgba(255,255,255,1)]
                transition-transform duration-300 ease-out
                hover:rotate-90 hover:scale-105
                active:scale-95
              "
            >
              <img src={assets.dropdown_icon} alt="Close" className="h-4 rotate-180 opacity-70" />
            </button>
          </div>

          {/* Mobile Navigation Links — floating cards */}
          <nav className="flex flex-col gap-2.5 p-6">
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
                  bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600
                  px-5 py-3.5
                  text-left text-sm font-semibold text-white
                  shadow-[0_10px_28px_rgba(99,102,241,0.4),inset_0_1px_1px_rgba(255,255,255,0.3)]
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
                    bg-white/70
                    px-5 py-3.5
                    text-left text-sm font-semibold text-slate-700
                    shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_8px_rgba(79,70,229,0.08)]
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
                    bg-red-50/80
                    px-5 py-3.5
                    text-left text-sm font-semibold text-red-600
                    shadow-[inset_0_1px_1px_rgba(255,255,255,1)]
                    transition-transform active:scale-95
                  "
                >
                  LOGOUT
                </button>
              </>
            )}
          </nav>
        </aside>

        {/* Local Keyframe Animations */}
        <style>{`
          @keyframes dropdownIn {
            from { opacity: 0; transform: scale(0.94) translateY(-10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
          .animate-dropdown-in { animation: dropdownIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

          @keyframes badgePulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.5), 0 2px 8px rgba(99,102,241,0.6); }
            50% { box-shadow: 0 0 0 7px rgba(99,102,241,0), 0 2px 8px rgba(99,102,241,0.6); }
          }
          .animate-badge-pulse { animation: badgePulse 2.2s infinite; }
        `}</style>
      </header>

      {/*
        Top spacing spacer element:
        Prevents page content from hiding behind the fixed floating navbar
        across mobile, tablet, and desktop breakpoints.
      */}
      <div className="h-[104px] sm:h-[112px] w-full aria-hidden:true" />
    </>
  );
};

export default Navbar;