import React from "react";
import { Link } from "react-router-dom";
import bulb from "/bulb-two.svg";
import bulbClean from "/bulb-two(clean).svg";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-row">
        <div className="landing-col">
          <div className="landing-content">
            <h1 className="title">
              <span>Hello There...</span>
              I'm Stephen
            </h1>
            <p className="text-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Corporis, rem. Dolorum minima ducimus autem inventore expedita
              fuga consectetur temporibus eveniet, ipsum aut quis ut cumque enim
              aperiam suscipit excepturi aspernatur.
            </p>
            <div className="landing-actions">
              <Link className="btn highlight">My Work</Link>
              <Link className="btn">Hire Me</Link>
            </div>
          </div>
        </div>
        <div className="landing-col">
          <div className="glow-group">
            <div className="not-glow-img">
              <img src={bulbClean} alt="" className="glow" />
            </div>
            <div className="glow-img">
              <img src={bulb} alt="" className="glow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
