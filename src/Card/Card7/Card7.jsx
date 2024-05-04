// importing modules

import "./Card7.css";
import hello from "../../assets/ImageFolder/hello.jpg";
import GlobalCard from "../GlobalCard/GlobalCard";
import { IoIosArrowForward } from "react-icons/io";

// Card7 function

function Card7() {
  return (
    <>
      <section className="card3-container">
        <GlobalCard
          headings="We're always happy to help you."
          paragraph="You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there'll always be a friendly person there to make your life easy."
          ancho="Get Help."
          arrow={<IoIosArrowForward />}
          img={hello}
        />
      </section>
    </>
  );
}

export default Card7;
