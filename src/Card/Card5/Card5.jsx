// impoorting Modules

import "./Card5.css";
import GlobalCard from "../GlobalCard/GlobalCard";
import copy from "../../assets/ImageFolder/copy.jpg";
import { IoIosArrowForward } from "react-icons/io";

// Card5 function

function Card5() {
  return (
    <>
      <section className="card3-container">
        <GlobalCard
          headings="Save money as you spend it, seriously."
          paragraph="You can't avoid spending. That's how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow."
          ancho="See all our Savings"
          arrow={<IoIosArrowForward />}
          img={copy}
        />
      </section>
    </>
  );
}

export default Card5;
