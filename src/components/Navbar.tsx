import React from "react";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container px-4 px-lg-5">
          <div>
            <a className="navbar-brand" href="#page-top">
              <img src="assets/Landing/icon-dc.png" alt="" style={{height: '5vh'}} />
            </a>
            <a className="navbar-brand" href="#page-top">
              <img src="assets/Landing/icon-twt.png" alt="" style={{height: '5vh'}} />
            </a>
            <a className="navbar-brand" href="#page-top">
              <img src="assets/Landing/icon-ig.png" alt="" style={{height: '5vh', width: '2.5vw'}} />
            </a>
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
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  COLLABORATION
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#signup">
                  LAND
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#signup">
                  TEAM
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#signup">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#signup">
                  TERMS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
