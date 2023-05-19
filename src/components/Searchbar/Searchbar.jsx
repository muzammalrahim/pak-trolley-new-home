import React from "react";
import logo from "./icons/logo.jpg";
import search from "./icons/search.png";
import bell from "./icons/bell.png";
import cart from "./icons/cart.png";
import avatar from "./icons/avatar.png";

export const Searchbar = () => {
  return (
    <div className="mx-auto">
      <div class="flex justify-between p-8">
        <div class="flex-none">
          <img src={logo} alt="" />
        </div>
        <div class="flex text-center items-center w-6/12">
          <input
            class="py-4 px-4 outline-none rounded-l-md flex-1 "
            style={{ backgroundColor: "#F5F5F5" }}
            type="text"
            placeholder="Search in Paktrolley"
          />
          <button
            style={{
              color: "red",
              backgroundColor: "#159CB8",
              borderRadius: "0px 5px 5px 0px",
            }}
            className="px-[22px] py-[18px]"
          >
            <img src={search} alt="" />
          </button>
        </div>
        <div class="flex text-right items-center gap-[32px]">
          <img
            className="hover:scale-125 transition-transform duration-100"
            src={cart}
            alt=""
          />
          <img
            className="hover:scale-125 transition-transform duration-100"
            src={bell}
            alt=""
          />
          <img
            className="hover:scale-125 transition-transform duration-100"
            src={avatar}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
