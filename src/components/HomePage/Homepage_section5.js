import React, { useRef, useEffect} from "react";
import "../../index.scss";
import earrings from "../../image/Jewels/comp/anchor_bracelet_mens.jpg";
import bracelets from "../../image/Jewels/comp/patterned_bangle.jpg";
import Cursor from "../Functions/Cursor"

// const cursor = () =>{
//   const [position, setposition] = useState({ x: 0, y: 0 });
//   const [hidden, sethidden] = useState(false);

//   useEffect(() => {
//     addEventListeners();
//     return () => removeEventListeners();
//   }, []);

//   const addEventListeners = () => {
//     slider.current.addEventListener("mouseover", onMouseMove);
//     slider.current.addEventListener("mouseenter", onMouseEnter);
//     slider.current.addEventListener("mouseleave", onMouseLeave);
//   };

//   const removeEventListeners = () => {
//     slider.current.removeEventListener("mouseover", onMouseMove);
//     slider.current.removeEventListener("mouseenter", onMouseEnter);
//     slider.current.removeEventListener("mouseleave", onMouseLeave);
//   };

//   const onMouseMove = (e) => {
//     setposition({ x: e.clientX, y: e.clientY });
//   };

//   const onMouseLeave = () => {
//     sethidden(true);
//   };

//   const onMouseEnter = () => {
//     sethidden(false);
//   };

//   return (
//     <div
//       className={`animated_cursor ${hidden ? "cursor--hidden" : ""}`}
//       style={{ left: `${position.x}px`, top: `${position.y}px` }}
//     />
//   );

//   }


function Homepage_section5() {
    let slider = useRef(null);
    let slider_left = useRef(null);
    let slider_right = useRef(null);
   useEffect(() => {
       
   }, []);

   return <div className="Homepage_section5">
          <div className="slider__right--background"></div>
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
