import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#FAFAFA] font-[Inter]">
      {/* ===== Diagonal black-to-royal-blue panel (right) ===== */}
      <div
        className="absolute inset-y-0 right-0 w-full lg:w-[62%]"
        style={{
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
          background:
            "linear-gradient(155deg, #0A0A0B 0%, #0A0A0B 45%, #16204F 72%, #3B5BFF 100%)",
        }}
      >
        {/* Ambient glow layers */}
        <div className="pointer-events-none absolute -top-32 right-[-6rem] h-[32rem] w-[32rem] rounded-full bg-[#3B5BFF]/40 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-[-8rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-[#3B5BFF]/25 blur-[100px]" />
        <div className="pointer-events-none absolute top-1/2 right-1/4 h-56 w-56 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

        {/* Faint grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "46px 46px",
          }}
        />

        {/* Floating premium shopping illustration */}
        <div className="absolute inset-0 hidden items-center justify-center lg:flex">
          <svg
            width="380"
            height="380"
            viewBox="0 0 380 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
          >
            {/* soft ring accents */}
            <circle cx="190" cy="190" r="150" stroke="#3B5BFF" strokeOpacity="0.18" strokeWidth="1" />
            <circle cx="190" cy="190" r="118" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1" />

            {/* premium shopping bag */}
            <g className="animate-[float_6s_ease-in-out_infinite]">
              <rect
                x="118"
                y="150"
                width="144"
                height="130"
                rx="14"
                fill="url(#bagGradient)"
                stroke="#3B5BFF"
                strokeOpacity="0.5"
                strokeWidth="1.2"
              />
              <path
                d="M148 150v-24a42 42 0 0 1 84 0v24"
                stroke="#3B5BFF"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="148" cy="176" r="4" fill="#3B5BFF" />
              <circle cx="232" cy="176" r="4" fill="#3B5BFF" />
              <path
                d="M138 210h104"
                stroke="#ffffff"
                strokeOpacity="0.18"
                strokeWidth="1"
              />
              <path
                d="M138 234h64"
                stroke="#ffffff"
                strokeOpacity="0.12"
                strokeWidth="1"
              />
            </g>

            {/* floating price tag */}
            <g
              className="animate-[float_7s_ease-in-out_infinite]"
              style={{ transformOrigin: "300px 120px" }}
            >
              <rect
                x="266"
                y="96"
                width="56"
                height="42"
                rx="10"
                fill="rgba(255,255,255,0.08)"
                stroke="#ffffff"
                strokeOpacity="0.25"
                strokeWidth="1"
              />
              <circle cx="282" cy="112" r="3.5" fill="#3B5BFF" />
              <path d="M296 108h16M296 118h10" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />
            </g>

            {/* floating box */}
            <g
              className="animate-[float_8s_ease-in-out_infinite]"
              style={{ transformOrigin: "90px 250px" }}
            >
              <rect
                x="64"
                y="228"
                width="48"
                height="44"
                rx="8"
                fill="rgba(59,91,255,0.12)"
                stroke="#3B5BFF"
                strokeOpacity="0.4"
                strokeWidth="1"
              />
              <path d="M64 246h48" stroke="#3B5BFF" strokeOpacity="0.4" strokeWidth="1" />
            </g>

            <defs>
              <linearGradient id="bagGradient" x1="118" y1="150" x2="262" y2="280" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" stopOpacity="0.1" />
                <stop offset="1" stopColor="#3B5BFF" stopOpacity="0.18" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Brand tagline on the panel */}
        <div className="absolute bottom-14 left-1/2 hidden w-[80%] -translate-x-1/2 text-center lg:block">
          <p className="font-[Sora] text-lg font-semibold tracking-wide text-white/90">
            Elevate every purchase.
          </p>
          <p className="mt-1 text-sm text-white/40">
            RA Collection — curated for the modern shopper.
          </p>
        </div>
      </div>

      {/* Subtle floating shapes on the light side too */}
      <div className="pointer-events-none absolute left-[-4rem] top-1/4 h-40 w-40 rounded-full bg-[#3B5BFF]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-3rem] left-10 h-32 w-32 rounded-full bg-[#0A0A0B]/5 blur-3xl" />

      {/* ===== Logo ===== */}
      <div className="absolute top-8 left-8 z-20 sm:top-10 sm:left-10 lg:left-16">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#0A0A0B]/15 bg-white/70 backdrop-blur">
          <span className="font-[Sora] text-sm font-semibold text-[#0A0A0B]">RA</span>
        </div>
      </div>

      {/* ===== Auth card (kept in place, glassmorphism) ===== */}
      <div className="relative z-10 flex min-h-screen w-full items-center px-6 sm:px-10 lg:px-16">
        <div className="w-full max-w-[420px]">
          <div
            className="rounded-3xl border border-white/60 px-7 py-10 shadow-[0_20px_40px_-10px_rgba(10,10,11,0.12),0_40px_80px_-20px_rgba(10,10,11,0.16)] transition-shadow duration-300 hover:shadow-[0_24px_48px_-10px_rgba(10,10,11,0.16),0_48px_96px_-20px_rgba(10,10,11,0.2)] sm:px-9"
            style={{
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(22px)",
              WebkitBackdropFilter: "blur(22px)",
            }}
          >
            <h1 className="mb-1 text-center font-[Sora] text-[28px] font-semibold text-[#0A0A0B]">
              {currentState === "Login" ? "Sign In" : "Sign Up"}
            </h1>
            <p className="mb-7 text-center text-[13px] text-[#6B6B70]">
              {currentState === "Login"
                ? "Welcome back to RA Collection"
                : "Create your RA Collection account"}
            </p>

            <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
              {currentState !== "Login" && (
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Full name"
                  required
                  className="w-full rounded-xl border border-[#E5E5EA] bg-white/70 px-4 py-3.5 text-sm text-[#0A0A0B] outline-none transition-all duration-200 placeholder:text-[#8A8A8E] focus:border-[#3B5BFF] focus:bg-white focus:ring-4 focus:ring-[#3B5BFF]/12"
                />
              )}

              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email address"
                required
                className="w-full rounded-xl border border-[#E5E5EA] bg-white/70 px-4 py-3.5 text-sm text-[#0A0A0B] outline-none transition-all duration-200 placeholder:text-[#8A8A8E] focus:border-[#3B5BFF] focus:bg-white focus:ring-4 focus:ring-[#3B5BFF]/12"
              />

              <div className="relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  className="w-full rounded-xl border border-[#E5E5EA] bg-white/70 px-4 py-3.5 pr-11 text-sm text-[#0A0A0B] outline-none transition-all duration-200 placeholder:text-[#8A8A8E] focus:border-[#3B5BFF] focus:bg-white focus:ring-4 focus:ring-[#3B5BFF]/12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8A8E] transition-colors hover:text-[#3B5BFF]"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <FiEyeOff className="h-4.5 w-4.5" />
                  ) : (
                    <FiEye className="h-4.5 w-4.5" />
                  )}
                </button>
              </div>

              <p className="-mt-1 cursor-pointer text-[12.5px] text-[#6B6B70] underline decoration-[#E5E5EA] underline-offset-2 transition-colors hover:text-[#3B5BFF]">
                Forgot password?
              </p>

              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-[#0A0A0B] py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B5BFF] hover:shadow-[0_10px_28px_-8px_rgba(59,91,255,0.55)] active:translate-y-0"
              >
                {currentState === "Login" ? "Login In" : "Sign Up"}
              </button>

              <p className="mt-1 text-center text-[12.5px] text-[#6B6B70]">
                {currentState === "Login" ? (
                  <>
                    Don't have an account?{" "}
                    <span
                      onClick={() => setCurrentState("Sign Up")}
                      className="cursor-pointer font-medium text-[#3B5BFF] underline underline-offset-2 hover:text-[#0A0A0B]"
                    >
                      Sign up
                    </span>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <span
                      onClick={() => setCurrentState("Login")}
                      className="cursor-pointer font-medium text-[#3B5BFF] underline underline-offset-2 hover:text-[#0A0A0B]"
                    >
                      Sign in
                    </span>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Floating animation keyframes (subtle, scoped) */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default Login;