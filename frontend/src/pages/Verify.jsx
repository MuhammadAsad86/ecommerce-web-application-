import React, { useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Verify = () => {
  const {
    navigate,
    token,
    setCartItems,
    backendUrl,
  } = useContext(ShopContext);

  const [searchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        `${backendUrl}/api/order/verify-stripe`,
        {
          success,
          orderId,
        },
        {
          headers: { token },
        }
      );

      if (response.data.success) {
        setCartItems({});
        navigate("/orders");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };P

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return 
  
  <div></div>;
};

export default Verify;