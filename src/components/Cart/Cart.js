import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import "../../index.scss";
import gsap from "gsap";

const Cart = (props) => {
  let cart_checkout = useRef(null);
  //  const [mouseEnter, setmouseEnter] = useState(false);

  //   useRef(() => {
  //     if (mouseEnter) {
  //       gsap.to(cart_checkout, {
  //         background: "#2c2c2c !important",
  //         color: "#fff",
  //         duration: 1,
  //       });
  //     } else {
  //       gsap.to(cart_checkout, {
  //         background: "#fff",
  //         color: "#2c2c2c",
  //         duration: 1,
  //       });
  //     }
  //   }, [mouseEnter]);

  //   const onMouseEnter = () => {
  //     console.log("Mouse entered checkout");
  //     setmouseEnter(true);
  //   };

  return (
    <div
      className={"cart" /*`cart ${props.CartDisplay ?"cart_display" : ""}`*/}
    >
      <div className="cart_overlay overlay_prop">
        <div className="container">
          <h1 className="cart_heading">Cart</h1>
          <div
            onClick={() => props.setCartDisplay((prev) => !prev)}
            className={`cart_cross ${
              props.CartDisplay ? "cross_display" : ""
            } `}
          >
            x
          </div>
          {/* <div className="cart_cross"><a href=""></a></div> */}
          <div className="cart_container">
            <div className="cart_items">
              <CartItems />
            </div>
          </div>
        </div>

        <div className="cart_footer">
          <div className="cart_total">
            <h3>Total/ </h3>
          </div>
          <div className="cart_options">
            <Link
              //   ref={(el) => {
              //     cart_checkout = el;
              //   }}
              //   onMouseEnter={onMouseEnter}
              className="cart_options--checkout"
            >
              <label htmlFor="checkout">Checkout</label> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
