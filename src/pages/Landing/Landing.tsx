import React from "react";
import "./Landing.css";
import "../../App.css";

function Landing() {
  return (
    <>
      <div className="section-page">
        <div className="container pt-4 pb-4">
          <div className="navbar-wrapper" style={{ display: "flex" }}>
            <div className="navbar-box" style={{ placeContent: "start" }}>
              <h6 className="p-3">ABOUT</h6>
              <h6 className="p-3">COLLABORATION</h6>
              <h6 className="p-3">LAND</h6>
              <h6 className="p-3">TEAM</h6>
              <h6 className="p-3">FAQ</h6>
              <h6 className="p-3">TERMS</h6>
            </div>
            <div
              className="navbar-box"
              style={{ placeContent: "end", alignItems: "center" }}
            >
              <img src="" alt="" />
              <img
                className="p-1"
                src="assets/Landing/icon-dc.png"
                width="8%"
                alt=""
              />
              <img
                className="p-1"
                src="assets/Landing/icon-ig.png"
                width="8%"
                alt=""
              />
              <img
                className="p-1"
                src="assets/Landing/icon-twt.png"
                width="8%"
                alt=""
              />
              {/* <h5 className="ps-4">VIEW ON OPENSEA</h5> */}
            </div>
          </div>
        </div>
        <div className="logo">
          <img
            src="assets/Landing/logo.png"
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
