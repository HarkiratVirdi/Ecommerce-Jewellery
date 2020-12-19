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


  return (
    <div className="container">
    <div className="Homepage_section2">
    {/* <div className="Homepage_section2--overlay"></div> */}
    <div className="row">
    
    <div className="images">
      <img src={compressedImage} className="img-1" alt=""/>
     
      
      <ProgressiveImage  src={showingBracelet2} placeholder={showingBracelet2_compressed}>
        {(src) => <img className="hide img-2" src={src} alt="girl holding Jewellery" />}
      </ProgressiveImage>
       </div>
    <div className="text">
        <p>Tira is a Luxury jewellery that reflects elegance with the focus on the highest quantily of silver, gold. All jewellery crafeted in Toronto, Canada.</p>

    </div>

</div>
   </div>
    </div>
  );
}
