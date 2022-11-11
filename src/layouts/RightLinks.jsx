import React from "react";
import { Link } from "react-router-dom";

const RightLinks = () => {
  return (
    <div className="right-links-container">
      <div className="links-list">
        <a href="tel:+254797923201" className="link">
          <i className="fa fa-phone"></i>
          <span>+254797923201</span>
        </a>
        <a href="mailto:gathaiya28@gmail.com" className="link">
          <i className="fa fa-envelope"></i>
          <span>gathaiya28@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default RightLinks;
