import React from 'react';
import CartItems from "./CartItems";
import "../../index.scss";

const Cart = () => {
    return (
        <div className="cart cart_prop">
        <div className="cart_overlay overlay_prop">
        <div className="container">
            <h1 className="cart_heading">Cart</h1>
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
