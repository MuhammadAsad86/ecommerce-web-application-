import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {

  return (

    <footer className="mt-32">

      <div className="overflow-hidden rounded-[36px] bg-slate-900 px-8 py-14 text-white shadow-2xl lg:px-14">

        <div className="grid gap-12 lg:grid-cols-[2.3fr_1fr_1fr]">

          {/* Brand */}

          <div>

            <img
              src={assets.logo}
              alt="RA Collection"
              className="mb-6 w-36 brightness-0 invert"
            />

            <p className="max-w-xl leading-8 text-slate-300">

              RA Collection offers premium fashion designed for modern lifestyles.
              We combine quality, comfort and timeless style to create an enjoyable
              shopping experience for every customer.

            </p>

            <div className="mt-8 flex gap-3">

              <span className="rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold tracking-[0.18em]">

                PREMIUM

              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.18em]">

                SINCE 2026

              </span>

            </div>

          </div>

          <div>

            <h3 className="mb-6 text-xl font-bold">

              Company

            </h3>

            <ul className="space-y-4 text-slate-300">

              <li>

                <Link
                  to="/"
                  className="transition duration-300 hover:text-white"
                >
                  Home
                </Link>

              </li>

              <li>

                <Link
                  to="/collection"
                  className="transition duration-300 hover:text-white"
                >
                  Collection
                </Link>

              </li>

              <li>

                <Link
                  to="/about"
                  className="transition duration-300 hover:text-white"
                >
                  About Us
                </Link>

              </li>

              <li>

                <Link
                  to="/contact"
                  className="transition duration-300 hover:text-white"
                >
                  Contact Us
                </Link>

              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-bold">

              Get In Touch

            </h3>

            <ul className="space-y-4 text-slate-300">

              <li>

                📧 support@racollection.com

              </li>

              <li>

                📞 +92 300 1234567

              </li>

              <li>

                🕘 Mon to Sat, 9:00 AM to 8:00 PM

              </li>

              <li>

                📍 Multan, Pakistan

              </li>

            </ul>

          </div>

        </div>

        <div className="mt-14 border-t border-slate-700 pt-8">

          <div className="flex flex-col items-center justify-between gap-5 text-sm text-slate-400 md:flex-row">

            <p>

              © 2026 RA Collection. All Rights Reserved.

            </p>

            <div className="flex items-center gap-6">

              <a
                href="#"
                className="transition duration-300 hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="transition duration-300 hover:text-white"
              >
                Terms & Conditions
              </a>

              <a
                href="#"
                className="transition duration-300 hover:text-white"
              >
                Support
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>

  );

};

export default Footer;

