import "./Personal.css";

function Personal({ dropDown }) {
  return (
    <>
      <a href="#">Personal</a>
      <span className="drop-down">{dropDown}</span>
    </>
  );
}

export default Personal;
