// importing Modules

import "./Card13.css";
import image from "../../assets/ImageFolder/shot.jpg";

// Card13 function

function Card13() {
  return (
    <>
      <section className="card3-container card13-container">
        <div className="card13-inner-container">
          <div className="card13-group1 card13-mg">
            <h1>The money app for Africans.</h1>

            <p>Save, spend, send and invest money across borders.</p>

            <input
              type="button"
              value="Join Kuda"
              className="card13-join-kuda"
            />
          </div>

          <img src={image} alt="image" className="card13-image card13-mg" />
        </div>
      </section>
    </>
  );
}

export default Card13;
