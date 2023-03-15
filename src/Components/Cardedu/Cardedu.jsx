import React from "react";
import "./Cardedu.css";

const Cardedu = ({ icon, heading, time, detail, desc }) => {
  return (
    <div className="cardedu">
      <img src={icon} alt="" />
      <span>{heading}</span>
      <span>{time}</span>
      <span>{detail}</span>
      <span>{desc}</span>
    </div>
  );
};

export default Cardedu;
