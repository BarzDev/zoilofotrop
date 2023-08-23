import styles from "@/components/Section/index.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Section = ({ aboutRef, sectionRef }) => {
  const router = useRouter();
  const btnPorto1 = () => {
    router.push("/portofolio1");
  };
  const btnPorto2 = () => {
    router.push("/portofolio2");
  };
  const btnPorto3 = () => {
    router.push("/portofolio3");
  };

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSectionClick = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles["section-container"]}>
      <div className={styles["section-top"]}>
        <div className="pt-2 px-3">There are some examples of my portfolios have built using Next.js and DaisyUI, and some Public APIs.</div>
        <div className={styles["icon_container"]}>
          <div className={styles["img-icon"]}>
            <Image src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png" fill style={{ objectFit: "contain" }} alt="icon" />
          </div>
          <div className={styles["img-icon"]}>
            <Image src="https://daisyui.com/images/daisyui-logo/daisyui-logomark-1024-1024.png" fill style={{ objectFit: "contain" }} alt="icon" />
          </div>
          <div className={styles["img-icon"]}>
            <Image src="https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp" fill style={{ objectFit: "contain" }} alt="icon" />
          </div>
          <div className={styles["img-icon"]}>
            <Image src="https://e7.pngegg.com/pngimages/482/922/png-clipart-application-programming-interface-logo-computer-programming-api-icon-text-logo.png" fill style={{ objectFit: "contain" }} alt="icon" />
          </div>
        </div>
      </div>
      <div className={styles["section-content"]}>
        <div className={styles["section-card"]}>
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <div className={styles["card_img"]}>
              <Image src="/porto1.png" alt="Portofolio1" fill style={{ objectFit: "contain" }} />
            </div>
            <div className="card-body" style={{ cursor: "default" }}>
              <h2 className="card-title" style={{ color: "#fff" }}>
                POS
              </h2>
              <p style={{ color: "#fff" }}>POS Web using public API</p>
              <div className="card-actions justify-end">
                <button className="btn btn-success" onClick={btnPorto1}>
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["section-card"]}>
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <div className={styles["card_img"]}>
              <Image src="/porto2.png" alt="Portofolio2" fill style={{ objectFit: "contain" }} />
            </div>
            <div className="card-body" style={{ cursor: "default" }}>
              <h2 className="card-title" style={{ color: "#fff" }}>
                List Hero API
              </h2>
              <p style={{ color: "#fff" }}>List Hero Dota 2 using open dota API</p>
              <div className="card-actions justify-end">
                <button className="btn btn-success" onClick={btnPorto2}>
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["section-card"]}>
          <div className="card w-96 bg-base-100 shadow-xl image-full overflow-hidden">
            <div className={styles["card_img"]}>
              <Image src="/porto3.PNG" alt="Portofolio3" fill style={{ objectFit: "contain" }} />
            </div>
            <div className="card-body" style={{ cursor: "default" }}>
              <h2 className="card-title" style={{ color: "#fff" }}>
                Merchant Promote
              </h2>
              <p style={{ color: "#fff" }}>Promoting Merchant user</p>
              <div className="card-actions justify-end">
                <button className="btn btn-success" onClick={btnPorto3}>
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["section-footer"]}>
        <footer className="footer footer-center p-5 bg-base-200 text-base-content rounded">
          <div className="grid grid-flow-col gap-4">
            <a onClick={handleAboutClick} className="link link-hover">
              About me
            </a>
            <a onClick={handleSectionClick} className="link link-hover">
              Portfolio
            </a>
          </div>
          <div>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <p>Copyright © 2023 - Created by Fakhrul Akbar </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Section;
