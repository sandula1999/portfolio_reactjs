import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Wave from "../../img/wave.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>@Copyright | Sandula Jeewantha | Developed Using React JS</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/_xandu1a__/">
            <Insta color="black" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/sandula.jeewantha.9/">
            <Facebook color="black" size={"3rem"} />
          </a>
          <a href="https://github.com/sandula1999">
            <Gitub color="black" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/sandula-jeewantha-915bb0245/">
            <Linkedin color="black" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
