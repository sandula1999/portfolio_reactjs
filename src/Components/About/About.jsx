import React from "react";
import "./About.css";
import motivate from "../../img/mood1.png";
import team from "../../img/team.png";
import thinking from "../../img/thinking.png";
import problem from "../../img/problem.png";
import Acard from "../Aboutcard/Acard";

const About = () => {
  return (
    <div className="aboutme" id="About">
      <div className="myself">
        <span>About</span>
        <span>Me</span>
        <div class="info">
          <h3>
            <span>Name:</span>Sandula Jeewantha
          </h3>
          <h3>
            <span>Age:</span>23
          </h3>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
          <h3>
            <span>Qualification:</span>Software Engineering Undergraduate
          </h3>
          <h3>
            <span>University:</span>Cardiff Metropolitan University UK
          </h3>
        </div>
      </div>
      <div className="myselfcard">
        <div style={{ left: "14rem", top: "3rem" }}>
          <Acard emoji={motivate} heading={"Self Motivation"} />
        </div>
        <div style={{ left: "-4rem", top: "3rem" }}>
          <div
            className="blur4"
            style={{ background: "rgb (238 210 255)" }}
          ></div>
          <Acard emoji={thinking} heading={"Critical Thinking"} />
        </div>
        <div style={{ top: "20rem", left: "7rem" }}>
          <Acard emoji={problem} heading={"Problem Solving"} />
        </div>
        <div style={{ top: "20rem", left: "25rem" }}>
          <div
            className="blur4"
            style={{ background: "rgb (238 210 255)" }}
          ></div>
          <Acard emoji={team} heading={"Team Working"} />
        </div>
      </div>
    </div>
  );
};

export default About;
