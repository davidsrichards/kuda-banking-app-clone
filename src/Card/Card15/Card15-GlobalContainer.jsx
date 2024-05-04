function Card15GlobalContainer({ image, textA, textB, width, right }) {
  return (
    <>
      <button className="card15-btn">
        <div className="card15-button-container">
          <img
            src={image}
            alt="apple"
            className="card15-apple"
            style={{ width: width, position: "relative", right: right }}
          />
          <div className="last-container">
            <span className="small">{textA}</span>
            <span className="big">{textB}</span>
          </div>
        </div>
      </button>
    </>
  );
}

export default Card15GlobalContainer;
