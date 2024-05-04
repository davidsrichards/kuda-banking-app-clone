import "./CountryFlag.css";
import flag from "../../assets/ImageFolder/nigeria-flag.png";

function CountryFlag() {
  return (
    <>
      <a href="#" className="sm">
        <span className="flag-container">
          <img src={flag} alt="flag" className="flag" />
        </span>
      </a>
    </>
  );
}

export default CountryFlag;
