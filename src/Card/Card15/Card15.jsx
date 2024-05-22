// importing Modules

import "./Card15.css";
import apple from "..//../assets/ImageFolder/apple-logo.webp";
import playStore from "../../assets/ImageFolder/play-store.png";
import Card15GlobalContainer from "./Card15-GlobalContainer";
import earth from "../../assets/ImageFolder/earth2-copy.jpg";

import { FaEarthAmericas } from "react-icons/fa6";
<FaEarthAmericas />;
// card15 function

function Card15() {
  return (
    <>
      <section className="card3-container card15-containerb mt-[10rem]">
        <div className="flex space-x-4">
          <button className="border flex items-center rounded-lg bg-black text-white p-2 h-12  relative">
            <img src={apple} alt="" className="w-8 h-8 object-cover" />
            <div className="flex flex-col items-start">
              <p className="text-[10px]">Download on the</p>
              <p className="relative -top-1 font-semibold">App Store</p>
            </div>
          </button>
          <button className="border flex  items-center rounded-lg bg-black text-white p-2 h-12 relative lg:w-">
            <img src={playStore} alt="" className="w-8 h-8" />
            <div className="flex flex-col items-start">
              <span className="text-[10px]">GET IT ON </span>
              <span className="font-semibold">Google Play</span>
            </div>
          </button>

          <button className="border flex  items-center rounded-lg bg-indigo-900 text-white p-2 h-12 relative lg:w-">
            <img src={earth} alt="" className="w-8 h-8 rounded-full" />
            <div className="flex flex-col items-start">
              <span className="text-[10px]">GET IT ON </span>
              <span className="font-semibold">Google Play</span>
            </div>
          </button>
        </div>
      </section>
    </>
  );
}

export default Card15;
