import React from "react";
import "./Footer.css";
import "../../App.css";

function Footer() {
  return (
    <>
      <section className="section-footer">
        <div className="section-footer-1">
          <div className="row container" style={{ margin: "0 auto" }}>
            <div className="col-sm-5">
              <img src="assets/footer/logo.png" width="40%" alt="" />
            </div>
            <div className="col-sm-7 text-center" style={{alignSelf : 'center'}}>
              <a className="p-2" href="">
                <img src="assets/Footer/icon-dc.png" width="8%" alt="" />
              </a>
              <a className="p-2" href="">
                <img src="assets/Footer/icon-ig.png" width="8%" alt="" />
              </a>
              <a className="p-2" href="">
                <img src="assets/Footer/icon-twt.png" width="8%" alt="" />
              </a>
              <a className="p-2" href="">
                <img src="assets/Footer/dc-footer.png" width="25%" alt="" />
              </a>
              <div className="link-section">
                <a className="section-title px-3" href="">
                  ABOUT
                </a>
                <a className="section-title px-3" href="">
                  COLLABORATION
                </a>
                <a className="section-title px-3" href="">
                  LAND
                </a>
                <a className="section-title px-3" href="">
                  TEAM
                </a>
                <a className="section-title px-3" href="">
                  FAQ
                </a>
                <a className="section-title px-3" href="">
                  TERMS
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="section-footer-2">
          <div
            className="container text-white"
            style={{ margin: "0 auto" }}
          >
            <div className="text-center" style={{ alignSelf: "end" }}>
              <a className="section-title" href="">
                <h5>Etherscan</h5>
              </a>
              <h6>
                COPYRIGHT © 2022 PAWWS. ALL RIGHTS RESERVED.
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
