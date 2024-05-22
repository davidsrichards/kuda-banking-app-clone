// importing Modules

import "./Card17.css";
import Card17Table from "./Card17Table/Card17Table";
import Card17Handles from "./Card17Handles/Card17Handles";

// card17 function

function Card17() {
  return (
    <>
      <section className="card3-container card17-container">
        <div className="card17-inner-container space-x-8 space-y-6">
          <Card17Handles />
          <Card17Table />
        </div>
      </section>
    </>
  );
}

export default Card17;
