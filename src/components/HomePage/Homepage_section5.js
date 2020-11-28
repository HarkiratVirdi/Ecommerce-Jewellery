import React, { useRef, useEffect} from "react";
import "../../index.scss";
import earrings from "../../image/Jewels/comp/anchor_bracelet_mens.jpg";
import bracelets from "../../image/Jewels/comp/patterned_bangle.jpg";
import Cursor from "../Functions/Cursor"
import gsap from "gsap";

function Homepage_section5() {
    let slider = useRef(null);
    let slider_left = useRef(null);
    let slider_right = useRef(null);
    let slider_background = useRef(null);
    
    useEffect(() => {
        // gsap.to(slider_background, {
        //     scrollTrigger:{
        //         trigger: slider_background,
        //         scrub: true,
        //         start: "bottom bottom",
        //         toggleActions: "restart pause reverse none",
            
        //     },
        //     y: -200,
        // })
   }, []);

   return <div className="Homepage_section5">
          <div ref={el => {slider_background = el}} className="slider__right--background"></div>
   <Cursor myRef={slider} myRefLeft = {slider_left} myRefRight = {slider_right}/>
      <div className="slider" ref={slider} >
          <div className="slider__left" ref={slider_left}>
            <div className="slider__left--carousel">
                <img src={earrings} alt=""/>
            </div>
          </div>
          <div className="slider__right" ref={slider_right}>
            <div className="slider__right--carousel">
                <img src={bracelets} alt=""/>
            </div>
          </div>
      </div>
  </div>;
}

export default Homepage_section5;
