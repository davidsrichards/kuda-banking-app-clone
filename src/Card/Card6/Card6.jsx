// importing Modules

import "./Card6.css";
import GlobalCard from "../GlobalCard/GlobalCard";
import bankingCard from "../../assets/ImageFolder/banking-card.jpg";
import { IoIosArrowForward } from "react-icons/io";

function Card6() {
  return (
    <>
      <section className="card3-container card6-container">
        <GlobalCard
          headings="Turn off access, turn on safety."
          paragraph="Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We'd like to see them try."
          ancho="Learn more about Cards"
          arrow={<IoIosArrowForward />}
          img={bankingCard}
        />
      </section>
    </>
  );
}

export default Card6;
