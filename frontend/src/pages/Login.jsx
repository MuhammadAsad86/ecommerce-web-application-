import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const location = useLocation();
  const redirectTo = location.state?.from?.pathname || "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          setToken(response.data.token);
          toast.success("Registration Successful");
          navigate(redirectTo, { replace: true });
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });

        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          setToken(response.data.token);
          toast.success("Login Successful");
          navigate(redirectTo, { replace: true });
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  // Redirect user back to the page they came from if already authenticated
  useEffect(() => {
    if (token) {
      navigate(redirectTo, { replace: true });
    }
  }, [token, navigate, redirectTo]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-950 px-4 py-10">

      {/* ---------------- Animated Mesh Gradient Background ---------------- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
        {/* subtle grid overlay for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      {/* ---------------- Glass Card ---------------- */}
      <div className="relative w-full max-w-md animate-fade-up">

        {/* gradient border glow */}
        <div className="absolute -inset-[1.5px] rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 opacity-60 blur-sm" />

        <div className="relative rounded-3xl bg-gray-900/70 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-indigo-900/40 px-8 py-10 sm:px-10 sm:py-12">

          {/* Logo / Brand mark */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-4">
              <span className="text-white font-semibold text-lg tracking-tight">RA</span>
            </div>

            {/* Tab Switch */}
            <div className="relative flex items-center gap-6">
              <button
                type="button"
                onClick={() => setCurrentState("Login")}
                className={`text-lg font-medium tracking-tight transition-colors duration-300 ${
                  currentState === "Login" ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Login
              </button>
              <span className="text-gray-700">/</span>
              <button
                type="button"
                onClick={() => setCurrentState("Sign Up")}
                className={`text-lg font-medium tracking-tight transition-colors duration-300 ${
                  currentState === "Sign Up" ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* animated underline indicator */}
            <div className="relative w-24 h-[2px] mt-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className={`absolute top-0 h-full w-1/2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full transition-transform duration-300 ease-out ${
                  currentState === "Login" ? "translate-x-0" : "translate-x-full"
                }`}
              />
            </div>
          </div>

          {/* ---------------- Form ---------------- */}
          <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">

            {currentState === "Sign Up" && (
              <div>
                <label className="mb-1.5 block text-xs font-medium text-gray-400">
                  Full Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-indigo-400/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
            )}

            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-400">
                Email Address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-indigo-400/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {/* Password field with show/hide toggle */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-400">
                Password
              </label>
              <div className="relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter your password"
                  className="w-full rounded-xl bg-white/5 border border-white/10 pl-4 pr-11 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-indigo-400/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-indigo-500/20"
                />

                {/* Show/Hide password toggle */}
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-300 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    // Eye-off icon
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                      <line x1="2" y1="2" x2="22" y2="22" />
                    </svg>
                  ) : (
                    // Eye icon
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400 -mt-1">
              <p className="cursor-pointer hover:text-indigo-300 transition-colors">
                Forgot your password?
              </p>
              {currentState === "Login" ? (
                <p
                  onClick={() => setCurrentState("Sign Up")}
                  className="cursor-pointer hover:text-indigo-300 transition-colors"
                >
                  Create Account
                </p>
              ) : (
                <p
                  onClick={() => setCurrentState("Login")}
                  className="cursor-pointer hover:text-indigo-300 transition-colors"
                >
                  Login Here
                </p>
              )}
            </div>

            {/* Premium submit button with glow + loading state */}
            <button
              type="submit"
              disabled={loading}
              className="group relative mt-4 w-full overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Please wait...
                  </>
                ) : currentState === "Login" ? (
                  "Sign In"
                ) : (
                  "Sign Up"
                )}
              </span>
              {/* subtle shine sweep on hover */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>
          </form>
        </div>
      </div>

      {/* ---------------- Local keyframes (no extra deps) ---------------- */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 10s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.6s ease-out; }
      `}</style>
    </div>
  );
};

export default Login;