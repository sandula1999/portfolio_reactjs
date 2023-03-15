import React from "react";
import "./Education.css";
import Cardedu from "../Cardedu/Cardedu";
import gradu from "../../img/graduationhat.png";
import school from "../../img/school.png";
const Education = () => {
  return (
    <div className="education" id="Education">
      <div className="myedu">
        <span>My</span>
        <span>Education</span>
      </div>
      <div className="educard">
        <div style={{ left: "-1rem" }}>
          <div
            className="blurP"
            style={{ background: "rgb (238 210 255)" }}
          ></div>
          <Cardedu
            icon={gradu}
            heading={"HD in Computing & Software Engineering"}
            time={"2021-2022"}
            detail={"Cardiff Metropolitant University UK"}
            desc={"ICBT CAMPUS"}
          />
        </div>

        <div style={{ left: "19rem" }}>
          <div className="blurN" style={{ background: "#C1F5FF" }}></div>

          <Cardedu
            icon={gradu}
            heading={"BSc (HONS) Computing & Software Engineering"}
            time={"Starting from may-2023"}
            detail={"Cardiff Metropolitant University UK"}
            desc={"ICBT CAMPUS"}
          />
        </div>
        <div style={{ left: "39rem" }}>
          <Cardedu
            icon={school}
            time={"2005-2015"}
            heading={"GCE Ordinary Level"}
            detail={"Bandarawela Central College"}
            desc={" Bandarwela"}
          />
        </div>
        <div style={{ left: "59rem" }}>
          <Cardedu
            icon={school}
            time={"2015-2018"}
            heading={"Anvanced Level In Commerce Stream"}
            detail={"Bandarawela Central College"}
            desc={" Bandarwela"}
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
