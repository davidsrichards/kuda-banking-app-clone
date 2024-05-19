import "./Help.css";

function Help({ dropDown }) {
  return (
    <>
      <a href="#">Help</a>{" "}
      <span className="drop-down relative top-1 right-4">{dropDown}</span>
    </>
  );
}

export default Help;
