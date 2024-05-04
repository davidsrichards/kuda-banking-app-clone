import "./Head1.css";
import apple from "../../assets/ImageFolder/apple-logo.webp";
import playStore from "../../assets/ImageFolder/play-store.png";
import phone from "../../assets/ImageFolder/kuda-phone4.png";
import image from "../../assets/ImageFolder/shot.jpg";

function Head1() {
  return (
    <>
      <section className="card1-container">
        <div className="containerA">
          <h1>The money app for Africans.</h1>
          <h4>
            Make free transfer, enjoy cashless payment and earn interest on your
            saving with Kuda
          </h4>
          <div className="button-section">
            {/* // Apple Store Button */}

            <div className="btns">
              <button className="btn apple-btn">
                <img src={apple} alt="apple-store" className="img apple-logo" />
                <span>
                  <span className="small">
                    Download on the <br />
                  </span>{" "}
                  <span className="big">App Store </span>
                </span>
                <br />
              </button>

              {/*  // play Store Button */}

              <button className="btn play-store-btn">
                <img
                  src={playStore}
                  alt="play-store"
                  className="img play-logo"
                />
                <span>
                  <span className="small">
                    GET IT ON <br />
                  </span>{" "}
                  <span className="big">Google Play</span>{" "}
                </span>
                <br />
              </button>
            </div>
          </div>
        </div>

        {/*  // section 2 */}

        <img src={image} alt="sot" className="card1-image" />
      </section>
    </>
  );
}

export default Head1;

{
  /* <div className="a">
            <div className="b">
              <div className="c">
                <img src={phone} alt="phone" className="phone" />
              </div>
            </div>
          </div> */
}
