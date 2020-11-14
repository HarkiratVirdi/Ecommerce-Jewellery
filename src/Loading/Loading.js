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
  let big_logo = useRef(null);
  let overlay = useRef(null);
  let size = useWindowSize();
  let initialHeight = size.height/2 - 50;

  useEffect(() => {      
    console.log(initialHeight);
    let tl = gsap.timeline();
    tl.to(".big_logo", {duration: 2,ease:"circ", color: '#fff'});
    tl.to(".overlay", {duration: 2,y: '-100vh', ease: "expo"});
    tl.to(".overlay", {display: 'none'});
    tl.to(".loading", {display: 'none'});
  },[initialHeight]);

  
  return <div className="loading">
  <div ref={el=>{overlay = el}} className="overlay">
    <div className="container">
      <h1 className="big_logo">TIRA</h1>
    </div>
  </div>
  </div>;
}

export default Loading;
