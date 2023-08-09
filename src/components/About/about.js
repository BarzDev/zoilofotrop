import React, { useEffect, useState } from "react";
import styles from "@/components/About/index.module.css";
import Image from "next/image";

const About = () => {
  const [text, setText] = useState("Hayy,,"); // Teks awal

  // Gunakan useEffect untuk memantau perubahan lebar layar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setText("Hello, everyone.. "); // Mengubah teks menjadi "Hello" saat lebar layar kurang dari atau sama dengan 600px
      } else {
        setText("Hayy,,"); // Kembali ke teks awal saat lebar layar lebih besar dari 600px
      }
    };

    window.addEventListener("resize", handleResize);

    // Hapus event listener saat komponen tidak digunakan
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles["about-container"]}>
      <div className={styles["profile"]}>
        <div className={styles["profile_bio"]} style={{ color: "black" }}>
          <div style={{ backgroundColor: "var(--color-dark-blue)" }}>
            <div className={styles["bio-hello"]}>{text}</div>
          </div>
          <div className={styles["bio-introduce"]}>
            <p className="pb-3">Let me introduce my-self,</p>
            <p> My name Fakhrul Ghozali Akbar, I&apos;m a diploma degree and I&apos;m a front-end developer who utilizes the React.js framework, specifically Next.js, along with Bootstrap and DaisyUI as CSS framework.</p>
            <div style={{ width: "100%", textAlign: "center" }}>
              <p className="pt-5">
                Take a journey through my portfolio and explore my creations below.{" "}
                <span role="img" aria-label="smile">
                  😊😊
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles["profile_img"]}>
          <div className={styles["img_container"]}>
            <div className={styles["img_c"]}>
              <Image src={"/photo_1.jpg"} alt="Photo" fill style={{ objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
