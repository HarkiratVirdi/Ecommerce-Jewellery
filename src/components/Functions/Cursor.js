import React, { useState, useEffect, useRef } from "react";
import "../../index.scss";
import gsap from "gsap";
const Cursor = ({ myRef, myRefLeft, myRefRight }) => {
let mainCursor = useRef(null);
  let [PositionX, setPositionX] = useState(0);
  let [PositionY, setPositionY] = useState(0);
  const [Hidden, setHidden] = useState(true);
const [enterLeft, setEnterLeft] = useState(false);
    // const positionRef = React.useRef({
    //     mouseX: 0,
    //     mouseY: 0,
    //     destinationX: 0,
    //     destinationY: 0,
    //     distanceX: 0,
    //     distanceY: 0,
    //     key: -1,
    // })

    // useEffect(() => {
    //     myRef.current.addEventListener("mousemov")
    // })



  useEffect(() => {
    console.log(myRef);
    console.log(myRefLeft);
    console.log(myRefRight);

    console.log(mainCursor);
  myRef.current.addEventListener("mousemove", onMouseMove);
  myRef.current.addEventListener("mouseenter", onMouseEnter);
  myRef.current.addEventListener("mouseleave", onMouseLeave);
    myRefLeft.current.addEventListener("mouseenter", onMouseEnterLeft);
    myRefLeft.current.addEventListener("mouseleave", onMouseLeaveLeft);

}, []);


useEffect(() => {
    
         gsap.fromTo(mainCursor, {
            opacity:0,
        }, {opacity: 1, duration: 0.5});
}, [enterLeft]);


useEffect(() => {
      if(Hidden)
      {
   gsap.to(mainCursor, {
       opacity: 0,
       duration: 0.5, 
    });
      }else{
  gsap.to(mainCursor, {
       opacity: 1,
       duration: 0.5, 
    });
      }
  }, [Hidden]);
   
    // return () =>    {myRef.current.removeEventListener("mouseover", onMouseMove);
    // myRef.current.removeEventListener("mouseenter", onMouseEnter);
    // myRef.current.removeEventListener("mouseleave", onMouseLeave);

    const onMouseEnterLeft = () => {
        setEnterLeft(true);
        console.log("EnterLeft value", enterLeft);
    }

    const onMouseLeaveLeft = () => {
        setEnterLeft(false);
      
    }

  const onMouseMove = (e) => {
    setPositionX(e.clientX);
    setPositionY(e.clientY);
  };

  const onMouseLeave = () => {
    setHidden(true);
    document.body.style.cursor = "default";    
};

const onMouseEnter = () => {
    document.body.style.cursor = "none";
    setHidden(false);
    }


  

  return (
    <div ref = {el => {mainCursor = el}}
      className={`${enterLeft ? "animated_cursor--left" : "animated_cursor--right"}`}
      style={{ left: `${PositionX}px`, top: `${PositionY}px` }}
    />
  );
  }

export default Cursor;
