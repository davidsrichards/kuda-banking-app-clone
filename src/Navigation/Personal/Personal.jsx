import "./Personal.css";

function Personal({ dropDown }) {
  return (
    <>
      <a href="#">Personal</a>
      <span className="drop-down relative top-1 right-4">{dropDown}</span>
    </>
  );
}

export default Personal;
