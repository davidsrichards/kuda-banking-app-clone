// importing Modules
import "./Card13.css";
import image from "../../assets/ImageFolder/shot.jpg";

import apple from "../../assets/ImageFolder/apple-logo.webp";
import playStore from "../../assets/ImageFolder/play-store.png";

// Card13 function

function Card13() {
  return (
    <>
      <section className="card3-container card13-container mt-[10rem] grid mx-auto">
        <div className="card13-inner-container lg:visible invisible">
          <div className="card13-group1 card13-mg flex flex-col items-start justify-center space-y-10">
            <h1 className="font-bold text-3xl break-words w-64">
              The money app for Africans.
            </h1>
            <p className=" font-normal text-18px] font-sans">
              Save, spend, send and invest money across borders.
            </p>

            <input
              type="button"
              value="Join Kuda"
              className="card13-join-kuda"
            />
          </div>

          <img src={image} alt="image" className="card13-image card13-mg" />
        </div>

        <div className=" flex flex-col items-center lg:items-start contain p-14 space-y-6 w-[38rem] lg:invisible shadow-sm bg-indigo-50 -mt-[14rem]">
          <div className="flex flex-col text-center lg:text-start space-y-4">
            <h1 className="text-[2rem] font-bold font-sans text-indigo-900 break-words">
              The money app for Africans.
            </h1>
            <p className="font-normal text-[1.4rem]">
              Save, spend, send and invest money across borders.
            </p>
          </div>

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
          </div>
        </div>
      </section>
    </>
  );
}

export default Card13;
