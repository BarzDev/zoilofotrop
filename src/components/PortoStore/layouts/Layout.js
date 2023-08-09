import React from "react";
import { useRouter } from "next/router";
import { MENU_LIST } from "./constants";
import styles from "./index.module.css";
import { useCart } from "@/context/CartContext";

const Layout = ({ children }) => {
  const router = useRouter();

  const handleChagePage = (path) => {
    router.push(path);
  };

  const cart = useCart();
  const totalQuantity = cart ? cart.reduce((total, product) => total + product.quantity, 0) : 0;

  return (
    <main className={styles.layout}>
      <aside className={styles.sidebar}>
        <nav className={styles.sidebar__nav}>
          <ul>
            {MENU_LIST.map((menu, index) => {
              return (
                <li key={index} className={router.pathname === menu.path ? styles.active : ""} onClick={() => handleChagePage(menu.path)}>
                  {menu.name}
                  {menu.path === "/portofolio1/cart" && ( // Display the indicator only for the "cart" path
                    <div className={styles.cart}>
                      <p>{totalQuantity}</p>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <section className={styles.content}>{children}</section>
    </main>
  );
};

export default Layout;
