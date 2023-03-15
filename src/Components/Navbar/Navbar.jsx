import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div
          className="blurr"
          style={{ background: "rgb (238 210 255)" }}
        ></div>

        <div className="n-name">sandula Jeewantha</div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>

            <Link spy={true} to="About" smooth={true}>
              <li>About</li>
            </Link>
            <Link spy={true} to="Skills" smooth={true}>
              <li>Skills</li>
            </Link>
            <Link spy={true} to="Education" smooth={true}>
              <li>Education</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <button className="button n-buton">
          <Link spy={true} to="Contact" smooth={true}>
            Contact Me
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
