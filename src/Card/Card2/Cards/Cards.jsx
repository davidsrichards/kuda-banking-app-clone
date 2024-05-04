import "./Cards.css";
import { RiBankCard2Fill } from "react-icons/ri";
import CardsStore from "../CardStore/CardsStore";
import { BsCircleHalf } from "react-icons/bs";
import { LuLamp } from "react-icons/lu";
import { MdCelebration } from "react-icons/md";
import { FaCloudMeatball } from "react-icons/fa6";

function Cards() {
  return (
    <>
      <section className="cards-container">
        <CardsStore
          icon={<RiBankCard2Fill className="bank-card-image" />}
          message="Order a Kuda Visa card on the app with pickup and delivery options."
        />

        <CardsStore
          icon={<BsCircleHalf className="bank-card-image" />}
          message="Enjoy cashless payment options online and offline."
        />

        <CardsStore
          icon={<LuLamp className="bank-card-image" />}
          message="Pay your essential bills and buy gift cards easily.."
        />

        <CardsStore
          icon={<MdCelebration className="bank-card-image" />}
          message="Get 25 free transfers to Nigerian banks every month."
        />
        <CardsStore
          icon={<FaCloudMeatball className="bank-card-image" />}
          message="Save money automatically any time you spend."
        />
      </section>
    </>
  );
}

export default Cards;
