// importing modules

import "./Card10.css";
import tc from "../../assets/ImageFolder/tc.jpg";
import wef from "../../assets/ImageFolder/ef.png";
import ft from "../../assets/ImageFolder/ft.png";
import bbc from "../../assets/ImageFolder/bbc2.png";
import cnbc from "../../assets/ImageFolder/cnbc.webp";
import eu from "../../assets/ImageFolder/euro.jpg";

// card10 function

function Card10() {
  return (
    <>
      <section className="card3-container logo-class">
        <div className="card-images">
          <img src={tc} alt="tc" className="lg-image" />
          <img src={wef} alt="wef" className="lg-image" />
          <img src={ft} alt="ftf" className="lg-image" />
          <img src={bbc} alt="bbc" className="lg-image bbc" />
          <img src={cnbc} alt="cnbc" className="lg-image cnbc" />
          <img src={eu} alt="euro-money" className="lg-image eu" />
        </div>
      </section>
    </>
  );
}

export default Card10;
