import React from "react";
import "./Collab.css";
import "../../App.css";

function Collab() {
  return (
    <>
      <div className="section-collab">
        {/* <div className="art-position">
          <img src="assets/Roadmap/art.gif" width="100%" alt="" />
        </div> */}
        {/* <div className="art-position">
          <img src="assets/Roadmap/cloud.gif" width="100%" alt="" />
        </div> */}
        <div className="art-position">
          <img src="https://firebasestorage.googleapis.com/v0/b/ethstorage-fe9dd.appspot.com/o/Pawws%2Fmountain.gif?alt=media&token=f841c0b8-cd96-4031-9430-d12d4ef1fb9e" alt="" style={{height: '100vh', width: '100vw'}} />
        </div>
        <div className="title-collab">
          <img src="assets/Collab/title-collab.gif" alt="" style={{height: '45vh'}} />
        </div>
      </div>
    </>
  );
}

export default Collab;
