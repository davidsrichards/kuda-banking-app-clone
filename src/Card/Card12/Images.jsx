import "./Images.css";

function Images({ image, message }) {
  return (
    <>
      <div className="card12-images">
        <span className="card12-img im">{image}</span>
        <span className="card12-image2 im im2"> {message}</span>
      </div>
    </>
  );
}

export default Images;
