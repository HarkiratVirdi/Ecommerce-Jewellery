import { React, useRef } from "react";
import "../../index.scss";
import ProgressiveImage from "react-progressive-image";
import arrow from "../../image/arrow-pointing-to-right.svg";
import mainGirl from "../../image/compressed-ecommerce_images/comp/joeyy_lee_s8sj8pmxpd_l2IND.jpg";
import mainGirl_original from "../../image/compressed-ecommerce_images/joeyy-lee-s8SJ8pmxPDA-unsplash.jpg";

function HomePage_Section1() {
  const hero_image = useRef(null);

  return (
    <div className="HomePage_Section1">
      <div className="image_overlay"></div>

 <ProgressiveImage src={mainGirl_original} placeholder={mainGirl}>
        {(src) => <img className="hero_image" src={src} alt="Girl wearing black dress" />}
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
