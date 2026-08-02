import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";

import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "$";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") || ""
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer />

      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />

          <div className="flex w-full">
            <Sidebar />

            <main className="flex-1 p-8">
              <Routes>

                {/* Default Route */}
                <Route
                  path="/"
                  element={<Navigate to="/add" replace />}
                />

                {/* Add Product */}
                <Route
                  path="/add"
                  element={<Add token={token} />}
                />

                {/* Product List */}
                <Route
                  path="/list"
                  element={<List token={token} />}
                />

                {/* Orders */}
                <Route
                  path="/orders"
                  element={<Orders token={token} />}
                />

                {/* Invalid Route */}
                <Route
                  path="*"
                  element={<Navigate to="/add" replace />}
                />

              </Routes>
            </main>

          </div>
        </>
      )}
    </div>
  );
};

export default App;