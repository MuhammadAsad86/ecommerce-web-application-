<<<<<<< HEAD
import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
=======
import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = "$";
  const delivery_fee = 10;
<<<<<<< HEAD

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {

    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {

      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }

    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) { }
      }
    }

    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {

    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);

  }
  const getCartAmount = () => {

    let totalAmount = 0;

    for (const items in cartItems) {

      let itemInfo = products.find((product) => product._id === items);

      for (const item in cartItems[items]) {

        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {

        }

      }

    }

    return totalAmount;

  };
=======
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
<<<<<<< HEAD
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
  }


=======
    setShowSearch
  };
>>>>>>> 7b41c0a5e63a9049f7da6ae3a73968f6d1b12b54

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;