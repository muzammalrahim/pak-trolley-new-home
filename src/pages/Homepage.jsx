import NavBar from "../components/Navbar/Navbar";
import { Searchbar } from "../components/Searchbar/Searchbar";
import { SideCategories } from "../components/Categories/SideCategories";
import { TopCategories } from "../components/Categories/TopCategories";
import { HeroCategories } from "../components/Categories/HeroCategories";
import ProductCard2 from "../components/product/product-card-2";
import banner from "./images/banner.png";
import banner2 from "./images/banner2.png";
import { HotProduct } from "../components/HotProduct/HotProduct";
import { ForYouProduct } from "../components/ForYouProduct/ForYouProduct";
import infoBanner from "../assets/infoBanner.png";

// import {topCategories} from '../components/Categories/topCategories';
const mapping = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e) => (
  <ProductCard2 />
));
const Homepage = () => {
  return (
    <div className="font-custom">
      <NavBar />
      {/* With Space  */}
      <div className=" px-4 sm:px-6 lg:px-6 xl:px-40">
        <Searchbar />
        <div className="flex justify-center">
          <SideCategories />
          <div className="">
            <TopCategories />
            <div className="h-auto">
              <HeroCategories />
            </div>
          </div>
        </div>
        <div className="mt-11"></div>
        {/* <ProductCard2/> */}
        <div className="flex justify-center items-center gap-2 flex-wrap">
          {mapping}
        </div>
        <div className="flex justify-center p-5 gap-y-5">
          <button className="border-2 border-black p-5 rounded-md font-semibold">
            See more products
          </button>
        </div>
        <div className="mt-5"></div>
        <img className="h-auto w-auto" src={banner} alt="" />
        <div className="mt-5"></div>
      </div>
      {/* Yellow Component  */}
      <div className="bg-[#FFF3EA]">
        <div className=" px-4 sm:px-6 lg:px-6 xl:px-40">
          <HotProduct products={"jkashdkjasghdjk"} />
        </div>
      </div>

      <div className=" px-4 sm:px-6 lg:px-6 xl:px-40">
        <div className="flex justify-center">
          <img className="h-auto w-auto" src={banner2} alt="" />
          <div className="mb-5"></div>
        </div>
        <div className="mt-5"></div>
        <div>
          <ForYouProduct />
          <div className="flex justify-center items-center gap-2 flex-wrap">
            {mapping}
          </div>
          <div className="flex justify-center p-5 gap-y-5">
            <button className="border-2 border-black p-5 rounded-md font-semibold">
              See more products
            </button>
          </div>
          <div className="py-5">
            <img className="w-auto h-auto" src={infoBanner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
