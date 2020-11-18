import React from 'react';
import {Link} from 'react-router-dom';
import CartItems from "./CartItems";
import "../../index.scss";

const Cart = (props) => {

    const CloseCart = (event) => {
        console.log(event.target.parentElement.parentElement.parentElement.classList.remove("cart_display"));
        props.toggleCart();
    } 

    return (
        <div className={`cart ${props.cartDisplay ?"cart_display" : ""}`}>
        <div className="cart_overlay overlay_prop">
        <div className="container">
            <h1 className="cart_heading">Cart</h1>
<h3 onClick={CloseCart}
                className={`cart_cross ${props.cartDisplay ? "cross_display" : ""} `}
              >
                x
              </h3>
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
                <div className="cart_checkout">
                    <a>Checkout</a>
                </div>
                <div className="cart_continue">
                    <a>Continue Shopping</a>
                </div>
            </div>

        </div>


        </div>
        </div>
    );
}

export default Cart;
