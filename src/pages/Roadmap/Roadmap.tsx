import React from "react";
import "./Roadmap.css";
import "../../App.css";

function Roadmap() {
  return (
    <>
      <div className="section-roadmap">
        {/* <div className="art-position">
          <img src="https://firebasestorage.googleapis.com/v0/b/ethstorage-fe9dd.appspot.com/o/Pawws%2Fart.gif?alt=media&token=b518e19e-5eda-4550-9422-feffb8b432ca" width="100%" alt="" />
        </div> */}
        <div className="art-position">
          <img src="assets/Roadmap/cloud.gif" width="100%" alt="" />
        </div>
        <div className="art-position">
          <img src="assets/Roadmap/line.gif" width="100%" alt="" />
        </div>
        <div className="phase-1">
          <h6  style={{fontSize: '4vh'}}>Phase I: Launching Collections</h6>
          <p style={{fontSize: '3vh', fontWeight: 'light'}}>
            ◎ Launch Discord and Website <br />
            ◎ Reward the growing community with rewards including ETH, NFTs, and special roles in the community with whitelist benefits <br />
            ◎ Launch the 8,888 PAWWS collection.
          </p>
        </div>
        <div className="phase-2">
          <h6  style={{fontSize: '4vh'}}>Phase II: Community & Connection</h6>
          <p style={{fontSize: '3vh', fontWeight: 'light'}}>
            ◎ Activate our DAO system that will allow project holders to have a voice power on all major decisions that come to the project through Snapshots <br />
            ◎ HODLERS will currently be rewarded with PAWWS and ETH NFTs <br />
            ◎ Gift printing will be used <br />
            ◎ The official merch store will be released to all current HODLERS with access to high-quality merchandise associated with the PAWWS brand
          </p>
        </div>
        <div className="phase-3">
          <h6  style={{fontSize: '4vh'}}>Phase III: Public Service</h6>
          <p style={{fontSize: '3vh', fontWeight: 'light'}}>
            ◎ Activate and fund community and charity wallets. (The DAO system will be used to decide which charities to consider) <br />
            ◎ FIRST IRL MEETING <br />
            ◎ Merchandise stores released to the Public (limited design and quantity)
          </p>
        </div>
        <div className="phase-4">
          <h6  style={{fontSize: '4vh'}}>Phase IV: Raritytools and ranking (pApps)</h6>
          <p style={{fontSize: '3vh', fontWeight: 'light'}}>
            ◎ To be Announce
          </p>
        </div>
        <div className="phase-5">
          <h6  style={{fontSize: '4vh'}}>Stage V: P2E PAWSS</h6>
          <p style={{fontSize: '3vh', fontWeight: 'light'}}>
            ◎ To be Announce
          </p>
        </div>
        <div className="phase-6">
          <h6  style={{fontSize: '4vh'}}>Phase V: Next Generation</h6>
          <p style={{fontSize: '3vh', fontWeight: 'light'}}>
            PAWWS Drop Gen II was released.
          </p>
        </div>
        <div className="title-roadmap">
          <img src="assets/Roadmap/title-roadmap.gif" alt="" style={{height: '45vh'}} />
        </div>
      </div>
    </>
  );
}

export default Roadmap;
