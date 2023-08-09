import React from "react";
import Layout from "@/components/PortoStore/layouts/Layout";
import CartComponen from "@/components//PortoStore/Carts/cart";
import NavbarPortofolio from "@/components/Navbar/navbar-porto";

const Cart = () => {
  return (
    <div style={{ overflow: "hidden", backgroundColor: "white" }}>
      <NavbarPortofolio />
      <div style={{ height: "64px" }}></div>
      <Layout>
        <CartComponen />
      </Layout>
    </div>
  );
};

export default Cart;
