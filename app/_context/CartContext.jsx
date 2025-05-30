"use client";
const { createContext, useContext, useReducer } = require("react");

const iniatilState = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];

const CartContext = createContext();

function addProductToCart(state, action) {
  switch (action.type) {
    case "addProduct":
      return [...state, action.playload];

    default:
      break;
  }
}

function CartContextProvider({ children }) {
  const [items, dispatch] = useReducer(addProductToCart, iniatilState);
  return (
    <CartContext.Provider value={{ items, dispatch }}>
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
