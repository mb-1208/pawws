import React from "react";
import "./Story.css";
import "../../App.css";

function Story() {
  return (
    <>
      <div className="section-story">
        <img
          src="assets/Story/object-story.gif"
          width="100%"
          height="100%"
          alt=""
        />
        <div className="object-1">
          <img
            src="assets/Story/title-story.gif"
            alt=""
            style={{ height: "35vh" }}
          />
        </div>
        <div className="desc-position">
          <h5 className="desc-content">
            <br /><br /><br /><br /><br />
          Pawws is a blank canvas in the shape of a dog's head, which is not very much like a dog either, which is<br /> deliberately chosen as a medium to pour freedom of expression for anyone regardless of attributes or<br /> being bound by any rules or dogmas.

Why use a dog's head? Because dogs are one of the unique, cool, <br /> and many types of characters so it will be very fun to explore. <br /><br />

And dog itself contains uniqueness in the common language in Indonesia as a word to express both<br /> positive and negative expressions of cool "dog" and so on. <br /><br />

With Pawws as this canvas, "SINGPENTINKHAPPY" explores the wide variety of psychedelic shapes and <br /> colors that are his trademark in his work. <br /> <br />

The forms are free and non-standard, not bound by the rules of composition, but flow naturally without <br /> sketches, these are all inspired by the frequent lucid dreams that flow and move around the dimensions <br /> of space and time, but still in the conscious state that it is dreaming at the moment.<br /><br /> 

Therefore, the dream is visible & remembered very clearly because "SINGPENTINKHAPPY" is the subject<br /> of the observer, so it can record and re-pour on the blank canvas of Pawws. Draw it back without<br /> planning or concept & flowing without sketching.
          </h5>
        </div>
      </div>
    </>
  );
}

export default Story;
