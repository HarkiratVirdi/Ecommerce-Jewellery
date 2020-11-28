import React, { useEffect, useRef } from "react";
import ProgressiveImage from "react-progressive-image";
import compressedImage from "../../image/ShowingBracelets40.jpg";
import showingBracelet_good from "../../image/showingBracelet.jpg";
import showingBracelet2_compressed from "../../image/compressed-ecommerce_images/comp/showingbracelet2_com_c8tTp.jpg";
import showingBracelet2 from "../../image/compressed-ecommerce_images/showingBracelet2.jpg";
import "../../index.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default function HomePage_Section2() {
let Image1 = useRef(null);
let Image2 = useRef(null);

  useEffect(() => {
      //   gsap.to(Image1, {
      // scrollTrigger:{
      //   trigger: Image2, 
      //   start: "top center",
      //   toggleActions: "restart pause reverse pause",
      //   scrub: true,  
      // },
      // transform: 'matrix(0.96,0,0,0.96,0, 0)',
     
    
        gsap.to(Image2, {
      scrollTrigger:{
        trigger: Image2, 
        start: "top center",
        toggleActions: "restart pause reverse pause",
        scrub: true,  
      },
      // transform: 'matrix(0.96,0,0,0.96,0, 0)',
    y: -20
    });
  });

  return (
    <div className="Homepage_section2">
    <div className="Homepage_section2--overlay"></div>
    <div className="row">
    <div className="container">
    
    <div className="images">
      <img src={compressedImage} ref={el => {Image1 = el}} className="img-1" alt=""/>
      </div>
      
      <ProgressiveImage  src={showingBracelet2} placeholder={showingBracelet2_compressed}>
        {(src) => <img ref={el => {Image2 = el}} className="img-2" src={src} alt="girl" />}
      </ProgressiveImage>
    <div className="text">
        <p>Tira is a Luxury jewellery that reflects elegance with the focus on the highest quantily of silver, gold. All jewellery crafeted in Toronto, Canada.</p>

    </div>

</div>
   </div>
    </div>
  );
}
