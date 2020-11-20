import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Cart from "../Cart/Cart";

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

  useEffect(() => {
    runAnimation();
  }, [CartDisplay]);

  const runAnimation = () => {
    if (CartDisplay) {
      gsap.fromTo(
        ".cart",
        { y: -1000 },
        {
          duration: 1,
          y: 0,

          ease: "expo",
          display: "block",
        }
      );
    } else {
      gsap.fromTo(
        ".cart",
        { y: 0 },
        { y: -1000, ease: "power1", display: "none", duration: 1 }
      );
    }
  };

  return (
    <div>
      <header>
        <nav>
          <ul className="list">
            <li className="link">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="link">
              <Link to="/about">About</Link>
            </li>
            <li className="link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="logo">TIRA</div>

        <ul className="list-right">
          <li className="link">
            <Link to="/fr">FR</Link>
          </li>
          <li className="link">
            <Link to="/login">Login</Link>
          </li>
          <li className="link">
            <Link
              onClick={() => {
                setCartDisplay((prev) => !prev);
              }}
            >
              Cart
            </Link>
          </li>
        </ul>
      </header>
      {/* <=Switch>
          {/* < exact path="/shop">
            <Shop /></Switch>
        </Switch> */}
      <Cart CartDisplay={CartDisplay} setCartDisplay={setCartDisplay} />
    </div>
  );
};

export default Nav;
