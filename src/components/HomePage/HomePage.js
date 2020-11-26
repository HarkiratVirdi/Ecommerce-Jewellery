import { React, useEffect, useRef, useState } from "react";
import HomePage_Section1 from "./HomePage_Section1";
import HomePage_Section2 from "./HomePage_Section2";
import HomePage_Section3 from "./HomePage_Section3";
import Homepage_section4 from "./Homepage_section4";
import Homepage_section5 from "./Homepage_section5";
function HomePage() {
  return (
    <div className="HomePage">
      <HomePage_Section1 />
      <HomePage_Section2/>
      <HomePage_Section3 />
      <Homepage_section4/>
      <Homepage_section5/>
    </div>
  );
}

export default HomePage;
