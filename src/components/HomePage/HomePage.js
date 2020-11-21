import { React, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Nav from "../Nav/Nav";
import HomePage_Section1 from "./HomePage_Section1";
import HomePage_Section2 from "./HomePage_Section2";
import HomePage_Section3 from "./HomePage_Section3";

function HomePage(props) {

  return (
    <div className="HomePage"
    >
      <HomePage_Section1 />
      <HomePage_Section2/>
      <HomePage_Section3 />
    </div>

  );
}

export default HomePage;
