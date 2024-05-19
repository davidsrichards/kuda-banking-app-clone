import "./Head1.css";
import apple from "../../assets/ImageFolder/apple-logo.webp";
import playStore from "../../assets/ImageFolder/play-store.png";
import phone from "../../assets/ImageFolder/kuda-phone4.png";
import image from "../../assets/ImageFolder/shot.jpg";
import Card15GlobalContainer from "../Card15/Card15-GlobalContainer";

function Head1() {
  return (
    <>
      <div className="grid lg:grid-cols-2 justify-items-center mx-center">
        <div className=" flex flex-col items-center lg:items-start contain p-12 space-y-6 w-[32rem]">
          <div className="flex flex-col text-center lg:text-start space-y-4">
            <h1 className="text-[3rem] font-bold font-sans text-indigo-900 break-words">
              The money app for Africans.
            </h1>
            <p className="font-normal text-[1.4rem]">
              Make free transfers, enjoy cashless payment options and earn
              interest on your savings with Kuda.
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
        <img src={image} alt="" className="w-[35rem] relative -top-10" />
      </div>
    </>
  );
}

export default Head1;

/* 
<section className="card1-container">
<div className="containerA">
  <h1>The money app for Africans.</h1>
  <h4>
    Make free transfer, enjoy cashless payment and earn interest on your
    saving with Kuda
  </h4>
  <div className="button-section">


    <div className="btns">
      <button className="btn apple-btn">
        <img src={apple} alt="apple-store" className="img apple-logo" />
        <span>
          <span className="small">
            Download on the <br />
          </span>{" "}
          <span className="big">App Store </span>
        </span>
        <br />
      </button>

      

      <button className="btn play-store-btn">
        <img
          src={playStore}
          alt="play-store"
          className="img play-logo"
        />
        <span>
          <span className="small">
            GET IT ON <br />
          </span>{" "}
          <span className="big">Google Play</span>{" "}
        </span>
        <br />
      </button>
    </div>
  </div>
</div>



<img src={image} alt="sot" className="card1-image" />
</section> */
