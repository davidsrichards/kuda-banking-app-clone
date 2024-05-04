// importing modules
import "./Card8.css";
import color from "../../assets/ImageFolder/color.jpg";
import { IoIosArrowForward } from "react-icons/io";
import GlobalCard from "../GlobalCard/GlobalCard";

function Card8() {
  return (
    <>
      <section className="card3-container card8-container">
        <GlobalCard
          headings="Fees as clear as glass."
          paragraph="We're serious about free banking, and we will never, ever charge you for anything without your consent."
          ancho="See all our fees."
          arrow={<IoIosArrowForward />}
          img={color}
        />
      </section>
    </>
  );
}

export default Card8;
