import React from "react";
import "./Landing.css";
import "../../App.css";

function Landing() {
  return (
    <>
      <div className="section-page">
        <img
          className="ground-donut"
          src="assets/Landing/donut-landing.gif"
          alt=""
        />
        <div className="logo">
          <img
            src="assets/Landing/pawws-text.png"
            alt=""
            style={{ height: "15vh" }}
          />
        </div>
        <div id="cursor"></div>
        <div className="chara-1">
          <img
            id="chara1"
            src="assets/Landing/chara-1.gif"
            alt=""
            style={{ height: "95vh" }}
          />
        </div>
        <div className="chara-2">
          <img
            id="chara2"
            src="assets/Landing/chara-2.gif"
            alt=""
            style={{ height: "80vh" }}
          />
        </div>
        <div className="chara-3">
          <img
            id="chara3"
            src="assets/Landing/chara-3.gif"
            alt=""
            style={{ height: "65vh" }}
          />
        </div>
        <div className="chara-4">
          <img
            id="chara4"
            src="assets/Landing/chara-4.gif"
            alt=""
            style={{ height: "80vh" }}
          />
        </div>
      </div>
    </>
  );
}

export default Landing;
