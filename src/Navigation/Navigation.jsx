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
import { IoIosMenu } from "react-icons/io";

/* let a  = "<SignIn />
          <Join />
          <CountryFlag />" */

/* let b =  />
          <Businness dropDown={<IoMdArrowDropdown />} />
          <Company dropDown={<IoMdArrowDropdown />} />
          <Help dropDown={<IoMdArrowDropdown />} /> */

// Navigation Function

function Navigation() {
  return (
    <>
      <div className="flex items-center container min-w-full shadow-lg fixed top-0 z-50 bg-white ">
        <img src={navigationImage} alt="" className="w-24  ml-4" />

        <div className="flex items-center fixed lg:left-[12rem]  space-x-6 lg:visible invisible text-indigo-900 cursor-pointer">
          <Personal dropDown={<IoMdArrowDropdown />} />
          <Businness dropDown={<IoMdArrowDropdown />} />
          <Company dropDown={<IoMdArrowDropdown />} />
          <Help dropDown={<IoMdArrowDropdown />} />
        </div>

        <div className="flex items-center absolute right-12 space-x-6 lg:visible invisible">
          <SignIn />
          <Join />
          <CountryFlag />
        </div>
        <div>
          {" "}
          <IoIosMenu className="absolute lg:hidden right-8 text-2xl top-6 cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default Navigation;
