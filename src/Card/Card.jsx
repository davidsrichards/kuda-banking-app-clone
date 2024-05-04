import "./Card.css";
import Head1 from "./Card1/Head1";
import Card10 from "./Card10/Card10";
import Card11 from "./Card11/Card11";
import Card12 from "./Card12/Card12";
import Card13 from "./Card13/Card13";
import Card14 from "./Card14/Card14";
import Card15 from "./Card15/Card15";
import Card16 from "./Card16/Card16";
import Card17 from "./Card17/Card17";
import Card18 from "./Card18/Card18";
import Cards from "./Card2/Cards/Cards";
import Card3 from "./Card3/Card3";
import Card4 from "./Card4/Card4";
import Card5 from "./Card5/Card5";
import Card6 from "./Card6/Card6";
import Card7 from "./Card7/Card7";
import Card8 from "./Card8/Card8";
import Card9 from "./Card9/Card9";

import ProfileCard1 from "./ProfileCard/ProfileCard1";

function Card() {
  return (
    <>
      <div className="card-container">
        <div className="headss">
          <Head1 />
          <Cards />
          <Card3 />
          <Card4 />
          <Card5 />
          <Card6 />
          <Card7 />
          <Card8 />
          <Card9 />
          <ProfileCard1 />
          <Card10 />
          <Card11 />
          <Card12 />
          <Card13 />
          <Card14 />
          <Card15 />
          <Card16 />
          <Card17 />
          <Card18 />
        </div>
        {/* <Cards /> */}
      </div>
    </>
  );
}

export default Card;
