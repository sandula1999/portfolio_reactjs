import React from "react";
import "./Intro.css";
import Github from "../../../img/github.png";
import LinkedIn from "../../../img/linkedin.png";
import Instagram from "../../../img/instagram.png";
import Vector1 from "../../../img/Vector1.png";
import Vector2 from "../../../img/Vector2.png";
import sandula from "../../../img/sandula.PNG";
import glassesimoji from "../../../img/glassesimoji.png";
import thumbup from "../../../img/thumbup.png";
import crown from "../../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span> <span> Sandula Jeewantha</span>
          <span>
            I Am An Enthusiastic Software Engineering Undergraduate Student Who
            Is Interested In Learning And Gaining Knowledge With Experiences. My
            Effort Is Growing As A Good Person With A Good Personality, As A
            Professional And Move Forward At Every Time. Self-Learning,
            Researching, And Mistakes Are Good Lessons To Success In My Future
            Endeavors.
          </span>
        </div>
        <button className="button n-buton">
          <Link spy={true} to="Contact" smooth={true}>
            Contact Me
          </Link>
        </button>
        <div className="i-icons">
          <a href="https://github.com/sandula1999">
            <img src={Github} alt="" />
          </a>

          <a href="https://www.linkedin.com/in/sandula-jeewantha-915bb0245/">
            <img src={LinkedIn} alt="" />
          </a>

          <a href="https://www.instagram.com/_xandu1a__/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right" style={{ top: "-50%", left: "6%" }}>
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={sandula} alt="" />
        <img src={glassesimoji} alt="" />

        <div style={{ top: "-15%", left: "48%" }} className="floating-div">
          <FloatingDiv
            image={crown}
            txt1="Softaware"
            txt2="Engineering"
            txt3="Undergaraduate"
          />
        </div>
        <div style={{ top: "16rem", left: "-5rem" }} className="floating-div">
          <FloatingDiv image={thumbup} txt1="Web" txt2="Development" />
        </div>
        <div className="blur" style={{ background: "rgb (238 210 255)" }}></div>
        <div className="blur2" style={{ background: "#C1F5FF" }}></div>
      </div>
    </div>
  );
};

export default Intro;
