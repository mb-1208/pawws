import React from "react";
import "./Roadmap.css";
import "../../App.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function Roadmap() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <div className="section-roadmap" id="roadmap">
        <div className="title-roadmap">
          <img
            className="roadmap-title"
            src="assets/Roadmap/title-roadmap.gif"
            alt=""
          />
        </div>
        <div className="roadmap-desktop">
          <div className="phase-1">
            <h6 style={{ fontSize: "3.5vh" }}>
              Phase I: Launching Collections
            </h6>
            <p style={{ fontSize: "2.5vh", fontWeight: "light" }}>
              ◎ Launch Discord and Website <br />
              ◎ Reward the growing community with rewards including ETH, NFTs,
              and special roles in the community with whitelist benefits <br />◎
              Launch the 8,888 PAWWS collection.
            </p>
          </div>
          <div className="phase-2">
            <h6 style={{ fontSize: "3.5vh" }}>
              Phase II: Community & Connection
            </h6>
            <p style={{ fontSize: "2.5vh", fontWeight: "light" }}>
              ◎ Activate our DAO system that will allow project holders to have
              a voice power on all major decisions that come to the project
              through Snapshots <br />◎ HODLERS will currently be rewarded with
              PAWWS and ETH NFTs <br />
              ◎ Gift printing will be used <br />◎ The official merch store will
              be released to all current HODLERS with access to high-quality
              merchandise associated with the PAWWS brand
            </p>
          </div>
          <div className="phase-3">
            <h6 style={{ fontSize: "3.5vh" }}>Phase III: Public Service</h6>
            <p style={{ fontSize: "2.5vh", fontWeight: "light" }}>
              ◎ Activate and fund community and charity wallets. (The DAO system
              will be used to decide which charities to consider) <br />
              ◎ FIRST IRL MEETING <br />◎ Merchandise stores released to the
              Public (limited design and quantity)
            </p>
          </div>
          <div className="phase-4">
            <h6 style={{ fontSize: "3.5vh" }}>
              Phase IV: Raritytools and ranking (pApps)
            </h6>
            <p style={{ fontSize: "2.5vh", fontWeight: "light" }}>
              ◎ To be Announce
            </p>
          </div>
          <div className="phase-5">
            <h6 style={{ fontSize: "3.5vh" }}>Stage V: P2E PAWSS</h6>
            <p style={{ fontSize: "2.5vh", fontWeight: "light" }}>
              ◎ To be Announce
            </p>
          </div>
          <div className="phase-6">
            <h6 style={{ fontSize: "3.5vh" }}>Phase V: Next Generation</h6>
            <p style={{ fontSize: "2.5vh", fontWeight: "light" }}>
              PAWWS Drop Gen II was released.
            </p>
          </div>
        </div>
        <div className="roadmap-mobile">
          <Swiper pagination={pagination} modules={[Pagination]}>
            <SwiperSlide>
              <div className="swiper-content">
                <h6 style={{ fontSize: "3.5vh" }}>
                  Phase I: Launching Collections
                </h6>
                <p style={{ fontSize: "2.5vh", fontWeight: "light" }}>
                  ◎ Launch Discord and Website <br />
                  ◎ Reward the growing community with rewards including ETH,
                  NFTs, and special roles in the community with whitelist
                  benefits <br />◎ Launch the 8,888 PAWWS collection.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-content">
                <h6 style={{ fontSize: "3.5vh" }}>
                  Phase II: Community & Connection
                </h6>
                <p style={{ fontSize: "2.5vh", fontWeight: "light" }}>
                  ◎ Activate our DAO system that will allow project holders to
                  have a voice power on all major decisions that come to the
                  project through Snapshots <br />◎ HODLERS will currently be
                  rewarded with PAWWS and ETH NFTs <br />
                  ◎ Gift printing will be used <br />◎ The official merch store
                  will be released to all current HODLERS with access to
                  high-quality merchandise associated with the PAWWS brand
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-content">
                <h6 style={{ fontSize: "3.5vh" }}>Phase III: Public Service</h6>
                <p style={{ fontSize: "2.5vh", fontWeight: "light" }}>
                  ◎ Activate and fund community and charity wallets. (The DAO
                  system will be used to decide which charities to consider){" "}
                  <br />
                  ◎ FIRST IRL MEETING <br />◎ Merchandise stores released to the
                  Public (limited design and quantity)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-content">
                <h6 style={{ fontSize: "3.5vh" }}>
                  Phase IV: Raritytools and ranking (pApps)
                </h6>
                <p style={{ fontSize: "2.5vh", fontWeight: "light" }}>
                  ◎ To be Announce
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-content">
                <h6 style={{ fontSize: "3.5vh" }}>Stage V: P2E PAWSS</h6>
                <p style={{ fontSize: "2.5vh", fontWeight: "light" }}>
                  ◎ To be Announce
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-content">
                <h6 style={{ fontSize: "3.5vh" }}>Phase V: Next Generation</h6>
                <p style={{ fontSize: "2.5vh", fontWeight: "light" }}>
                  PAWWS Drop Gen II was released.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Roadmap;
