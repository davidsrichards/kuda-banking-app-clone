import "./Card3.css";
import { IoIosArrowForward } from "react-icons/io";
import kudaGal from "../../assets/ImageFolder/kuda-gal.jpg";
import GlobalCard from "../GlobalCard/GlobalCard";

function Card3() {
  return (
    <>
      {/* Section1 */}
      <section className="card3-container">
        <GlobalCard
          paragraph="We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves."
          ancho="Open An Account in Minutes."
          arrow={<IoIosArrowForward />}
          img={kudaGal}
        />
      </section>
    </>
  );
}

export default Card3;

/* 
<div className="card3A">
<div className="heads">
  <h1>
    Your Phone +
    <br />
    <span className="our-app">our app +</span>
    <br />
    a debit card =
    <br />a simpler life
  </h1>
</div>
<div className="note">
  we designed a money app for your lifestyle, and you can get a debit
  card to go with it. Thats's all we need to make the right money
  moves
</div>
<p className="">
  <a href="#" className="ancho">
    Open An Account in Minutes{" "}
    <span>
      <IoIosArrowForward className="arrow" />
    </span>
  </a>
</p>
</div>

<div className="card3B">
<img src={kudaGal} alt="Image" className="ai-img" />
</div> */
