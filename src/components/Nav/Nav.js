import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import mainGirl from "../../image/joeyy-lee-s8SJ8pmxPDA-unsplash.jpg";
import gsap from "gsap";
import Cart from "../Cart/Cart";
import arrow from "../../image/arrow-pointing-to-right.svg";

const Nav = ({ loading }) => {
  const [CartDisplay, setCartDisplay] = useState(false);

  useEffect(() => {
    const transitionInitial = { opacity: 0 };
    const transitionEnd = { duration: 1, opacity: 1 };
    const elements = [
      ".arrow-down",
      ".list",
      ".list-right",
      ".heading",
      ".cta_shop",
      ".logo",
    ];

    let tl = gsap.timeline();
    tl.to(".image_overlay", { ease: "expo", x: "50vw", duration: 2, delay: 4 });
    tl.to(".hero_image", {
      scaleX: 1.1,
      scaleY: 1.1,
      delay: -2,
      duration: 1,
      ease: "expo",
    });
    tl.fromTo(
      elements,
      { ...transitionInitial },
      { ...transitionEnd, delay: -0.99 }
    );
  }, [loading]);

  const ToggleCart = () => {
    setCartDisplay((prevState) => ({ CartDisplay: !prevState.cartDisplay }));
  };

  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul className="list">
              <li className="link">
                <a href="#">Shop</a>
              </li>
              <li className="link">
                <a href="#">About</a>
              </li>
              <li className="link">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="logo">TIRA</div>

          <ul className="list-right">
            <li className="link">
              <a href="#">FR</a>
            </li>
            <li className="link">
              <a href="#">Login</a>
            </li>
            <li className="link">
              <h2 onClick={ToggleCart}>Cart</h2>
            </li>
          </ul>

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
        </header>
        {/* <Switch>
          <Route exact path="/Cart">
            <Cart />
          </Route>
        </Switch> */}
        <Cart cartDisplay={CartDisplay} toggleCart={ToggleCart} />
      </div>
    </Router>
  );
};

export default Nav;
