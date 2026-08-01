import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import Newsletter from "../components/NewsLetter";

const Contact = () => {
  return (
    <section className="space-y-20 pb-10">
      {/* Hero Section */}
      <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-slate-900 via-slate-800 to-blue-700 px-8 py-16 text-white shadow-2xl lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
              Contact RA Collection
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight lg:text-6xl">
              We'd Love To Hear From You
            </h1>

            <p className="mt-6 max-w-xl leading-8 text-slate-200">
              Have questions about our products, orders or services? Our team is
              always ready to help you with quick and friendly support.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="rounded-2xl bg-white/10 px-6 py-4">
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="mt-2 text-sm text-slate-200">Customer Support</p>
              </div>

              <div className="rounded-2xl bg-white/10 px-6 py-4">
                <h3 className="text-3xl font-bold">Fast</h3>
                <p className="mt-2 text-sm text-slate-200">Response Time</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={assets.contact_img}
              alt="Contact"
              className="w-full max-w-lg rounded-[32px] object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <img
            src={assets.contact_img}
            alt="Office"
            className="rounded-[32px] shadow-xl"
          />
        </div>

        <div className="space-y-6">
          <div>
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              Get In Touch
            </span>

            <div className="mt-5">
              <Title text1={"CONTACT"} text2={"US"} />
            </div>
          </div>

          <p className="leading-8 text-slate-600">
            We're always happy to answer your questions and assist you with
            orders, shipping, returns or product information. Feel free to
            reach out anytime.
          </p>

          <div className="space-y-5">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">📍 Address</h3>
              <p className="mt-2 text-slate-600">
                54709 Willms Station <br />
                Suite 350, Washington, USA
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">📞 Phone</h3>
              <p className="mt-2 text-slate-600">(415) 555-0132</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">📧 Email</h3>
              <p className="mt-2 text-slate-600">admin@racollection.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
            📦
          </div>
          <h3 className="mt-6 text-2xl font-bold text-slate-900">
            Order Support
          </h3>
          <p className="mt-4 leading-8 text-slate-600">
            Need help tracking your order or facing a delivery issue? Our support
            team is always available to assist you.
          </p>
        </div>

        <div className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
            💬
          </div>
          <h3 className="mt-6 text-2xl font-bold text-slate-900">
            Live Assistance
          </h3>
          <p className="mt-4 leading-8 text-slate-600">
            Contact our customer care team for quick answers and personalized
            shopping support.
          </p>
        </div>

        <div className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
            🤝
          </div>
          <h3 className="mt-6 text-2xl font-bold text-slate-900">
            Business Inquiry
          </h3>
          <p className="mt-4 leading-8 text-slate-600">
            Looking for partnerships or wholesale opportunities? We'd love to
            hear from you.
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 shadow-lg">
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-5">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Visit Our Store
            </h2>
            <p className="mt-2 text-slate-500">
              Find us using the location below.
            </p>
          </div>
        </div>

        <iframe
          title="Store Location"
          src="https://www.google.com/maps?q=Washington&output=embed"
          className="h-[420px] w-full border-0"
          loading="lazy"
        />
      </div>

      {/* Newsletter */}
      <div>
        <Newsletter />
      </div>
    </section>
  );
};

export default Contact;