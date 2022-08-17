import React from "react";
import { IconBrandTwitter } from "@tabler/icons";
import "./Team.css";
import "../../App.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function Team() {
  return (
    <>
      <div className="section-team" id="team">
        <div id="content-wrapper">
          <div id="row-top">
            <div className="text-center pt-4 mt-3">
              <img
                className="team-title"
                src="assets/Team/title-team.gif"
                alt=""
              />
            </div>
          </div>
          <div id="row-bottom">
            <div className="container pb-4">
              <div className="row team-box-desktop">
                <div className="col-sm-3 sm-set">
                  <figure className="img-container img1">
                    <div style={{ position: "relative" }}>
                      <img
                        src="assets/Team/team1.gif"
                        alt=""
                        style={{ width: "100%" }}
                      />
                      <a className="icon-team1" href="/">
                        <IconBrandTwitter color="white" size={40} />
                      </a>
                    </div>
                    <div className="label-team text-center text-white">
                      <h4 style={{ margin: "0" }}>John Doe</h4>
                      <label className="category">Founder</label>
                    </div>
                    <span className="img-content-hover">
                      <h4 className="title">John Doe</h4>
                      <label className="category">Founder</label>
                    </span>
                  </figure>
                </div>
                <div className="col-sm-3 sm-set">
                  <figure className="img-container img2">
                    <div style={{ position: "relative" }}>
                      <img
                        src="assets/Team/team2.gif"
                        alt=""
                        style={{ width: "100%" }}
                      />
                      <a className="icon-team2" href="/">
                        <IconBrandTwitter color="white" size={40} />
                      </a>
                    </div>
                    <div className="label-team text-center text-white">
                      <h4 style={{ margin: "0" }}>John Doe</h4>
                      <label className="category">CO-Founder</label>
                    </div>
                    <span className="img-content-hover">
                      <h4 className="title">John Doe</h4>
                      <label className="category">CO-Founder</label>
                    </span>
                  </figure>
                </div>
                <div className="col-sm-3 sm-set">
                  <figure className="img-container img3">
                    <div style={{ position: "relative" }}>
                      <img
                        src="assets/Team/team3.gif"
                        alt=""
                        style={{ width: "100%" }}
                      />
                      <a className="icon-team3" href="/">
                        <IconBrandTwitter color="white" size={40} />
                      </a>
                    </div>
                    <div className="label-team text-center text-white">
                      <h4 style={{ margin: "0" }}>John Doe</h4>
                      <label className="category">Marketing</label>
                    </div>
                    <span className="img-content-hover">
                      <h4 className="title">John Doe</h4>
                      <label className="category">Marketing</label>
                    </span>
                  </figure>
                </div>
                <div className="col-sm-3 sm-set">
                  <figure className="img-container img4">
                    <div style={{ position: "relative" }}>
                      <img
                        src="assets/Team/team4.gif"
                        alt=""
                        style={{ width: "100%" }}
                      />
                      <a className="icon-team4" href="/">
                        <IconBrandTwitter color="white" size={40} />
                      </a>
                    </div>
                    <div className="label-team text-center text-white">
                      <h4 style={{ margin: "0" }}>John Doe</h4>
                      <label className="category">Product Manager</label>
                    </div>
                    <span className="img-content-hover">
                      <h4 className="title">John Doe</h4>
                      <label className="category">Product Manager</label>
                    </span>
                  </figure>
                </div>
                <div className="col-sm-3 sm-set img5">
                  <figure className="img-container">
                    <div style={{ position: "relative" }}>
                      <img
                        src="assets/Team/team5.gif"
                        alt=""
                        style={{ width: "100%" }}
                      />
                      <a className="icon-team5" href="/">
                        <IconBrandTwitter color="white" size={40} />
                      </a>
                    </div>
                    <div className="label-team text-center text-white">
                      <h4 style={{ margin: "0" }}>John Doe</h4>
                      <label className="category">Artist</label>
                    </div>
                    <span className="img-content-hover">
                      <h4 className="title">John Doe</h4>
                      <label className="category">Artist</label>
                    </span>
                  </figure>
                </div>
                <div className="col-sm-3 sm-set">
                  <figure className="img-container img6">
                    <div style={{ position: "relative" }}>
                      <img
                        src="assets/Team/team6.gif"
                        alt=""
                        style={{ width: "100%" }}
                      />
                      <a className="icon-team6" href="/">
                        <IconBrandTwitter color="white" size={40} />
                      </a>
                    </div>
                    <div className="label-team text-center text-white">
                      <h4 style={{ margin: "0" }}>John Doe</h4>
                      <label className="category">Artist</label>
                    </div>
                    <span className="img-content-hover">
                      <h4 className="title">John Doe</h4>
                      <label className="category">Artist</label>
                    </span>
                  </figure>
                </div>
                <div className="col-sm-3 sm-set">
                  <figure className="img-container img7">
                    <div style={{ position: "relative" }}>
                      <img
                        src="assets/Team/team7.gif"
                        alt=""
                        style={{ width: "100%" }}
                      />
                      <a className="icon-team7" href="/">
                        <IconBrandTwitter color="white" size={40} />
                      </a>
                    </div>
                    <div className="label-team text-center text-white">
                      <h4 style={{ margin: "0" }}>John Doe</h4>
                      <label className="category">Developer</label>
                    </div>
                    <span className="img-content-hover">
                      <h4 className="title">John Doe</h4>
                      <label className="category">Developer</label>
                    </span>
                  </figure>
                </div>
                <div className="col-sm-3 sm-set">
                  <figure className="img-container img8">
                    <div style={{ position: "relative" }}>
                      <img
                        src="assets/Team/team8.gif"
                        alt=""
                        style={{ width: "100%" }}
                      />
                      <a className="icon-team8" href="/">
                        <IconBrandTwitter color="white" size={40} />
                      </a>
                    </div>
                    <div className="label-team text-center text-white">
                      <h4 style={{ margin: "0" }}>John Doe</h4>
                      <label className="category">Developer</label>
                    </div>
                    <span className="img-content-hover">
                      <h4 className="title">John Doe</h4>
                      <label className="category">Developer</label>
                    </span>
                  </figure>
                </div>
              </div>
              <div className="team-box-mobile">
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide className="swiper-mobile">
                    <div className="row">
                      <div className="col-sm-3 sm-set">
                        <figure className="img-container img1">
                          <div style={{ position: "relative" }}>
                            <img
                              src="assets/Team/team1.gif"
                              alt=""
                              style={{ width: "100%" }}
                            />
                            <a className="icon-team1" href="/">
                              <IconBrandTwitter color="white" size={40} />
                            </a>
                          </div>
                          <div className="label-team text-center text-white">
                            <h4 style={{ margin: "0" }}>John Doe</h4>
                            <label className="category">Founder</label>
                          </div>
                        </figure>
                      </div>
                      <div className="col-sm-3 sm-set">
                        <figure className="img-container img2">
                          <div style={{ position: "relative" }}>
                            <img
                              src="assets/Team/team2.gif"
                              alt=""
                              style={{ width: "100%" }}
                            />
                            <a className="icon-team2" href="/">
                              <IconBrandTwitter color="white" size={40} />
                            </a>
                          </div>
                          <div className="label-team text-center text-white">
                            <h4 style={{ margin: "0" }}>John Doe</h4>
                            <label className="category">CO-Founder</label>
                          </div>
                        </figure>
                      </div>
                      <div className="col-sm-3 sm-set">
                        <figure className="img-container img3">
                          <div style={{ position: "relative" }}>
                            <img
                              src="assets/Team/team3.gif"
                              alt=""
                              style={{ width: "100%" }}
                            />
                            <a className="icon-team3" href="/">
                              <IconBrandTwitter color="white" size={40} />
                            </a>
                          </div>
                          <div className="label-team text-center text-white">
                            <h4 style={{ margin: "0" }}>John Doe</h4>
                            <label className="category">Marketing</label>
                          </div>
                          <span className="img-content-hover">
                            <h4 className="title">John Doe</h4>
                            <label className="category">Marketing</label>
                          </span>
                        </figure>
                      </div>
                      <div className="col-sm-3 sm-set">
                        <figure className="img-container img4">
                          <div style={{ position: "relative" }}>
                            <img
                              src="assets/Team/team4.gif"
                              alt=""
                              style={{ width: "100%" }}
                            />
                            <a className="icon-team4" href="/">
                              <IconBrandTwitter color="white" size={40} />
                            </a>
                          </div>
                          <div className="label-team text-center text-white">
                            <h4 style={{ margin: "0" }}>John Doe</h4>
                            <label className="category">Product Manager</label>
                          </div>
                          <span className="img-content-hover">
                            <h4 className="title">John Doe</h4>
                            <label className="category">Product Manager</label>
                          </span>
                        </figure>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-mobile">
                    <div className="row">
                      <div className="col-sm-3 sm-set img5">
                        <figure className="img-container">
                          <div style={{ position: "relative" }}>
                            <img
                              src="assets/Team/team5.gif"
                              alt=""
                              style={{ width: "100%" }}
                            />
                            <a className="icon-team5" href="/">
                              <IconBrandTwitter color="white" size={40} />
                            </a>
                          </div>
                          <div className="label-team text-center text-white">
                            <h4 style={{ margin: "0" }}>John Doe</h4>
                            <label className="category">Artist</label>
                          </div>
                          <span className="img-content-hover">
                            <h4 className="title">John Doe</h4>
                            <label className="category">Artist</label>
                          </span>
                        </figure>
                      </div>
                      <div className="col-sm-3 sm-set">
                        <figure className="img-container img6">
                          <div style={{ position: "relative" }}>
                            <img
                              src="assets/Team/team6.gif"
                              alt=""
                              style={{ width: "100%" }}
                            />
                            <a className="icon-team6" href="/">
                              <IconBrandTwitter color="white" size={40} />
                            </a>
                          </div>
                          <div className="label-team text-center text-white">
                            <h4 style={{ margin: "0" }}>John Doe</h4>
                            <label className="category">Artist</label>
                          </div>
                          <span className="img-content-hover">
                            <h4 className="title">John Doe</h4>
                            <label className="category">Artist</label>
                          </span>
                        </figure>
                      </div>
                      <div className="col-sm-3 sm-set">
                        <figure className="img-container img7">
                          <div style={{ position: "relative" }}>
                            <img
                              src="assets/Team/team7.gif"
                              alt=""
                              style={{ width: "100%" }}
                            />
                            <a className="icon-team7" href="/">
                              <IconBrandTwitter color="white" size={40} />
                            </a>
                          </div>
                          <div className="label-team text-center text-white">
                            <h4 style={{ margin: "0" }}>John Doe</h4>
                            <label className="category">Developer</label>
                          </div>
                          <span className="img-content-hover">
                            <h4 className="title">John Doe</h4>
                            <label className="category">Developer</label>
                          </span>
                        </figure>
                      </div>
                      <div className="col-sm-3 sm-set">
                        <figure className="img-container img8">
                          <div style={{ position: "relative" }}>
                            <img
                              src="assets/Team/team8.gif"
                              alt=""
                              style={{ width: "100%" }}
                            />
                            <a className="icon-team8" href="/">
                              <IconBrandTwitter color="white" size={40} />
                            </a>
                          </div>
                          <div className="label-team text-center text-white">
                            <h4 style={{ margin: "0" }}>John Doe</h4>
                            <label className="category">Developer</label>
                          </div>
                          <span className="img-content-hover">
                            <h4 className="title">John Doe</h4>
                            <label className="category">Developer</label>
                          </span>
                        </figure>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          {/* <figure className="img-container">
            <img
              className="img-hov"
              src="https://source.unsplash.com/P44RIGl9V54"
            />
            <span className="img-content-hover">
              <h2 className="title">Wrist Watch</h2>
              <h3 className="category">Showcase</h3>
            </span>
          </figure> */}
        </div>
      </div>
    </>
  );
}

export default Team;
