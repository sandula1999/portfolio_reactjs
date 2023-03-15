import React from "react";
import "./Acard.css";

const Acard = ({ emoji, heading }) => {
  return (
    <div className="acard">
      <img src={emoji} alt="" />
      <span>{heading}</span>
    </div>
  );
};

export default Acard;
