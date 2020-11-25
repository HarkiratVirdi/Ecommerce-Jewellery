import React, { useRef, useEffect } from "react";
import gsap from "gsap";

function Loading({ loading }) {
  let loadingScreen = useRef(null);
  let overlay = useRef(null);
  let bigLogo = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(bigLogo, { duration: 2, ease: "circ", color: "#fff" });
    tl.to(overlay, { duration: 2, y: "-100vh", ease: "expo" });
    tl.to(overlay, { display: "none" });
    tl.to(loadingScreen, { display: "none" });
  }, [loading]);

  return (
    <div
      className="loading"
      ref={(el) => {
        loadingScreen = el;
      }}
    >
      <div
        className="overlay"
        ref={(el) => {
          overlay = el;
        }}
      >
        <div className="logo_container">
          <h1
            className="big_logo"
            ref={(el) => {
              bigLogo = el;
            }}
          >
            TIRA
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Loading;
