// importing Modules
import "./Card4.css";
import GlobalCard from "../GlobalCard/GlobalCard";
import option from "../../assets/ImageFolder/options.jpg";

// Card4 function

function Card4() {
  return (
    <>
      <section className="card3-container card4-container">
        <GlobalCard
          headings="It's your money, we just help you manage it."
          paragraph="Save it, spend it, send it. It's up to you. Whatever you choose to do with your money, we'll make sure it's done better and free of charge. We take responsibility for that."
          ancho=""
          arrow=""
          img={option}
        />
      </section>
    </>
  );
}

export default Card4;
