// importing modules
import DefaultProps from "../DefaultProps";

// GlobalCard function
function GlobalCard({ headings, paragraph, ancho, arrow, img }) {
  return (
    <>
      <div className="card3A space-y-4 m-auto mx-auto">
        <div className="heads">
          <h1 className="text-4xl">{headings}</h1>
        </div>
        <div className="note text-[18px]">{paragraph}</div>
        <p className="">
          <a href="#" className="ancho">
            {ancho}
            <span className="arrow">{arrow}</span>
          </a>
        </p>
      </div>

      <p className="card3B">
        <img src={img} alt="Image" className="ai-img w-[42rem]" />
      </p>
    </>
  );
}

GlobalCard.defaultProps = {
  headings: <DefaultProps />,
  paragraph: "we are still waiting for you to fill the paragraph",
  ancho: "this is optional",
};

export default GlobalCard;
