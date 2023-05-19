import React from "react";
import lines from "./icons/lines.png";

export const SideCategories = () => {
  return (
    <div>
      <div
        className="bg-custom-blue text-white font-medium flex items-center w-[288px] h-[56px]"
        style={{ padding: "10px 24px", gap: "10px" }}
      >
        <div>
          <img src={lines} alt="" />
        </div>
        All Categories
      </div>

      <div
        className="bg-[#F5F5F5] text-black font-normal flex items-center w-[288px] h-[56px]"
        style={{ padding: "10px 24px", gap: "10px" }}
      >
        Electronic Accessories
      </div>
      <div
        className="bg-[#F5F5F5] text-black font-normal flex items-center w-[288px] h-[56px]"
        style={{ padding: "10px 24px", gap: "10px" }}
      >
        Electronic Devices
      </div>
      <div
        className="bg-[#F5F5F5] text-black font-normal flex items-center w-[288px] h-[56px]"
        style={{ padding: "10px 24px", gap: "10px" }}
      >
        TV & Home Appliances
      </div>
      <div
        className="bg-[#F5F5F5] text-black font-normal flex items-center w-[288px] h-[56px]"
        style={{ padding: "10px 24px", gap: "10px" }}
      >
        Audio & Headphones
      </div>
      <div
        className="bg-[#F5F5F5] text-black font-normal flex items-center w-[288px] h-[56px]"
        style={{ padding: "10px 24px", gap: "10px" }}
      >
        Home & Lifestyle
      </div>
      <div
        className="bg-[#F5F5F5] text-black font-normal flex items-center w-[288px] h-[56px]"
        style={{ padding: "10px 24px", gap: "10px" }}
      >
        Women’s Fashion
      </div>
      <div
        className="bg-[#F5F5F5] text-black font-normal flex items-center w-[288px] h-[56px]"
        style={{ padding: "10px 24px", gap: "10px" }}
      >
        Men’s Fashion
      </div>
      <div
        className="bg-[#F5F5F5] text-black font-normal flex items-center w-[288px] h-[56px]"
        style={{ padding: "10px 24px", gap: "10px" }}
      >
        Health & Beauty
      </div>
      <div
        className="bg-[#F5F5F5] text-black font-normal flex items-center w-[288px] h-[56px]"
        style={{ padding: "10px 24px", gap: "10px" }}
      >
        Watches, Bags & Jewellery
      </div>
      <div
        className="bg-[#F5F5F5] text-black font-normal flex items-center w-[288px] h-[56px]"
        style={{ padding: "10px 24px", gap: "10px" }}
      >
        Sport & Outdoors
      </div>
    </div>
  );
};
