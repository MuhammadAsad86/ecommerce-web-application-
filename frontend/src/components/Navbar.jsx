import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {

  const [visible, setVisible] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

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


  useEffect(() => {

    document.body.style.overflow = visible ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };

  }, [visible]);



  const navLinkClass = ({ isActive }) =>

    `
    px-4 py-2
    rounded-2xl

    text-[11px]
    font-semibold
    tracking-[0.15em]

    transition-all
    duration-300

    ${
      isActive

      ?

      "bg-blue-600 text-white shadow-[0_8px_18px_rgba(37,99,235,0.35)]"

      :

      "text-slate-600 hover:bg-white hover:shadow-md hover:-translate-y-0.5"

    }

    `;



  return (

    <header
      className="
      sticky top-0 z-50
      px-4 pt-4
      sm:px-8 md:px-12 lg:px-16
      "
    >


      <div
        className="
        h-[76px]

        flex items-center justify-between

        px-7

        rounded-[28px]


        bg-gradient-to-br
        from-white/95
        to-slate-100/80


        border border-white


        shadow-[8px_8px_25px_rgba(15,23,42,0.12),-8px_-8px_25px_rgba(255,255,255,0.95)]


        backdrop-blur-xl

        transition-all duration-300

        hover:shadow-[12px_12px_30px_rgba(15,23,42,0.15),-10px_-10px_25px_rgba(255,255,255,1)]
        "
      >


        {/* Logo */}

        <Link
          to="/"
          className="
          transition-transform
          duration-300
          hover:scale-105
          "
        >

          <img
            src={assets.logo}
            alt="RA Collection"

            className="
            w-28
            sm:w-32

            drop-shadow-[0_8px_12px_rgba(0,0,0,0.15)]
            "
          />

        </Link>




        {/* Desktop Menu */}

        <nav
          className="
          hidden lg:flex

          items-center

          gap-2

          p-1.5

          rounded-2xl

          bg-white/40

          shadow-inner

          "
        >


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


        </nav>
                {/* Right Side Icons */}

        <div
          className="
          flex
          items-center
          gap-3
          "
        >



          {/* Search */}

          <button
            onClick={() => setShowSearch(true)}

            className="
            flex
            h-10
            w-10

            items-center
            justify-center

            rounded-full


            bg-gradient-to-br
            from-white
            to-slate-100


            border
            border-white


            shadow-[5px_5px_12px_rgba(15,23,42,0.12),-5px_-5px_12px_white]


            transition-all
            duration-300


            hover:-translate-y-1

            hover:shadow-[8px_10px_18px_rgba(15,23,42,0.15)]
            "
          >

            <img
              src={assets.search_icon}
              alt="Search"
              className="h-[18px] w-[18px]"
            />

          </button>




          {/* Profile */}

          <div className="relative">


            <button

              onClick={() => {

                if (!token) {

                  navigate("/login");

                } else {

                  setProfileOpen(!profileOpen);

                }

              }}


              className="
              flex
              h-10
              w-10

              items-center
              justify-center


              rounded-full


              bg-gradient-to-br
              from-white
              to-slate-100


              border
              border-white


              shadow-[5px_5px_12px_rgba(15,23,42,0.12),-5px_-5px_12px_white]


              transition-all
              duration-300


              hover:-translate-y-1
              "
            >

              <img
                src={assets.profile_icon}
                alt="Profile"
                className="h-[18px] w-[18px]"
              />

            </button>




            {/* Dropdown */}

            {token && profileOpen && (

              <div

                className="
                absolute
                right-0
                top-12

                w-44

                rounded-2xl


                bg-white/95


                border
                border-white


                p-2


                shadow-[8px_12px_25px_rgba(15,23,42,0.15)]


                backdrop-blur-xl
                "

              >


                <button

                  onClick={() => navigate("/orders")}

                  className="
                  w-full

                  rounded-xl

                  px-4
                  py-3

                  text-left

                  text-sm

                  text-slate-700

                  transition

                  hover:bg-slate-100
                  "

                >

                  My Orders

                </button>



                <button

                  onClick={logout}

                  className="
                  w-full

                  rounded-xl

                  px-4
                  py-3

                  text-left

                  text-sm

                  text-red-600

                  transition

                  hover:bg-red-50
                  "

                >

                  Logout

                </button>



              </div>

            )}


          </div>





          {/* Cart */}

          <Link

            to="/cart"

            className="
            relative

            flex
            h-10
            w-10

            items-center
            justify-center


            rounded-full


            bg-gradient-to-br
            from-white
            to-slate-100


            border
            border-white


            shadow-[5px_5px_12px_rgba(15,23,42,0.12),-5px_-5px_12px_white]


            transition-all
            duration-300


            hover:-translate-y-1
            "

          >


            <img

              src={assets.cart_icon}

              alt="Cart"

              className="h-[18px] w-[18px]"

            />



            {getCartCount() > 0 && (

              <span

                className="
                absolute

                -right-1
                -top-1


                flex

                h-5

                min-w-5


                items-center
                justify-center


                rounded-full


                bg-blue-600


                text-[10px]

                font-bold

                text-white


                shadow-lg
                "

              >

                {getCartCount()}

              </span>

            )}


          </Link>




          {/* Mobile Menu */}

          <button

            onClick={() => setVisible(true)}

            className="
            flex
            lg:hidden

            h-10
            w-10


            items-center
            justify-center


            rounded-full


            bg-gradient-to-br
            from-white
            to-slate-100


            border
            border-white


            shadow-[5px_5px_12px_rgba(15,23,42,0.12),-5px_-5px_12px_white]

            "

          >


            <img

              src={assets.menu_icon}

              alt="Menu"

              className="h-[18px] w-[18px]"

            />


          </button>



        </div>


      </div>
            {/* Overlay */}

      <div
        onClick={() => setVisible(false)}
        className={`
          fixed inset-0
          z-40

          bg-slate-900/30

          backdrop-blur-sm

          transition-all duration-300

          ${
            visible
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />



      {/* Mobile Sidebar */}

      <aside

        className={`
          fixed

          right-0

          top-0

          z-50


          h-screen

          w-80


          bg-gradient-to-br
          from-white
          to-slate-100


          border-l

          border-white


          shadow-2xl


          transition-transform

          duration-300


          ${
            visible
              ? "translate-x-0"
              : "translate-x-full"
          }

        `}

      >



        {/* Mobile Header */}

        <div

          className="
          flex

          items-center

          justify-between


          px-6

          py-5


          border-b

          border-slate-200/70

          "

        >


          <img

            src={assets.logo}

            alt="Logo"

            className="
            w-28

            drop-shadow-md
            "

          />



          <button

            onClick={() => setVisible(false)}

            className="
            flex

            h-9

            w-9


            items-center

            justify-center


            rounded-full


            bg-gradient-to-br

            from-white

            to-slate-100


            shadow-md

            "

          >

            <img

              src={assets.dropdown_icon}

              alt="Close"

              className="h-4 rotate-180"

            />


          </button>


        </div>




        {/* Mobile Navigation */}

        <nav

          className="
          flex

          flex-col

          gap-2


          p-6

          "

        >



          <NavLink

            to="/"

            onClick={() => setVisible(false)}

            className="
            rounded-2xl

            px-5

            py-3.5


            text-sm

            font-semibold

            text-slate-700


            transition-all


            hover:bg-white

            hover:shadow-md

            "

          >

            HOME

          </NavLink>




          <NavLink

            to="/collection"

            onClick={() => setVisible(false)}

            className="
            rounded-2xl

            px-5

            py-3.5


            text-sm

            font-semibold

            text-slate-700


            transition-all


            hover:bg-white

            hover:shadow-md

            "

          >

            COLLECTION

          </NavLink>




          <NavLink

            to="/about"

            onClick={() => setVisible(false)}

            className="
            rounded-2xl

            px-5

            py-3.5


            text-sm

            font-semibold

            text-slate-700


            transition-all


            hover:bg-white

            hover:shadow-md

            "

          >

            ABOUT

          </NavLink>




          <NavLink

            to="/contact"

            onClick={() => setVisible(false)}

            className="
            rounded-2xl

            px-5

            py-3.5


            text-sm

            font-semibold

            text-slate-700


            transition-all


            hover:bg-white

            hover:shadow-md

            "

          >

            CONTACT

          </NavLink>




          {!token ? (


            <button

              onClick={() => {

                setVisible(false);

                navigate("/login");

              }}

              className="
              mt-4


              rounded-2xl


              bg-blue-600


              px-5

              py-3.5


              text-left


              text-sm


              font-semibold


              text-white


              shadow-lg

              shadow-blue-200

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
                mt-4


                rounded-2xl


                bg-white


                px-5

                py-3.5


                text-left


                text-sm


                font-semibold


                text-slate-700


                shadow-md

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
                mt-2


                rounded-2xl


                bg-red-50


                px-5

                py-3.5


                text-left


                text-sm


                font-semibold


                text-red-600

                "

              >

                LOGOUT

              </button>


            </>


          )}



        </nav>


      </aside>


    </header>

  );

};


export default Navbar;