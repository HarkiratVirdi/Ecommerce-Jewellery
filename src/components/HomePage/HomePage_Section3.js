import React, { useRef, useEffect } from "react";
// import fullPageImage from "../../image/compressed-ecommerce_images/fullPageImage.jpg";
// import ProgressiveImage from "react-progressive-image";
// import fullPageImage_original from "../../image/fullPageImageEdited.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { transform } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

function PageImage() {
  let Image = useRef(null);

  useEffect(() => {
    gsap.to(Image, {
      scrollTrigger:{
        trigger: Image, 
        start: "top center",
        toggleActions: "restart pause reverse pause",
        scrub: true,  
      },
      transform: 'matrix(1,0,0,1,0, 0)'
    });
  });

  return (
    <main className="page_image">
      <div className="image" ref={el => {Image = el}}></div>
      <div className="image_container">
        {/* <div className="image_content">
        <h1>Jewellery That Excites You</h1>
        </div> */}
      </div>
    </main>
  );
}

export default PageImage;
