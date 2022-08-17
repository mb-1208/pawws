import React from "react";
import "./Footer.css";
import "../../App.css";

function Footer() {
  return (
    <>
      <section className="section-footer" id="footer">
        <div className="section-footer-wrap">
          <div
            className="row container"
            style={{
              margin: "0 auto",
              width: "100vw",
              placeSelf: "end",
              justifyContent: "center",
            }}
          >
            <div className="col-sm-5 set-logo-footer">
              <img src="assets/Landing/pawws.png" width="40%" alt="" />
            </div>
            <div className="col-sm-7 text-center col-7-footer">
              <a className="p-2" href="#discord">
                <img src="assets/Footer/icon-dc.png" width="8%" alt="" />
              </a>
              {/* <a className="p-2" href="">
                <img src="assets/Footer/icon-ig.png" width="8%" alt="" />
              </a> */}
              <a className="p-2" target="_blank" href="https://twitter.com/_Pawws?s=20&t=rLg0aRnT7ob5jr88wFMZRA">
                <img src="assets/Footer/icon-twt.png" width="8%" alt="" />
              </a>
              <div className="link-section">
                <a className="section-title px-3" href="#story">
                  STORY
                </a>
                {/* <a className="section-title px-3" href="#collection">
                  COLLECTION
                </a> */}
                <a className="section-title px-3" href="#roadmap">
                  ROADMAP
                </a>
                {/* <a className="section-title px-3" href="#team">
                  TEAM
                </a> */}
                <a className="section-title px-3" href="#faq">
                  FAQ
                </a>
                {/* <a className="section-title px-3 terms-position" href="#terms">
                  TERMS
                </a> */}
              </div>
            </div>
          </div>
          <div
            className="container text-white"
            style={{ margin: "0 auto", alignSelf: "center" }}
          >
            <div className="text-center" style={{ alignSelf: "end" }}>
              <a className="section-title" href="">
                <h5 className="ether-text">Etherscan</h5>
              </a>
              <h6 className="copyright-text">
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
