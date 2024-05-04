// importing Modules

import "./Card14.css";
import Table from "./Table/Table";
import image from "../../assets/ImageFolder/img1.svg";
// Card14 function

function Card14() {
  return (
    <>
      <div className="card3-container card14-container">
        <img src={image} alt="kuda-image" className="card14-image" />
        <div className="c14">
          <Table />
        </div>
      </div>
    </>
  );
}

export default Card14;
