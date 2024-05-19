import "./CountryFlag.css";
import flag from "../../assets/ImageFolder/nigeria-flag.png";


function CountryFlag() {
  return (
    <>
      <a href="#" className="sm border rounded-full px-2 py-1 bg-green-100">
        <img src={flag} alt="flag" className="flag w-6 h-8" />
      </a>
    </>
  );
}

export default CountryFlag;
