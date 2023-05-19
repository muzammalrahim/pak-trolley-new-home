import React from "react";
import "./Navbar.css";
import linkedin from "./icon/linkedin.png";
import facebook from "./icon/facebook.png";
import twitter from "./icon/twitter.png";
import instagram from "./icon/instagram.png";
const NavBar = () => {
  return (
    <nav style={{ backgroundColor: "#159CB8" }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-6 xl:px-40">
        <div className="flex items-center justify-between h-[48px]">
          <div className="flex">
            <img className="mr-6 hover:scale-125 transition-transform duration-100" src={linkedin} alt="PakTrolley" />
            <img className="mr-6 hover:scale-125 transition-transform duration-100" src={twitter} alt="PakTrolley" />
            <img className="mr-6 hover:scale-125 transition-transform duration-100" src={facebook} alt="PakTrolley" />
            <img className="hover:scale-125 transition-transform duration-100" src={instagram} alt="PakTrolley" />
          </div>
          <div className="text-white">
            Authentic Panasonic Products in Pakistan at Discounted Rates
          </div>
          <div className="flex gap-x-6 justify-between text-white">
            <div className="hover:scale-125 transition-transform duration-100">Login</div>
            <div>|</div>
            <div className="hover:scale-125 transition-transform duration-100">Signup</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
