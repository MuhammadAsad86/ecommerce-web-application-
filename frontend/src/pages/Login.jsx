import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {

  const [currentState, setCurrentState] = useState("Login");

  const {
    token,
    setToken,
    navigate,
    backendUrl,
  } = useContext(ShopContext);

  const location = useLocation();

  const redirectTo =
    location.state?.from?.pathname || "/";

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = async (event) => {

    event.preventDefault();

    try {

      if (currentState === "Sign Up") {

        const response = await axios.post(
          backendUrl + "/api/user/register",
          {
            name,
            email,
            password,
          }
        );

        if (response.data.success) {

          setToken(response.data.token);

          localStorage.setItem(
            "token",
            response.data.token
          );

        } else {

          toast.error(response.data.message);

        }

      } else {

        const response = await axios.post(
          backendUrl + "/api/user/login",
          {
            email,
            password,
          }
        );

        if (response.data.success) {

          setToken(response.data.token);

          localStorage.setItem(
            "token",
            response.data.token
          );

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

      navigate(
        redirectTo,
        {
          replace: true,
        }
      );

    }

  }, [token, redirectTo]);

  useEffect(() => {

    if (token && localStorage.getItem("token")) {

      setToken(
        localStorage.getItem("token")
      );

    }

  }, []);

  return (

        <div className="relative min-h-screen w-full overflow-hidden bg-[#FAFAFA] font-[Inter]">

      {/* ===== Right Premium Background ===== */}

      <div
        className="absolute inset-y-0 right-0 w-full lg:w-[62%]"
        style={{
          clipPath: "polygon(30% 0,100% 0,100% 100%,0% 100%)",
          background:
            "linear-gradient(155deg,#0A0A0B 0%,#0A0A0B 45%,#16204F 72%,#3B5BFF 100%)",
        }}
      >

        <div className="pointer-events-none absolute -top-32 right-[-6rem] h-[32rem] w-[32rem] rounded-full bg-[#3B5BFF]/40 blur-[110px]" />

        <div className="pointer-events-none absolute bottom-[-8rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-[#3B5BFF]/25 blur-[100px]" />

        <div className="pointer-events-none absolute top-1/2 right-1/4 h-56 w-56 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "46px 46px",
          }}
        />

        <div className="absolute bottom-14 left-1/2 hidden w-[80%] -translate-x-1/2 text-center lg:block">

          <p className="font-[Sora] text-lg font-semibold tracking-wide text-white/90">

            Elevate every purchase.

          </p>

          <p className="mt-1 text-sm text-white/40">

            RA Collection — curated for the modern shopper.

          </p>

        </div>

      </div>

      <div className="pointer-events-none absolute left-[-4rem] top-1/4 h-40 w-40 rounded-full bg-[#3B5BFF]/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-3rem] left-10 h-32 w-32 rounded-full bg-[#0A0A0B]/5 blur-3xl" />

      {/* Logo */}

      <div className="absolute left-8 top-8 z-20 sm:left-10 sm:top-10 lg:left-16">

        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#0A0A0B]/15 bg-white/70 backdrop-blur">

          <span className="font-[Sora] text-sm font-semibold text-[#0A0A0B]">

            RA

          </span>

        </div>

      </div>

      {/* Login Card */}

      <div className="relative z-10 flex min-h-screen w-full items-center px-6 sm:px-10 lg:px-16">

        <div className="w-full max-w-[420px]">

          <div
            className="rounded-3xl border border-white/60 px-7 py-10 shadow-[0_20px_40px_-10px_rgba(10,10,11,0.12),0_40px_80px_-20px_rgba(10,10,11,0.16)] sm:px-9"
            style={{
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(22px)",
              WebkitBackdropFilter: "blur(22px)",
            }}
          >

            <h1 className="mb-1 text-center font-[Sora] text-[28px] font-semibold text-[#0A0A0B]">

              {currentState === "Login"
                ? "Sign In"
                : "Sign Up"}

            </h1>

            <p className="mb-7 text-center text-[13px] text-[#6B6B70]">

              {currentState === "Login"
                ? "Welcome back to RA Collection"
                : "Create your RA Collection account"}

            </p>

            <form
              onSubmit={onSubmitHandler}
              className="flex flex-col gap-4"
            >

              {currentState !== "Login" && (

                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder="Full name"
                  className="w-full rounded-xl border border-[#E5E5EA] bg-white/70 px-4 py-3.5 text-sm outline-none focus:border-[#3B5BFF] focus:ring-4 focus:ring-[#3B5BFF]/10"
                />

              )}

              <input
                type="email"
                required
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="Email address"
                className="w-full rounded-xl border border-[#E5E5EA] bg-white/70 px-4 py-3.5 text-sm outline-none focus:border-[#3B5BFF] focus:ring-4 focus:ring-[#3B5BFF]/10"
              />

              <div className="relative">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  required
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Password"
                  className="w-full rounded-xl border border-[#E5E5EA] bg-white/70 px-4 py-3.5 pr-11 text-sm outline-none focus:border-[#3B5BFF] focus:ring-4 focus:ring-[#3B5BFF]/10"
                />

                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8A8E]"
                >

                  {showPassword ? (
                    <FiEyeOff />
                  ) : (
                    <FiEye />
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

                {currentState === "Login"
                  ? "Login In"
                  : "Sign Up"}

              </button>

              <p className="mt-1 text-center text-[12.5px] text-[#6B6B70]">

                {currentState === "Login" ? (

                  <>

                    Don't have an account?{" "}

                    <span
                      onClick={() =>
                        setCurrentState("Sign Up")
                      }
                      className="cursor-pointer font-medium text-[#3B5BFF] underline underline-offset-2 hover:text-[#0A0A0B]"
                    >

                      Sign up

                    </span>

                  </>

                ) : (

                  <>

                    Already have an account?{" "}

                    <span
                      onClick={() =>
                        setCurrentState("Login")
                      }
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

      <style>

        {`

          @keyframes float {

            0%,100% {

              transform: translateY(0px);

            }

            50% {

              transform: translateY(-10px);

            }

          }

        `}

      </style>

    </div>

  );

};

export default Login;