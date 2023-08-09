import NavbarPortofolio from "@/components/Navbar/navbar-porto";
import Store from "@/components/PortoStore/Store/store";
import Layout from "@/components/PortoStore/layouts/Layout";
import { storeApi } from "../api";
import { useEffect, useState } from "react";
import style from "@/pages/portofolio1/index.module.css";

export default function Portofolio1() {
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    const response = await storeApi.get();
    const data = await response.data.products;
    setProduct(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div style={{ overflow: "hidden", backgroundColor: "white" }}>
      <NavbarPortofolio />
      <div style={{ height: "64px" }}></div>
      <Layout>
        <h1 className={style["title"]}>PRODUCT LIST</h1>
        <div className={style["Home"]}>
          <Store products={product} />
        </div>
      </Layout>
    </div>
  );
}
