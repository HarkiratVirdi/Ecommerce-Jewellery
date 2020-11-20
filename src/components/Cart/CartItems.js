import React from "react";
import SilverEarrings from '../../image/Unique Images/guardian-angel-earrings.jpg';

function CartItems() {
  return <div className="CartItems item_container">
        <div className="item_image">
            <img src={SilverEarrings} alt=""/>
        </div>
        <div className="item_details">
            <div className="item_name">
                <h3>Silver Earrings</h3>
            </div>
            <div className="item_quantity">
              <div className="item_increment">
                    +
                </div>
          
            <div className="item_count">
                1
            </div>
              <div className="item_decrement">
                -
            </div>
            </div>
        </div>
  </div>;
}

export default CartItems;
