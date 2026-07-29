<<<<<<< HEAD
import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const onSubmitHandler =async (event)=>{
    event.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className="surface-panel flex flex-col items-center w-[90%] sm:max-w-[440px] m-auto mt-20 mb-20 px-7 py-10 sm:px-10 gap-4 text-primary">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-primary" />
      </div>

      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          className="field-control w-full"
          placeholder="Name"
          required
        />
      )}

      <input
        type="email"
        className="field-control w-full"
        placeholder="Email"
        required
      />

      <input
        type="password"
        className="field-control w-full"
        placeholder="Password"
        required
      />


      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer hover:text-primary">Forgot Password?</p>
        {
          currentState === "Login" ? (
            <p
              className="cursor-pointer hover:text-primary"
              onClick={() => setCurrentState("Sign Up")}
            >
              Create Account
            </p>
          ) : (
            <p
              className="cursor-pointer hover:text-primary"
              onClick={() => setCurrentState("Login")}
            >
              Login
            </p>
          )
        }
      </div>
      <button className="premium-button w-full bg-primary text-white px-8 py-4 mt-4 text-xs shadow-button">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
=======
import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54
