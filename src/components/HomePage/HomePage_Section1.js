import { React, useRef, useEffect } from "react";
import "../../index.scss";
import ProgressiveImage from "react-progressive-image";
import arrow from "../../image/arrow-pointing-to-right.svg";
import { Link } from "react-router-dom";
import mainGirl from "../../image/compressed-ecommerce_images/comp/joeyy_lee_s8sj8pmxpd_l2IND.jpg";
import gsap from "gsap";
import mainGirl_original from "../../image/compressed-ecommerce_images/joeyy-lee-s8SJ8pmxPDA-unsplash.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function HomePage_Section1() {
  let hero_image = useRef(null);
  // useEffect(() => {
  //   gsap.to(hero_image, {
  //     scrollTrigger: {
  //       trigger: hero_image,
  //       start: "bottom bottom",
  //       toggleActions: "restart pause reverse pause",
  //       scrub: true,
  //     },
  //     y: -100,
  //   });
  // }, []);

  return (
    <div className="Homepage_section1">
      <div className="container-left">
        <div className="hero tab_column tab_mt-15">
          <div className="hero__text-container width_100">
            <div className="hero__overlay hide"></div>
            <div class="hero__text width_80">
              <h1>
                Handmade <span className="span_golden">Jewellery</span> For The 
                <span className="span_golden"> Modern</span> Woman
              </h1>
              <div className="cta-shop hide">
                <div className="button_broken"></div>
                <Link className="button_center link" to="/shop">Shop</Link>
              </div>

              <div className="btn-sm link width_100 hide-large">
                <Link to="/shop">Shop</Link>
              </div>
            </div>
          </div>
          <ProgressiveImage src={mainGirl_original} placeholder={mainGirl}>
            {(src) => (
              <img
                className="hero_image mr-auto pos_none width_100 obj_fit-cover"
                ref={(el) => {
                  hero_image = el;
                }}
                src={src}
                alt="Girl wearing black dress"
              />
            )}
          </ProgressiveImage>
        </div>
      </div>

      {/* <div className="grid">
         <div className="heading">
          <div className="behind-overlay"></div>
          <h1>Handmade <span className="span_golden">Jewellery</span> For The <span className="span_golden">Modern</span> Woman</h1>
          <div className="cta-shop">
            <div className="button_broken"></div>
            <button>Shop</button>
          </div>
        </div>
         
      </div> */}
      <div className="arrow-down hide">
        <img src={arrow} alt="" />
      </div>
    </div>
  );
}
export default HomePage_Section1;
