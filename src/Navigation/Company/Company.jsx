import "./Company.css";
function Company({ dropDown }) {
  return (
    <>
      <a href="#">Company</a>{" "}
      <span className="drop-down relative top-1 right-4">{dropDown}</span>
    </>
  );
}

export default Company;
