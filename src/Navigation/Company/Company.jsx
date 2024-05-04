import "./Company.css";
function Company({ dropDown }) {
  return (
    <>
      <a href="#">Company</a> <span className="drop-down">{dropDown}</span>
    </>
  );
}

export default Company;
