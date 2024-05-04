import "./Help.css";

function Help({ dropDown }) {
  return (
    <>
      <a href="#">Help</a> <span className="drop-down">{dropDown}</span>
    </>
  );
}

export default Help;
