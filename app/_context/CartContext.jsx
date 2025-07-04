"use client";
const { createContext, useContext, useReducer, useState } = require("react");

const iniatilState = [];

const CartContext = createContext();

function addProductToCart(state, action) {
  switch (action.type) {
    case "addProduct":
      return [...state, action.payload];
    case "removeProduct":
      return [...state.filter((product) => product.id !== action.payload)];
    case "checkedout":
      return iniatilState;
    default:
      throw new Error("method not found");
  }
}

function CartContextProvider({ children }) {
  const [items, dispatch] = useReducer(addProductToCart, iniatilState);
  const getTotalPrice = items?.map((el) => el.price);
  const totalPrice = getTotalPrice.reduce((acc, cur) => acc + cur, 0);
  const [isCheckout, setIsCheckout] = useState(false);

  return (
    <CartContext.Provider
      value={{ items, totalPrice, isCheckout, setIsCheckout, dispatch }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCartContext() {
  const uesCart = useContext(CartContext);
  if (uesCart === "undfined")
    throw new Error("You are useing the cart context outside the provider");
  return uesCart;
}

export { CartContextProvider, useCartContext };
