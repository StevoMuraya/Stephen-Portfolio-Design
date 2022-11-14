import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import LeftLinks from "./LeftLinks";
import RightLinks from "./RightLinks";

const PageContainer = ({ Page }) => {
  return (
    <div className="main-container">
      <Navbar path={Page.path} />
      <LeftLinks />
      <RightLinks />
      <div className="pages-container">{<Page.page />}</div>
    </div>
  );
};

export default PageContainer;
