import React from "react";
import { Link } from "react-router-dom";
import ErrorImg from "../../public/404-SVG.svg";

const Error404 = () => {
  return (
    <div className="error-container">
      <div className="error-path">
        Trying to find <span>"{location.pathname}"</span>
      </div>
      <div className="error-img">
        <img src={ErrorImg} alt="" />
      </div>
      <div className="error-text">
        <h1 className="error-title">
          <span>Uumm.....</span>
          Don't think I've made that one yet
        </h1>
        <p className="error-desc">
          You can check again later on or inform me about the error from the
          <span>
            <Link to="/contact"> Contact </Link>
          </span>
          page
        </p>
      </div>
    </div>
  );
};

export default Error404;
