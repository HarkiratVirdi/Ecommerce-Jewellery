import React,{useRef, useState, useEffect} from "react";
import mainGirl from "../../image/joeyy-lee-s8SJ8pmxPDA-unsplash.jpg";
import gsap from "gsap";
import arrow from "../../image/arrow-pointing-to-right.svg";

function Nav() {
   let nav_right = useRef(null);
   let nav_left = useRef(null);
   let heading = useRef(null);
    let image_overlay = useRef(null);
    let mainImage = useRef(null);
    let cta_shop = useRef(null);
    let arrowDown = useRef(null);
    

    
    useEffect(() => {
      const transitionInitial = {opacity: 0};
                 const transitionEnd =  {duration: 1, opacity: 1};
                 const elements = ["arrow-down",".list", ".list-right", ".heading", ".cta_shop", ".logo"];
         
                 let tl = gsap.timeline();
                 tl.to(".image_overlay", {ease:'expo', x: '50vw', duration: 2, delay: 4});
                 tl.to(".hero_image", {scaleX: 1.1, scaleY: 1.1, delay: -2, duration: 1, ease:'expo'});
                 tl.fromTo(elements, {...transitionInitial}, {...transitionEnd, delay: -0.99});
           
    });



  return <div>
  <header>
   <nav>
      <ul ref={el => nav_left = el} className="list">
          <li className="link"><a href="#">Shop</a></li>
          <li className="link"><a href="#">About</a></li>
          <li className="link"><a href="#">Contact</a></li>
      </ul>
  </nav>

    <div className="logo">TIRA</div>

    <ul ref={el => {nav_right = el}}  className="list-right">
        <li className="link"><a href="#">FR</a></li>
        <li className="link"><a href="#">Login</a></li>
        <li className="link"><a href="#">Cart</a></li>
    </ul>

    <div ref={el => {image_overlay = el}} className="image_overlay">
    </div>
    <img ref={el => {mainImage = el}} className="hero_image" src={mainGirl} alt=""/>

<div ref={el => {heading = el}} className="heading">
    <div className="grid">
    <div className="behind-overlay">
    </div>
        <h1>Jewellery For The Modern Woman</h1>
          <div ref={el => {cta_shop = el}} className="cta-shop">
        <div className="button_broken"></div>
        <button>Shop</button>
          </div>
        <div className="arrow-down">
            <img ref={el => {arrowDown = el}} src={arrow} alt=""/>
        </div>
    </div>
    </div>
  </header>
</div>;
}

export default Nav;
