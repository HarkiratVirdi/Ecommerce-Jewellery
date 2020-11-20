import { React, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Nav from "../Nav/Nav";
import HomePage_Section3 from "./HomePage_Section3";
import HomePage_Section1 from "./HomePage_Section1";

function HomePage(props) {
  
  let scroll_container = useRef(null);
  const [transforming, setTransforming] = useState(0);
  useEffect(() => {
 const Scrolling = () => {
let current = 0;
// Target scroll position
let target = 0;
// Ease or speed for moving from `current` to `target`
let ease = 0.075;
// Utility letiables for `requestAnimationFrame`
let rafId = undefined;
let windowWidth;
let containerHeight;

let rafActive = false;
// Container element
let container = scroll_container;
console.log(container);


// let fakeScroll = document.createElement("div");
// fakeScroll.className = "fake-scroll";
// document.body.appendChild(fakeScroll);


const setupAnimation = () => {
 
  startAnimation();
};

function startAnimation() {
  if (!rafActive) {
    rafActive = true;
    rafId = requestAnimationFrame(updateAnimation);
  }
}

function updateScroll() {
  target = window.scrollY || window.pageYOffset;
  startAnimation();
}

function updateAnimation() {
  // Difference between `target` and `current` scroll position
  var diff = target - current;
  // `delta` is the value for adding to the `current` scroll position
  // If `diff < 0.1`, make `delta = 0`, so the animation would not be endless
  var delta = Math.abs(diff) < 0.1 ? 0 : diff * ease;

  if (delta) {
    // If `delta !== 0`
    // Update `current` scroll position
    current += delta;
    // Round value for better performance
    current = parseFloat(current.toFixed(2));
    // Call `update` again, using `requestAnimationFrame`
    rafId = requestAnimationFrame(updateAnimation);
  } else {
    // If `delta === 0`
    // Update `current`, and finish the animation loop
    current = target;
    rafActive = false;
    cancelAnimationFrame(rafId);
  }

  // Set the CSS `transform` corresponding to the custom scroll effect
  // setTransform(container, "translateY(" + -current + "px)");
  console.log(current);
  setTransforming({current});
  console.log(setTransforming);
}
updateScroll();
window.addEventListener("resize", setupAnimation);
setupAnimation();
}

window.addEventListener("scroll", Scrolling);
}, [setTransforming]);
  return (
    <div
      ref={(el) => (scroll_container = el)}
      className="HomePage Scroll_Container"
      style={{transform:`translateY(${(-setTransforming)})px`}}
    >
      <HomePage_Section1 />
      <HomePage_Section3 />
    </div>

  );
}

export default HomePage;
