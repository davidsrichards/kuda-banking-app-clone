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
      <div className="card17-handle-container">
        <div className="card17-contact">Contact</div>
        <a href="#" className="card17-handle-ancho">
          help@kuda.com
        </a>
        <div className="card17-handle-images">
          <FaXTwitter className="card17-handle-logo" />
          <IoCameraOutline className="card17-handle-logo" />
          <FaFacebookF className="card17-handle-logo" />
          <FaYoutube className="card17-handle-logo" />
          <SiMetasploit className="card17-handle-logo" />
          <FaLinkedinIn className="card17-handle-logo" />
        </div>
      </div>
    </>
  );
}

export default Card17Handles;
