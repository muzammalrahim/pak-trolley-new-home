import React from "react";
import rightArrow from "../../assets/rightArrow.png";

export const ForYouProduct = () => {
  return (
    <div>
      <div className="flex p-5 justify-between">
        <div className="flex text-2xl gap-2 font-bold">
          <span>Just For You</span>
        </div>
        <div>
          <button className="flex items-center gap-2">
            View All
            <img src={rightArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
