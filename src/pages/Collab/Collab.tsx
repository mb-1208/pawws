import React from "react";
import "./Collab.css";
import "../../App.css";

function Collab() {
  return (
    <>
      <div className="section-collab" id="collection">
        <div className="title-collab">
          <img
            className="collect-title"
            src="assets/Collab/title-collab.gif"
            alt=""
          />
        </div>
        <section id="micro-slider">
          <div className="micro-slider">
            <div className="slider-item">
              <img src="assets/Collab/COLLECTION 1.png" width="100%" alt="" />
            </div>
            <div className="slider-item">
              <img src="assets/Collab/COLLECTION 2.png" width="100%" alt="" />
            </div>
            <div className="slider-item">
              <img src="assets/Collab/COLLECTION 3.png" width="100%" alt="" />
            </div>
            <div className="slider-item">
              <img src="assets/Collab/COLLECTION 4.png" width="100%" alt="" />
            </div>
            <div className="slider-item">
              <img src="assets/Collab/COLLECTION 5.png" width="100%" alt="" />
            </div>
            <div className="slider-item">
              <img src="assets/Collab/COLLECTION 6.png" width="100%" alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Collab;
