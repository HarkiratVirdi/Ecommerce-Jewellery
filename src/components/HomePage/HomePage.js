import { React, useEffect, useRef, useState } from "react";
import HomePage_Section1 from "./HomePage_Section1";
import HomePage_Section2 from "./HomePage_Section2";
import HomePage_Section3 from "./HomePage_Section3";
import {setBodyHeight, ScrollTop} from "../Functions/ScrollTop";

function HomePage() {



  return (<div className="page_container">
    <div className="HomePage">
      <HomePage_Section1 />
      <HomePage_Section2/>
      <HomePage_Section3 />
    </div>
</div>
  );
}

export default HomePage;
