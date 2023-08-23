import NavbarPortofolio from "@/components/Navbar/navbar-porto";
import FoodList from "@/components/PortoFood/foodlist";
import { useEffect, useState } from "react";
import data from "public/data.json";

const Portofolio3 = () => {
  const [dbInitialFood, setDbInitialFood] = useState([]);

  useEffect(() => {
    setDbInitialFood(data);
  }, []);
  const handleAddMerchant = (newMerchantData) => {
    setDbInitialFood((prevData) => [...prevData, newMerchantData]);
  };

  return (
    <>
      <NavbarPortofolio />
      <FoodList dbFood={dbInitialFood} handleAddMerchant={handleAddMerchant} />
    </>
  );
};

export default Portofolio3;
