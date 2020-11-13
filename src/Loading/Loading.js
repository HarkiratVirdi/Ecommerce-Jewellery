import React, {useRef, useEffect, useState} from "react";
import gsap from "gsap";


 function useWindowSize(){
  const [windowSize, setWindowSize] = useState({
    width: window.innerwidth,
    height: window.innerheight,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

function Loading() {
  let logo = useRef(null);
  let overlay = useRef(null);
  let size = useWindowSize();
  let initialHeight = size.height/2 - 50;

  useEffect(() => {      
    console.log(initialHeight);
    let tl = gsap.timeline();
    tl.fromTo(logo, {opacity: 0}, {opacity:1,duration: 1, ease:'expo'});
    tl.to(logo, {duration: 1, ease:"expo", color: '#fff'});
    tl.to(logo, {duration: 2, ease:"expo", transform: 'matrix(1,0,0,1,0,' + (-initialHeight) +')'});
    tl.fromTo(overlay, {opacity:1} ,{duration: 0.1, width: '0px',opacity: 0});
    tl.to(overlay, {display: 'none'})
    
  },[initialHeight]);

  
  return <div className="loading">
  <div ref={el=>{overlay = el}} className="overlay"></div>
    <div className="container">
      <div ref={el => {logo = el}} className="logo">TIRA</div>
    </div>
  </div>;
}

export default Loading;
