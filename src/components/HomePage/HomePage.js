import React from "react";
import HomePage_Section3 from "./HomePage_Section3";
import HomePage_Section1 from "./HomePage_Section1";

function HomePage(props) {
  console.log(props);
  return (
    <div>
      <HomePage_Section1 />
      <HomePage_Section3 />
    </div>
  );
}

export default HomePage;
