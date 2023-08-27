import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const NavbarPortofolio = () => {
  const cart = useCart();
  const totalQuantity = cart ? cart.reduce((total, product) => total + product.quantity, 0) : 0;
  return (
    <div className="navbar bg-base-100 top-0 left-0 w-full fixed" style={{ zIndex: "10" }}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <Link className="p-2" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "5px" }} href="/">
              <Image src="https://www.svgrepo.com/show/324642/back-arrow-direction-down-right-left-up.svg" alt="Back" width={24} height={24} style={{ backgroundColor: "white", padding: "2px", borderRadius: "25px" }} />
              Back
            </Link>

            <ul className="p-2">
              <li>
                <Link href="/portofolio1">Portofolio Marketplace</Link>
                <ul className="p-2">
                  <li>
                    <Link href="/portofolio1">Product List</Link>
                  </li>
                  <li>
                    <Link href="/portofolio1/cart">Cart ({totalQuantity}) </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/portofolio2">Portofolio Dota API</Link>
              </li>
              <li>
                <Link href="/portofolio3">Portofolio Merchant</Link>
              </li>
            </ul>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          My Portofolio Web
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          <Image src="https://www.svgrepo.com/show/324642/back-arrow-direction-down-right-left-up.svg" alt="Back" width={24} height={24} style={{ backgroundColor: "white", padding: "2px", borderRadius: "25px" }} />
          Back
        </Link>
      </div>
      {/* <div className="navbar-end">

      </div> */}
    </div>
  );
};

export default NavbarPortofolio;
