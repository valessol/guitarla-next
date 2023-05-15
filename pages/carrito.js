import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout";
import styles from "../styles/cart.module.css";

const Carrito = ({ cart, addToCart, deleteFromCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  const handleChange = (e, id) => {
    const newQuantity = +e.target.value;
    addToCart({ id, quantity: newQuantity });
  };

  return (
    <Layout title="Carrito de compras">
      <main className="container">
        <h1 className="heading">Carrito de compras</h1>
        <div className={styles.content}>
          <div className={styles.cart}>
            <h2>Articulos</h2>
            {!cart.length
              ? "Carrito vacío"
              : cart.map((item) => (
                  <div className={styles.product} key={item.id}>
                    <div>
                      <Image
                        src={item.imageUrl}
                        width={250}
                        height={480}
                        alt={`imagen guitarra ${item.title}`}
                      />
                    </div>
                    <div>
                      <p className={styles.name}>{item.title}</p>
                      <div className={styles.quantity}>
                        <p>Cantidad:</p>
                        <select
                          value={item.quantity}
                          className={styles.select}
                          onChange={(e) => handleChange(e, item.id)}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>
                      <p className={styles.price}>
                        $ <span>{item.price}</span>
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal: $ <span>{item.price * item.quantity}</span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className={styles.delete}
                      onClick={() => deleteFromCart(item.id)}
                    >
                      X
                    </button>
                  </div>
                ))}
          </div>
          <aside className={styles.resume}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: ${total}</p>
            <div className={styles.resumeButtons}>
              <button type="button" className="btn">
                Finalizar pedido
              </button>
              <Link href="/productos" className="btn">
                Seguir comprando
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Carrito;
