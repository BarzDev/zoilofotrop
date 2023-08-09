import React, { useState } from "react";
import styles from "@/components/PortoDota/index.module.css";
import Modal from "@/components/PortoDota/Modal";
import Image from "next/image";

const DotaList = ({ heroes }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHero, setSelectedHero] = useState(null);

  const sortedHeroes = heroes.sort((a, b) => a.localized_name.localeCompare(b.localized_name));

  const handleOpenModal = (hero) => {
    setSelectedHero(hero);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={{ backgroundColor: "var(--color-dark-blue)" }}>
      <div className={styles["dota-list-container"]}>
        <div style={{ fontWeight: "bold" }}>
          <h1 className="py-5">HERO LIST DOTA 2 GAME USING OPEN DOTA API</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead style={{ fontWeight: "bolder", color: "#fff" }}>
              <tr style={{ textAlign: "center" }}>
                <th className="px-4 py-2 border">Hero</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Primary Attribute</th>
                <th className="px-4 py-2 border">Attack Type</th>
                <th className="px-4 py-2 border">Roles</th>
                <th className="px-4 py-2 border"> Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedHeroes.map((hero, i) => (
                <tr key={i}>
                  <td className="border px-4 py-2">
                    <div className={styles["hero-icon"]}>
                      <Image src={`https://cdn.cloudflare.steamstatic.com${hero.icon}`} alt="Hero Icon" fill style={{ objectFit: "contain" }} />
                    </div>
                  </td>
                  <td className="border px-4 py-2">{hero.localized_name}</td>
                  <td className="border px-4 py-2">
                    <div className={styles["img-icon"]}>
                      {hero.primary_attr === "agi" ? (
                        <Image src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="Agi Icon" fill style={{ objectFit: "contain" }} />
                      ) : hero.primary_attr === "str" ? (
                        <Image src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png" alt="Str Icon" fill style={{ objectFit: "contain" }} />
                      ) : hero.primary_attr === "int" ? (
                        <Image src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png" alt="Int Icon" fill style={{ objectFit: "contain" }} />
                      ) : hero.primary_attr === "all" ? (
                        <Image src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png" alt="Universal Icon" fill style={{ objectFit: "contain" }} />
                      ) : (
                        ""
                      )}
                    </div>
                  </td>
                  <td className="border px-4 py-2">
                    <div className={styles["img-atk"]}>
                      {hero.attack_type === "Melee" ? (
                        <Image src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/melee.svg" alt="Melee Icon" fill style={{ objectFit: "contain" }} />
                      ) : hero.attack_type === "Ranged" ? (
                        <Image src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/ranged.svg" alt="Range Icon" fill style={{ objectFit: "contain" }} />
                      ) : (
                        ""
                      )}
                    </div>
                  </td>
                  <td className="border px-4 py-2">
                    {hero.roles.map((role, index) => (
                      <span key={index} className="badge badge-ghost badge-sm">
                        {role}
                      </span>
                    ))}
                  </td>
                  <td className="border px-4 py-2" style={{ textAlign: "center" }}>
                    <button className=" badge badge-primary badge-outline-xs" onClick={() => handleOpenModal(hero)}>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={handleCloseModal} hero={selectedHero} />
    </div>
  );
};

export default DotaList;
