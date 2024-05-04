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
      <section className="card3-container card15-container">
        <div className="card15-inner-container">
          <Card15GlobalContainer
            image={apple}
            textA="Download on the "
            textB="App Store"
            width="39%"
          />

          <Card15GlobalContainer
            image={playStore}
            textA="GET IT ON "
            textB="Google Play"
            width="25%"
          />

          <Card15GlobalContainer
            image={earth}
            textA="Download on the "
            textB="App Store"
            width="20%"
            right="7px"
          />
        </div>
      </section>
    </>
  );
}

export default Card15;
