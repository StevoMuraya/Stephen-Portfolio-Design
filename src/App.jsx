import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import PageContainer from "./layouts/PageContainer";
import routes from "./utilities/routes";

const App = () => {
  const [linkHovered, setLinkHovered] = useState(false);
  useEffect(() => {
    const cursor = document.querySelector("cursor");
    const cursorInner = document.querySelector(".cursor-move-inner");
    const cursorOuter = document.querySelector(".cursor-move-outer");

    const triggers = document.querySelectorAll("a");

    let mouseX = 0;
    let mouseY = 0;
    let mouseA = 0;

    let innerX = 0;
    let innerY = 0;

    let outerX = 0;
    let outerY = 0;

    let loop = null;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!loop) {
        loop = window.requestAnimationFrame(render);
      }
    });

    triggers.forEach((trigger) => {
      trigger.addEventListener("mouseenter", () => {
        setLinkHovered(true);
      });

      trigger.addEventListener("mouseleave", () => {
        setLinkHovered(false);
      });
    });

    function render() {
      // stats.begin();

      loop = null;

      innerX = lerp(innerX, mouseX, 0.15);
      innerY = lerp(innerY, mouseY, 0.15);

      outerX = lerp(outerX, mouseX, 0.13);
      outerY = lerp(outerY, mouseY, 0.13);

      const angle =
        (Math.atan2(mouseY - outerY, mouseX - outerX) * 180) / Math.PI;

      const normalX = Math.min(
        Math.floor((Math.abs(mouseX - outerX) / outerX) * 1000) / 1000,
        1
      );
      const normalY = Math.min(
        Math.floor((Math.abs(mouseY - outerY) / outerY) * 1000) / 1000,
        1
      );
      const normal = normalX + normalY * 0.5;
      const skwish = normal * 0.7;

      cursorInner.style.transform = `translate3d(${innerX}px, ${innerY}px, 0)`;
      cursorOuter.style.transform = `translate3d(${outerX}px, ${outerY}px, 0) rotate(${angle}deg) scale(${
        1 + skwish
      }, ${1 - skwish})`;

      // Stop loop if interpolation is done.
      if (normal !== 0) {
        loop = window.requestAnimationFrame(render);
      }
    }

    function lerp(s, e, t) {
      return (1 - t) * s + t * e;
    }
  }, []);
  return (
    <>
      <span className={linkHovered ? "cursor cursor--hover" : "cursor"}>
        <span className="cursor-move-inner">
          <span className="cursor-inner"></span>
        </span>
        <span className="cursor-move-outer">
          <span className="cursor-outer"></span>
        </span>
      </span>
      <Routes>
        {routes.map((route, index) => (
          <Route
            path={route.path}
            element={<PageContainer Page={route} />}
            key={index}
          />
        ))}
      </Routes>
    </>
  );
};

export default App;
