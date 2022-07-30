import React from "react";
import "./Faq.css";
import "../../App.css";

function Faq() {
  return (
    <>
      <div className="section-faq">
        <div className="title-faq">
          <img
            src="assets/Faq/title-faq.gif"
            alt=""
            style={{ height: "33vh" }}
          />
        </div>
        <div className="position-art">
          <img
            src="assets/Faq/object-faq.gif"
            alt=""
            style={{ width: "100%", height: "100vh" }}
          />
        </div>
        <div className="faq-position">
          <div className="menu__container menu__container--2">
            <div className="menu text-white">
              <h4 className="faq-1">How many PAWWS are available?</h4>
              <p className="faq-1-ans">There will be 8,888 PAWWS available in the inaugural release.</p>
            </div>
          </div>
          <div className="menu__container menu__container--3">
            <div className="menu text-white">
              <h4 className="faq-2 text-white">Are all PAWSS unique??</h4>
              <p className="faq-2-ans">Yes all PAWWS are uniquely generated and 1/1.</p>
            </div>
          </div>
          <div className="menu__container menu__container--4">
            <div className="menu text-white">
              <h4 className="faq-3 text-white">Can I buy more than 1 PAWWS?</h4>
              <p className="faq-3-ans">Yes, Presale is limited to 3 PAWWS per Transaction/Wallet. Public sale will have a limit of 3 pieces per transaction. The maximum per wallet will be 10 PAWWS.
This will give everyone a fair chance at mining while minimizing bot interference.</p>
            </div>
          </div>
          <div className="menu__container menu__container--5">
            <div className="menu text-white">
              <h4 className="faq-4 text-white">Can I resell my PAWWS NFT?</h4>
              <p className="faq-4-ans">Yes, you are able to resell on the OpenSea platform at anytime you see fit.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
