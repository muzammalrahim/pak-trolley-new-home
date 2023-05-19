import React from "react";
import RatingComponent from "react-rating";
import { FaStar } from "react-icons/fa";

const ProductCard2 = () => {
  return (
    <>
      <div className="flex justify-center p-[9px] bg-white border-[1.5px] border-gray-100 rounded-xl cursor-pointer w-[250px] shadow-product">
        <div className="">
          <img
            src={"http://hd.wallpaperswide.com/thumbs/space_aesthetic-t2.jpg"}
            width={250}
            height={200}
            className="rounded-md"
            alt=""
          />
          <div className="space-y-1">
            {/* Title */}
            <h1 className="font-medium text-lg text-black capitalize h-[56px]">
              {"Product Name"}
            </h1>
            {/* Sale Price */}
            <p className="font-semibold text-2xl text-[#159CB8]">
              PKR 7,654.00
            </p>
            {/* Discount Price */}
            <span className="line-through">PKR 9,100.00</span>
            {/* Rating Component */}
            <div className="mt-1 flex items-center">
              <RatingComponent
                placeholderRating={4}
                placeholderSymbol={
                  <FaStar color="rgb(255, 180, 0)" size={15} />
                }
                emptySymbol={<FaStar color="lightgray" size={15} />}
                fullSymbol={<FaStar color="rgb(51, 51, 51)" size={15} />}
                readonly
              />
              <span className="ml-1 text-xs">{`(${0})`}</span>
            </div>
            {/* Button */}
            <button
              //    onClick={addToCart}
              //  variant="slim"
              className={`bg-custom-blue hover:bg-blue-700 w-full text-white mt-2 font-bold h-9 rounded-md ${
                1 === 1 && " hover:bg-blue   hover:text-white hover:border-blue"
              }`}
              //    disabled={
              //     !isSelected ||
              //     !product?.quantity ||
              //     (!isEmpty(selectedVariation) && !selectedVariation?.quantity)
              //    }
              //    loading={addToCartLoader}
            >
              <div className="flex items-center justify-center">
                <svg
                  className="pr-2 "
                  width="39"
                  height="26"
                  viewBox="0 0 39 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39 19.5955C39 19.1747 38.6588 18.8346 38.2391 18.8346H10.8243C10.6522 18.8346 10.501 18.7251 10.4463 18.561L6.03581 4.21751C5.20524 1.69496 5.20225 0 2.54642 0H0.760942C0.340186 0 0 0.341181 0 0.760942C0 1.1807 0.34118 1.52188 0.760942 1.52188H2.54642C3.76094 1.52387 3.91611 2.3813 4.58952 4.69297L9 19.0365C9.25961 19.8253 9.99271 20.3554 10.8233 20.3554H38.2391C38.6588 20.3564 39 20.0153 39 19.5955Z"
                    fill="white"
                  />
                  <path
                    d="M18.7888 21.4397C17.5872 21.4397 16.6134 22.4135 16.6134 23.6151C16.6134 24.8167 17.5872 25.7905 18.7888 25.7905C19.9904 25.7905 20.9642 24.8167 20.9642 23.6151C20.9642 22.4145 19.9894 21.4397 18.7888 21.4397Z"
                    fill="white"
                  />
                  <path
                    d="M29.1426 21.4397C27.941 21.4397 26.9672 22.4135 26.9672 23.6151C26.9672 24.8167 27.941 25.7905 29.1426 25.7905C30.3442 25.7905 31.317 24.8167 31.317 23.6151C31.317 22.4145 30.3442 21.4397 29.1426 21.4397Z"
                    fill="white"
                  />
                  <path
                    d="M37.0096 17.0521C37.0255 17.0054 37.0354 16.9556 37.0354 16.9039C37.0354 16.6642 36.8405 16.4692 36.5998 16.4692L23.1445 16.4702C22.9048 16.4702 22.7098 16.6662 22.7098 16.9059C22.7098 17.1456 22.9048 17.3406 23.1455 17.3406L36.6008 17.3386C36.7888 17.3386 36.9489 17.2192 37.0096 17.0521Z"
                    fill="white"
                  />
                  <path
                    d="M30.555 2.25297L25.9715 1.9486L30.5541 1.64422L30.6008 1.64124C30.7669 1.64521 30.9012 1.78149 30.9012 1.9486C30.9012 2.1157 30.7669 2.25198 30.6008 2.25596L30.555 2.25297Z"
                    fill="white"
                  />
                  <path
                    d="M32.1038 4.72877L26.2311 4.33785L32.1028 3.94793L32.1624 3.94495C32.3753 3.94992 32.5474 4.12399 32.5474 4.33885C32.5474 4.5537 32.3753 4.72777 32.1624 4.73274L32.1038 4.72877Z"
                    fill="white"
                  />
                  <path
                    d="M33.2815 7.37571L26.62 6.93307L33.2795 6.49043L33.3471 6.48645C33.5888 6.49242 33.7838 6.68937 33.7838 6.93307C33.7838 7.17577 33.5888 7.37372 33.3471 7.37969L33.2815 7.37571Z"
                    fill="white"
                  />
                </svg>

                <span className="py-2 text-white  text-sm pr-0 pl-0">
                  {"Add to Cart"}
                  {/* {product?.quantity || (!isEmpty(selectedVariation) && selectedVariation?.quantity)
         ? t("text-add-to-cart")
         : t("text-out-stock")} */}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard2;
