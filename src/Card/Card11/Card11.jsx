// importing modules

import "./Card11.css";
import valar from "../../assets/ImageFolder/valar.png";
import entry from "../../assets/ImageFolder/entry.jpg";
import sbi from "../../assets/ImageFolder/sbi.jpg";
import target from "../../assets/ImageFolder/target.jpg";
import visa from "../../assets/ImageFolder/visa2.jpg";

// card11 function

function Card11() {
  return (
    <>
      <section className="card3-container  ">
        <div className="card11-border flex flex-col items-center justify-center mt-10">
          <h1 className="relative top-6 pb-8 font-bold text-3xl text-indigo-900">
            Our Partners
          </h1>
          <div className="card11-images flex items-center justify-center space-x-4 flex-wrap container lg:space-x-10">
            <img
              src={valar}
              alt="valar"
              className="c11-img w-[7rem] lg:w-[10rem]"
            />
            <img
              src={entry}
              alt="entry"
              className="c11-img entry w-[8rem] lg:w-[10rem]"
            />
            <img
              src={sbi}
              alt="sbi"
              className="c11-img w-[8rem] lg:w-[10rem]"
            />
            <img
              src={target}
              alt="target"
              className="c11-img target w-[7rem] lg:w-[10rem]"
            />
            <img
              src={visa}
              alt="visa"
              className="c11-img visa w-[7rem] lg:w-[10rem]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Card11;
