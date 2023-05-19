import React from "react";
import fire from "./icons/fire-icon.png";
import rightArrow from "./icons/rightArrow.png";
import ProductCard2 from "../product/product-card-2";
export const HotProduct = ({products}) => {
  console.log(products)
  const mappings = [1, 2, 3, 4, 5, 6].map((e) => <ProductCard2 />);
  return (
    <div>
      <div className="flex p-5 justify-between">
        <div className="flex text-2xl gap-2 font-bold">
          <img src={fire} alt="" />
          <span className="text-red-500">Hot</span>
          <span>Sale</span>
        </div>
        <div>
          <button className="flex items-center gap-2">
            View All
            <img src={rightArrow} alt="" />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 flex-wrap">
        {mappings}
      </div>
    </div>
  );
};
