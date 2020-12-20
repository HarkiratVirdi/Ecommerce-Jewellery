import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Nav = ({ loading }) => {
  let logo = useRef(null);
  let french = useRef(null);
  let login = useRef(null);
  let cart = useRef(null);
  let textContainer = useRef(null);

  const [CartDisplay, setCartDisplay] = useState(false);

  // useEffect(() => {
  //   function showing(reference) {
  //     console.log("reference", reference);
  //     reference.classList.contains("hidden");
  //     reference.style.color = "white";
  //     reference.classList.remove("hidden");
  //     reference.classList.remove("visuallyhidden");
  //   }

  //   function fading(reference) {
  //     console.log("reference", reference);
  //     reference.style.color = "black";
  //     reference.classList.add("visuallyhidden");
  //     reference.addEventListener("transitionend", function (e) {
  //       reference.classList.add("hidden");
  //     });
  //   }

  //   // ScrollTrigger.create({
  //   //   trigger: logo,
  //   //   start: "+=400",
  //   //   id: "loging",
  //   //   end: "+=410",
  //   //   onEnter: () => {
  //   //     fading(ScrollTrigger.getById("loging").vars.trigger);
  //   //   },
  //   //   onEnterBack: () => {
  //   //     showing(ScrollTrigger.getById("loging").vars.trigger);
  //   //   },
  //   // });

  //   ScrollTrigger.create({
  //     trigger: french,
  //     start: "+=400",
  //     id: "frenching",
  //     end: "+=410",
  //     onEnter: () => {
  //       fading(ScrollTrigger.getById("frenching").vars.trigger);
  //     },
  //     onEnterBack: () => {
  //       showing(ScrollTrigger.getById("frenching").vars.trigger);
  //     },
  //   });
  //   ScrollTrigger.create({
  //     trigger: login,
  //     start: "+=400",
  //     id: "logining",
  //     end: "+=410",
  //     onEnter: () => {
  //       fading(ScrollTrigger.getById("logining").vars.trigger);
  //     },
  //     onEnterBack: () => {
  //       showing(ScrollTrigger.getById("logining").vars.trigger);
  //     },
  //   });

  //   gsap.to(cart, {
  //     scrollTrigger: {
  //       trigger: ".body",
  //       start: "+=400",
  //       end: "+=500",
  //       toggleActions: "restart pause reverse pause",
  //       scrub: true,
  //     },
  //     color: "black",
  //   });
  // });

  useEffect(() => {
    const transitionInitial = { opacity: 0 };
    const transitionEnd = { duration: 1, opacity: 1 };
    const elements = [
      ".arrow-down",
      ".list",
      ".list-right",
      ".hero__text-container",
      ".cta_shop",
      ".logo",
    ];

    let tl = gsap.timeline();
    tl.fromTo(
      ".hero_image",
      {
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1.5,
        delay: 4,
        scaleX: 1,
        scaleY: 1,
        ease: "power1",
      }
    );
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
          <ul className="list hide">
            <li className="link">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="link">
              <Link to="/about">About</Link>
            </li>
            <li className="link">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="link">
              <Link to="/gallery">gallery</Link>
            </li>
          </ul>
        </nav>

        <Link
          to="/"
          ref={(el) => {
            logo = el;
          }}
          className="logo"
        >
          TIRA
        </Link>

        <ul className="list-right T-right-5 M-right-1">
          <li className="link">
            <Link
              className="french hide"
              ref={(el) => {
                french = el;
              }}
              to="/fr"
            >
              FR
            </Link>
          </li>
          <li className="link hide">
            <Link
              className="login"
              to="/login"
              ref={(el) => {
                login = el;
              }}
            >
              Login
            </Link>
          </li>
          <li className="link tab_color-black">
            <Link
              ref={(el) => {
                cart = el;
              }}
              onClick={() => {
                setCartDisplay((prev) => !prev);
              }}
            >
              Cart
            </Link>
          </li>
        </ul>
      </header>
      <Cart CartDisplay={CartDisplay} setCartDisplay={setCartDisplay} />
    </div>
  );
};

export default Nav;
