import React, { useEffect, useRef } from "react";
import "../../index.scss";
import { gsap } from "gsap";
import img1 from "../../image/compressed-ecommerce_images/comp/joeyy_lee_sz_brewpxr_riJns.jpg";
import img2 from "../../image/compressed-ecommerce_images/comp/joeyy_lee_oibaeuefpe_Hi6jF.jpg";
import img3 from "../../image/compressed-ecommerce_images/comp/joeyy_lee_rskxe86fzw_Q9VuO.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Homepage_section4() {
  let imgLeft = useRef(null);
  let imgCenter = useRef(null);
  let imgRight = useRef(null);
  let scrollTrigger = useRef(null);

  // useEffect(() => {
  //     gsap.to(imgLeft, {

  //         scrollTrigger:{
  //             trigger:imgLeft,
  //             start: "top center",
  //             toggleActions: "restart resume reverse pause",
  //             scrub: true,
  //             duration: 1,
  //         },
  //         y: -200,
  //     })

  //     gsap.to(imgCenter, {
  //         scrollTrigger:{
  //             trigger:imgCenter,
  //             start: "top center",
  //             toggleActions: "restart pause reverse none",
  //             scrub: true,
  //             duration: 1,
  //         },
  //         y: -100,
  //     })
  //     gsap.to(imgRight, {

  //         scrollTrigger:{
  //             trigger:imgRight,
  //             start: "top center",
  //             toggleActions: "restart pause reverse pause",
  //             scrub: true,
  //             duration: 1,
  //         },
  //          y: -100,
  //     })

  // gsap.to(scrollTrigger, {
  //     scrollTrigger:{
  //         trigger: imgLeft,
  //         start: "top bottom",
  //         toggleActions: "restart pause reverse pause",
  //         scrub: true,
  //         duration: 1,
  //     },
  //     y: 100,
  // })

  // })

  return (
    <div className="Homepage_section4">
      <div
        ref={(el) => {
          scrollTrigger = el;
        }}
        className="Homepage_section4--text"
      >
        <h1>Each Piece Tells A Story</h1>
      </div>

      <div className="Homepage_section4--images">
        <img
          className="image--1"
          ref={(el) => {
            imgLeft = el;
          }}
          src={img1}
          alt="Girl with flowers"
        />

        <img
          className="image--2"
          ref={(el) => {
            imgCenter = el;
          }}
          src={img2}
          alt="Girl with flowers"
        />

        <img
          className="image--3"
          ref={(el) => {
            imgRight = el;
          }}
          src={img3}
          alt="Girl with flowers"
        />
      </div>
    </div>
  );
}

export default Homepage_section4;
