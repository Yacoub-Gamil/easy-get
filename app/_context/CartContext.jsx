"use client";
const { createContext, useContext, useReducer } = require("react");

const iniatilState = [];

const CartContext = createContext();

function addProductToCart(state, action) {
  switch (action.type) {
    case "addProduct":
      return [...state, action.payload];
    case "removeProduct":
      console.log(action.payload);
      return [...state.filter((product) => product.id !== action.payload)];
    default:
      throw new Error("method not found");
  }
}

function CartContextProvider({ children }) {
  const [items, dispatch] = useReducer(addProductToCart, iniatilState);
  const getTotalPrice = items?.map((el) => el.price);
  const totalPrice = getTotalPrice.reduce((acc, cur) => acc + cur, 0);

  return (
    <CartContext.Provider value={{ items, totalPrice, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCartContext() {
  const uesCart = useContext(CartContext);
  if (uesCart === "undfined")
    throw new Error("You are useing the cart context out the provider");
  return uesCart;
}

export { CartContextProvider, useCartContext };
