import { useEffect, useState } from "react";
import DotaList from "@/components/PortoDota/Dota";

import { dotaApi } from "../api";
import NavbarPortofolio from "@/components/Navbar/navbar-porto";

export default function Portofolio2() {
  const [hero, setHero] = useState([]);

  const fetchHero = async () => {
    const response = await dotaApi.get();
    const data = await response.data;
    setHero(data);
  };

  useEffect(() => {
    fetchHero();
  }, []);

  return (
    <div>
      <NavbarPortofolio />
      <DotaList heroes={hero} />
    </div>
  );
}
