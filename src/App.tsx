import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const landingVideo = require("./assets/1.Landing.mp4");
  const storyVideo = require("./assets/2.Story.mp4");
  const roadmapVideo = require("./assets/3.Roadmap.mp4");
  const teamVideo = require("./assets/4.Team.mp4");
  const collabVideo = require("./assets/5.Collaboration.mp4");
  const faqVideo = require("./assets/6.FAQ.mp4");
  const footerVideo = require("./assets/7.Footer.mp4");
  return (
    <div>
      <video id="myVideo" autoPlay loop muted={true}>
        <source src={landingVideo} type="video/mp4" />
        <source src={landingVideo} type="video/ogg" />
      </video>
      <video id="myVideo" autoPlay loop muted={true}>
        <source src={storyVideo} type="video/mp4" />
        <source src={storyVideo} type="video/ogg" />
      </video>
      <video id="myVideoRmp" autoPlay loop muted={true}>
        <source src={roadmapVideo} type="video/mp4" />
        <source src={roadmapVideo} type="video/ogg" />
      </video>
      <video id="myVideo" autoPlay loop muted={true}>
        <source src={teamVideo} type="video/mp4" />
        <source src={teamVideo} type="video/ogg" />
      </video>
      <video id="myVideo" autoPlay loop muted={true}>
        <source src={collabVideo} type="video/mp4" />
        <source src={collabVideo} type="video/ogg" />
      </video>
      <video id="myVideo" autoPlay loop muted={true}>
        <source src={faqVideo} type="video/mp4" />
        <source src={faqVideo} type="video/ogg" />
      </video>
      <video id="myVideo" autoPlay loop muted={true}>
        <source src={footerVideo} type="video/mp4" />
        <source src={footerVideo} type="video/ogg" />
      </video>
    </div>
  );
}

export default App;
