import React from "react";
import "./FloatingDiv.css";

const FloatingDiv = ({ image, txt1, txt2, txt3 }) => {
  return (
    <div className="floatingdiv">
      <img src={image} alt="" />
      <span>
        {txt1}
        <br />
        {txt2}
        <br />
        {txt3}
      </span>
    </div>
  );
};

export default FloatingDiv;
