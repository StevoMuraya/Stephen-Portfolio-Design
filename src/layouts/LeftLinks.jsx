import React from "react";
import { Link } from "react-router-dom";

const LeftLinks = () => {
  return (
    <div className="left-links-container">
      <div className="links-list">
        <a
          href="https://github.com/StevoMuraya"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <i className="fa fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/dev-stephen-muraya/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/s.t.e.v.i.e__m.u.r.a.y.a/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com/stephenmuraya1"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a
          href="https://www.facebook.com/stephen.muraya.90/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <i className="fa fa-facebook"></i>
        </a>
      </div>
    </div>
  );
};

export default LeftLinks;
