import React from "react";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light absolute-top pt-4 pb-4"
        id="mainNav"
        style={{zIndex: '999'}}
      >
        <div className="container px-4 px-lg-5">
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#story">
                  STORY
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#collection">
                  COLLECTION
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#roadmap">
                  ROADMAP
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#team">
                  FAQ
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#terms">
                  TERMS
                </a>
              </li> */}
            </ul>
          </div>
          <div style={{paddingLeft: '1rem '}}>
            <a className="navbar-brand" href="#discord">
              <img
                src="assets/Landing/icon-dc.png"
                alt=""
                style={{ height: "5vh" }}
              />
            </a>
            <a className="navbar-brand" target="_blank" href="https://twitter.com/_Pawws?s=20&t=rLg0aRnT7ob5jr88wFMZRA">
              <img
                src="assets/Landing/icon-twt.png"
                alt=""
                style={{ height: "5vh" }}
              />
            </a>
            {/* <a className="navbar-brand" href="#page-top">
              <img
                src="assets/Landing/icon-ig.png"
                alt=""
                style={{ height: "5vh" }}
              />
            </a> */}
          </div>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
