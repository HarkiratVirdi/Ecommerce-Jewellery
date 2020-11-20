import React from "react";
import "../../index.scss";
import arrow from "../../image/arrow-pointing-to-right.svg";
import mainGirl from "../../image/joeyy-lee-s8SJ8pmxPDA-unsplash.jpg";

function HomePage_Section1() {
  return (
    <div className="HomePage_Section1">
      <div className="image_overlay"></div>
      <img className="hero_image" src={mainGirl} alt="" />

      <div className="heading">
        <div className="grid">
          <div className="behind-overlay"></div>
          <h1>Jewellery For The Modern Woman</h1>
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
