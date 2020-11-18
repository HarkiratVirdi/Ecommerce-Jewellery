import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

function Loading() {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(".big_logo", { duration: 2, ease: "circ", color: "#fff" });
    tl.to(".overlay", { duration: 2, y: "-100vh", ease: "expo" });
    tl.to(".overlay", { display: "none" });
    tl.to(".loading", { display: "none" });
  }, []);

  return (
    <div className="loading">
      <div className="overlay">
        <div className="logo_container">
          <h1 className="big_logo">TIRA</h1>
        </div>
      </div>
    </div>
  );
}

export default Loading;
