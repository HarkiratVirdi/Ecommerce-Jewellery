import React from "react";
import mainGirl from "../../image/joeyy-lee-s8SJ8pmxPDA-unsplash.jpg";

function Nav() {
  return <header>
   <nav>
      <ul className="list">
          <li className="link"><a href="#">Shop</a></li>
          <li className="link"><a href="#">About</a></li>
          <li className="link"><a href="#">Contact</a></li>
      </ul>
  </nav>

    <ul className="list-right">
        <li className="link"><a href="#">FR</a></li>
        <li className="link"><a href="#">Login</a></li>
        <li className="link"><a href="#">Cart</a></li>
    </ul>

    <img className="hero_image" src={mainGirl} alt=""/>

<div className="heading">
    <div className="grid">
    <div className="behind-overlay">
    </div>
        <h1>Jewellery For The Modern Woman</h1>
    </div>
    </div>

    <div className="arrow-down">

    </div>

  </header>;
}

export default Nav;
