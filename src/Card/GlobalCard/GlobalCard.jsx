// importing modules
import DefaultProps from "../DefaultProps";

// GlobalCard function
function GlobalCard({ headings, paragraph, ancho, arrow, img }) {
  return (
    <>
      <div className="card3A">
        <div className="heads">
          <h1>{headings}</h1>
        </div>
        <div className="note">{paragraph}</div>
        <p className="">
          <a href="#" className="ancho">
            {ancho}
            <span className="arrow">{arrow}</span>
          </a>
        </p>
      </div>

      <div className="card3B">
        <img src={img} alt="Image" className="ai-img" />
      </div>
    </>
  );
}

GlobalCard.defaultProps = {
  headings: <DefaultProps />,
  paragraph: "we are still waiting for you to fill the paragraph",
  ancho: "this is optional",
};

export default GlobalCard;
