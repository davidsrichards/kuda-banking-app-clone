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
      <section className="card3-container card11-container">
        <div className="card11-border">
          <h1>Our Partners</h1>
          <div className="card11-images">
            <img src={valar} alt="valar" className="c11-img" />
            <img src={entry} alt="entry" className="c11-img entry" />
            <img src={sbi} alt="sbi" className="c11-img" />
            <img src={target} alt="target" className="c11-img target" />
            <img src={visa} alt="visa" className="c11-img visa" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Card11;
