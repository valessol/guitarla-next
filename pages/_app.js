import "@/styles/globals.css";
import { useEffect, useState } from "react";

const initialState =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("cart"))
    : null;
export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState(initialState || []);
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    // esperar a que el componente esté listo e hidratado para renderizarlo
    setPageReady(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const existItem = cart.some((cartItem) => cartItem.id === item.id);

    if (!cart.length) return setCart([item]);

    const newCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        cartItem.quantity = item.quantity;
      }
      return cartItem;
    });

    if (existItem) setCart(newCart);
    else setCart([...newCart, item]);
  };

  const deleteFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };
  return pageReady ? (
    <Component
      {...pageProps}
      cart={cart}
      addToCart={addToCart}
      deleteFromCart={deleteFromCart}
    />
  ) : null;
}
