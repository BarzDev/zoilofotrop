import React, { useRef } from "react";
import Link from "next/link";

const Navbar = ({ aboutRef, sectionRef }) => {
  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSectionClick = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 w-full" style={{ zIndex: "10" }}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a onClick={handleAboutClick}>About Me</a>
            </li>
            <li>
              <a>List Portofolio</a>
              <ul className="p-2">
                <li>
                  <Link href="/portofolio1">Portofolio Marketplace</Link>
                </li>
                <li>
                  <Link href="/portofolio2">Portofolio Dota API</Link>
                </li>
                <li>
                  <Link href="/portofolio3">Portofolio Merchant</Link>
                </li>
                <li>
                  <Link href="/portofolio4">Portofolio CRUD</Link>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={handleSectionClick}>Portofolio</a>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          My Portofolio Web
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">
          <li>
            <a onClick={handleAboutClick}>About Me</a>
          </li>
          <li>
            <a onClick={handleSectionClick}>Portofolio</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>List Portofolio</summary>
              <ul className="p-2">
                <li>
                  <Link href="/portofolio1">Portofolio Marketplace</Link>
                </li>
                <li>
                  <Link href="/portofolio2">Portofolio Dota API</Link>
                </li>
                <li>
                  <Link href="/portofolio3">Portofolio Merchant</Link>
                </li>
                <li>
                  <Link href="/portofolio4">Portofolio CRUD</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
    </div>
  );
};

export default Navbar;
