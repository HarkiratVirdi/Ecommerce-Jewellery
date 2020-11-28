import { React, useEffect, useRef } from "react";
import gsap from "gsap";
import Nav from "../Nav/Nav";
import arrow from "../../image/arrow-pointing-to-right.svg";
import BlackGirl from "../../image/BlackGirl_Comp.jpg";
// import {setBodyHeight, ScrollTop} from "../Functions/ScrollTop";
import ScrollTop from "../Functions/ScrollTop";

function Shop() {
  //  const containerRef = useRef(null);

  useEffect(() => {
    const tl2 = gsap.timeline({ repeat: 2 });
    tl2.to(".arrow", { duration: 1, y: 0 });
    tl2.to(".arrow", { duration: 1, y: 20 });
  }, []);

  return (
    <div className="page_container">
      <ScrollTop />
      <div className="Shop">
        <div className="Shop_Section_1">
          <img className="Shop_Section_1_Image" src={BlackGirl} alt="" />

          <div className="Shop_Section_1_Text">SHOP</div>
          <img src={arrow} alt="" className="arrow" />
        </div>

        <div className="Shop_Section_2">
          <div className="container">
            <div className="Shop_Filter">
              <div className="browse_by_category">
                <h3>Browse By Category</h3>
              </div>
              <div className="browse_by_price">
                <h3>Browse By Price</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
