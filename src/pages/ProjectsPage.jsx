import { Link } from "react-router-dom";
import ErrorImg from "../assets/images/Milestones-of-business-projects.png";

const ProjectsPage = () => {
  return (
    <div className="error-container">
      <div className="error-path">
        Looking for <span>"{location.pathname}"</span> page?
      </div>
      <div className="error-img">
        <img src={ErrorImg} alt="" />
      </div>
      <div className="error-text">
        <h1 className="error-title">
          <span>Uuumm.....</span>
          This page is still under construction
        </h1>
        <p className="error-desc">
          You can check again later or inform me about the error from the
          <span>
            <Link to="/contact"> Contact </Link>
          </span>
          page
        </p>
      </div>
    </div>
  );
};

export default ProjectsPage;
