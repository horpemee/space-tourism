import React, { useState } from "react";
import Logo from "../header/assets/logo.svg";
import Menu from "../header/assets/Group.svg";
import Close from "../header/assets/icon-close.svg"
import { Link } from "react-router-dom";
import "./header.css"
import { useLocation } from "react-router-dom";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  const handleClick = () => {
  setShowNav(!showNav);

   

    // setShowNav(true);
  };

  const navItems = ["Home", "Destination", "Crew", "Technology"];

  return (
    <header className="p-5 flex flex-row justify-between items-center  lg:p-0 ">
      <Link  to="/">
      <img src={Logo} alt="logo" className="mr-auto lg:px-10" />
      </Link>
      <img
        src={Menu}
        alt="menu"
        className="ml-auto lg:hidden"
        onClick={handleClick}
      />

      {showNav && (
        <nav id="mobile" className="w-64 fixed top-0 right-0 px-14  ">
        <ul className="text-white uppercase  pt-40">
          {navItems.map((item, index) => (
            <Link to= {item === "Home" ? "/" : `/${item.toLowerCase()}`} >
            <li key={index} className={`mb-10 hover:border-b-4  w-fit border-hr   pointer ${location.pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`) ? "active" : ""} `}>{item}</li>

            </Link>
          ))}
          <img
              src={Close}
              alt="close"
              className="absolute top-8 right-6"
              onClick={handleClick}
            />
        </ul>
        </nav>
       
      )}


      <nav id="tab" >
        <ul id="subHeading" className="hidden text-white uppercase lg:flex bg-head lg:flex-row lg:items-center  xl:gap-6  lg:justify-center xl:bg-headDesk xl:mt-8 xl:px-8 2xl:px-32">
          {navItems.map((item, index) => (
            <Link to= {item === "Home" ? "/" : `/${item.toLowerCase()}`} >
            <li key={index} className={`hover:border-b-4 pointer border-hr  py-12 px-8 xl:py-8  ${
                location.pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                  ? "active"
                  : ""}`}>{item}</li>

            </Link>
          ))}
          
        </ul>
        </nav>
    </header>
  );
};

export default Header;
