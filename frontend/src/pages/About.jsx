import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetter from "../components/NewsLetter";

const About = () => {
  return (
    <section className="space-y-20 pb-10">
      {/* Hero Section */}
      <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-slate-900 via-slate-800 to-blue-700 px-8 py-16 text-white shadow-2xl lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
              Welcome To RA Collection
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight lg:text-6xl">
              Premium Fashion For Every Occasion
            </h1>

            <p className="mt-6 max-w-xl leading-8 text-slate-200">
              At RA Collection, we believe fashion is more than clothing. It
              reflects confidence, personality and lifestyle. Our goal is to
              provide premium quality products with modern designs at
              affordable prices.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="rounded-2xl bg-white/10 px-6 py-4">
                <h3 className="text-3xl font-bold">10K+</h3>
                <p className="mt-2 text-sm text-slate-200">Happy Customers</p>
              </div>

              <div className="rounded-2xl bg-white/10 px-6 py-4">
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="mt-2 text-sm text-slate-200">
                  Premium Products
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 px-6 py-4">
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="mt-2 text-sm text-slate-200">
                  Customer Support
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={assets.about_img}
              alt="About"
              className="w-full max-w-lg rounded-[32px] object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <img
            src={assets.about_img}
            alt="Company Story"
            className="rounded-[32px] shadow-xl"
          />
        </div>

        <div className="space-y-6">
          <div>
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              Our Story
            </span>

            <div className="mt-5">
              <Title text1={"ABOUT"} text2={"US"} />
            </div>
          </div>

          <p className="leading-8 text-slate-600">
            RA Collection was founded with a simple vision to make premium
            fashion accessible to everyone. From carefully selected clothing to
            stylish accessories, every product is chosen with quality, comfort
            and modern design in mind.
          </p>

          <p className="leading-8 text-slate-600">
            We continue to grow by focusing on customer satisfaction, reliable
            service and products that deliver lasting value. Every order
            represents our commitment to excellence and building long term
            relationships with our customers.
          </p>

          <div className="rounded-[28px] bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our mission is to deliver premium quality fashion with an enjoyable
              online shopping experience. We strive to combine style,
              affordability and outstanding customer service so every customer
              shops with complete confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div>
        <div className="mb-12 text-center">
          <Title text1={"WHY"} text2={"CHOOSE US"} />

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-500">
            We focus on delivering quality products, fast service and a shopping
            experience customers can trust.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
              <span className="text-3xl">⭐</span>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Premium Quality
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Every product is carefully selected and inspected to ensure
              exceptional quality, comfort and long lasting performance.
            </p>
          </div>

          <div className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
              <span className="text-3xl">🚚</span>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Fast Delivery
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              We deliver your favorite products quickly with secure packaging and
              reliable nationwide shipping.
            </p>
          </div>

          <div className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
              <span className="text-3xl">💙</span>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Customer First
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Customer satisfaction is our highest priority. Our support team
              is always ready to help before and after every purchase.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="rounded-[36px] bg-gradient-to-r from-blue-600 to-slate-900 px-8 py-14 text-white shadow-2xl">
        <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-5xl font-bold">10K+</h2>

            <p className="mt-3 uppercase tracking-[0.18em] text-blue-100">
              Happy Customers
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">500+</h2>

            <p className="mt-3 uppercase tracking-[0.18em] text-blue-100">
              Products
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">99%</h2>

            <p className="mt-3 uppercase tracking-[0.18em] text-blue-100">
              Satisfaction
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">24/7</h2>

            <p className="mt-3 uppercase tracking-[0.18em] text-blue-100">
              Support
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div>
        <NewsLetter />
      </div>
    </section>
  );
};

export default About;