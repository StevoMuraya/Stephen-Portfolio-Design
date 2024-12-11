import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "../public/style.css";
import { Analytics } from "@vercel/analytics/react";
import TagManager from "react-gtm-module";

//Add Font Awesome to Portal
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
const script = document.createElement("script");
script.src = "https://kit.fontawesome.com/656066eede.js";
script.crossOrigin = "anonymous";
document.body.appendChild(script);
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

const tagManagerArgs = {
  gtmId: "GTM-KH2QZNRX",
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Analytics />
  </React.StrictMode>
);
