import React from "react";
import { Link } from "react-router-dom";

const LeftLinks = () => {
  return (
    <div className="left-links-container">
      <div className="links-list">
        <Link to="" className="link">
          <i className="fa fa-github"></i>
        </Link>
        <Link to="" className="link">
          <i className="fa fa-linkedin"></i>
        </Link>
        <Link to="" className="link">
          <i className="fa fa-instagram"></i>
        </Link>
        <Link to="" className="link">
          <i className="fa fa-twitter"></i>
        </Link>
        <Link to="" className="link">
          <i className="fa fa-facebook"></i>
        </Link>
      </div>
    </div>
  );
};

export default LeftLinks;
