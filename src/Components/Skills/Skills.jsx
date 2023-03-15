import React from "react";
import "./Skills.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "../../img/CV.pdf";

const Skills = () => {
  return (
    <div className="skills" id="Skills">
      <div className="awesome">
        <span>My</span>
        <span>Skills</span>
        <span>
          The Knowledge Gain From Modules Such As Fundementals In <br />
          Programming, Object Oriented Programming,
          <br /> Computer Architecture, Mobile Application Development, <br />
          Database Design & Development, Web Apploication Development,
          <br /> With Good Grades Will <br /> Allow Me To Apply Theoretical
          Knowledge To The Practical Scenarios In <br />
          The Computing Software Field.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"UI/UX DESIGN"}
            detail={"Figma, Sketch, Balsamiq "}
          />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <div
            className="blur"
            style={{ background: "rgb (238 210 255)" }}
          ></div>
          <Card
            emoji={Glasses}
            heading={"Web Developemnt"}
            detail={"HTML / CSS / WORDPRESS / PHP / JS / REACT JS "}
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"OTHER"}
            detail={"Android Studio / C++ / c# / JAVA / MYSQL"}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
