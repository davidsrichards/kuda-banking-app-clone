// importing Modules

import "./Card17Handles.css";

import { FaXTwitter } from "react-icons/fa6";

import { IoCameraOutline } from "react-icons/io5";

import { FaFacebookF } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";
import { SiMetasploit } from "react-icons/si";

// card17Handles function

function Card17Handles() {
  return (
    <>
      <div className="card17-handle-container space-y-4 pl-6">
        <div className="card17-contact pb-4 font-bold text-indigo-900">
          Contact
        </div>
        <a href="#" className="card17-handle-ancho font-bold text-indigo-900">
          help@kuda.com
        </a>
        <div className="card17-handle-images flex items-center justify-center space-x-2">
          <span className="p-3 rounded-full text-[1.2rem] bg-indigo-100">
            <FaXTwitter className="card17-handle-logo " />
          </span>
          <span className="p-3 rounded-full text-[1.2rem] bg-indigo-100">
            <IoCameraOutline className="card17-handle-logo " />
          </span>
          <span className="p-3 rounded-full text-[1.2rem] bg-indigo-100">
            <FaFacebookF className="card17-handle-logo " />
          </span>
          <span className="p-3 rounded-full text-[1.2rem] bg-indigo-100">
            <FaYoutube className="card17-handle-logo " />
          </span>
          <span className="p-3 rounded-full text-[1.2rem] bg-indigo-100">
            <SiMetasploit className="card17-handle-logo " />
          </span>
          <span className="p-3 rounded-full text-[1.2rem] bg-indigo-100">
            <FaLinkedinIn className="card17-handle-logo " />
          </span>
        </div>
      </div>
    </>
  );
}

export default Card17Handles;
