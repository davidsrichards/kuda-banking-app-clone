// Importing Navigation Image

import navigationImage from "../assets/ImageFolder/img1.svg";

// Importing modules

import "./Navigation.css";
import Personal from "./Personal/Personal";
import Businness from "./Businness/Businness";
import Company from "./Company/Company";
import Help from "./Help/Help";
import SignIn from "./SignIn/SignIn";
import Join from "./Join/Join";
import CountryFlag from "./CountryFlag/CountryFlag";
import { IoMdArrowDropdown } from "react-icons/io";

// Navigation Function

function Navigation() {
  return (
    <>
      <nav className="navigation-container">
        <img src={navigationImage} alt="image" className="navigation-image" />
        <div className="mr">
          <Personal dropDown={<IoMdArrowDropdown />} />
          <Businness dropDown={<IoMdArrowDropdown />} />
          <Company dropDown={<IoMdArrowDropdown />} />
          <Help dropDown={<IoMdArrowDropdown />} />
        </div>

        <div className="ml">
          <SignIn />
          <Join />
          <CountryFlag />
        </div>
      </nav>
    </>
  );
}

export default Navigation;
