import { React, useRef, useEffect } from "react";
import "../../index.scss";
import ProgressiveImage from "react-progressive-image";
import arrow from "../../image/arrow-pointing-to-right.svg";
import mainGirl from "../../image/compressed-ecommerce_images/comp/joeyy_lee_s8sj8pmxpd_l2IND.jpg";
import gsap from "gsap";
import mainGirl_original from "../../image/compressed-ecommerce_images/joeyy-lee-s8SJ8pmxPDA-unsplash.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function HomePage_Section1() {
  let hero_image = useRef(null);
  let overlay = useRef(null);
  useEffect(() => {
         gsap.to(hero_image, {
      scrollTrigger:{
        trigger: hero_image, 
        start: "bottom bottom",
        toggleActions: "restart pause reverse pause",
        scrub: true, 
      },
      y: -100,
    });

    // gsap.to(overlay, {
    //     scrollTrigger:{
    //     trigger: hero_image, 
    //     start: "top top",
    //     toggleActions: "restart pause reverse pause",
    //     scrub: true, 
    //     markers: true
    //   },
    //   y: 200,
    // })

  }, []);

  return (
    <div className="Homepage_section1">
      <div ref={el => {overlay = el}} className="Homepage_section1--overlay"></div>

 <ProgressiveImage src={mainGirl_original} placeholder={mainGirl}>
        {(src) => <img className="hero_image" ref={el => {hero_image = el}} src={src} alt="Girl wearing black dress" />}
      </ProgressiveImage>

      <div className="heading">
        <div className="grid">
          <div className="behind-overlay"></div>
          <h1>Handmade <span className="span_golden">Jewellery</span> For The <span className="span_golden">Modern</span> Woman</h1>
          <div className="cta-shop">
            <div className="button_broken"></div>
            <button>Shop</button>
          </div>
          <div className="arrow-down">
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage_Section1;
