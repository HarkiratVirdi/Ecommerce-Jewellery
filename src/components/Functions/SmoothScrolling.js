// import React, { useEffect, useCallback, useRef } from "react";
// import { WindowSize } from "./WindowSize";
// import { ScrollTop } from "./ScrollTop";

// export const data = {
//   ease: 0.07,
//   curr: 0,
//   prev: 0,
//   rounded: 0,
// };

// export default function SmoothScrolling(el) {
//   const setBodyHeight = (el) => {
//     document.body.style.height = `${
//       el.current.getBoundingClientRect().height
//     }px`;
//   };
//   setBodyHeight(el);

//   const smoothScroll = useCallback(
//     (el) => {
//       data.curr = window.scrollY;
//       data.prev += (data.curr - data.prev) * data.ease;
//       data.rounded = Math.round(data.prev * 100) / 100;
//       el.current.style.transform = `translateY(-${data.rounded}px)`;
//       requestAnimationFrame(() => smoothScroll());
//     },
//     [data]
//   );

//   useEffect(() => {
//     requestAnimationFrame(() => smoothScroll());
//   }, []);

//   useEffect(() => {
//     setBodyHeight();
//   }, [size.height]);

//   useEffect(() => {
//     ScrollTop();
//     setBodyHeight();
//   });
// }
