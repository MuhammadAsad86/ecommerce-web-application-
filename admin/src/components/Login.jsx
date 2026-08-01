import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../App";

const Login = ({ setToken }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        backendUrl + "/api/user/admin",
        {
          email,
          password,
        }
      );

      if (response.data.success) {

        setToken(response.data.token);

      } else {

        toast.error(response.data.message);

      }

    } catch (error) {

      console.log(error);

      toast.error(
        error.response?.data?.message || error.message
      );

    }

  };

  return (

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-100 px-6">

      {/* Background */}

      <div className="absolute -left-28 -top-28 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]"></div>

      <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-[150px]"></div>

      {/* Login Card */}

      <div className="relative w-full max-w-md rounded-[32px] border border-slate-200 bg-white p-10 shadow-2xl">

        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">

          <span className="h-2 w-2 rounded-full bg-blue-600"></span>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">

            Secure Login

          </p>

        </div>

        <h1 className="mt-6 text-4xl font-bold text-slate-900">

          Admin Panel

        </h1>

        <p className="mt-3 text-slate-500">

          Sign in to manage products, orders and your store dashboard.

        </p>

        <form
          onSubmit={onSubmitHandler}
          className="mt-10 space-y-6"
        >
          {/* Email */}

<div>

  <label className="mb-2 block text-sm font-semibold text-slate-700">

    Email Address

  </label>

  <input
    type="email"
    placeholder="admin@example.com"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition-all duration-300 focus:border-blue-600 focus:bg-white"
  />

</div>

{/* Password */}

<div>

  <label className="mb-2 block text-sm font-semibold text-slate-700">

    Password

  </label>

  <input
    type="password"
    placeholder="Enter your password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition-all duration-300 focus:border-blue-600 focus:bg-white"
  />

</div>

{/* Login Button */}

<button
  type="submit"
  className="w-full rounded-2xl bg-slate-900 px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-600"
>

  Login To Dashboard

</button>
        <div className="pt-2 text-center">

          <p className="text-sm leading-6 text-slate-500">

            Authorized access only.

            <br />

            Please use your administrator credentials to continue.

          </p>

        </div>

      </form>

    </div>

  </section>

  );

};

export default Login;