import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function PageImage() {

    useEffect(() => {
        // gsap.to(".first_letters .letter", {y:100,stagger:{each: 0.1, from: "left", delay: 6}})
        gsap.to(".image_container",{ x: -300,  scrollTrigger:{trigger: ".image_container",duration: 2}})
    });

  return (<main className="page_image">
        <div className="image"></div>
        <div className="image_container">
        <div className="image_content">
            <div className="first_letters">
            <h1 className="letter">J</h1>
            <h1 className="letter">e</h1>
            <h1 className="letter">w</h1>
            <h1 className="letter">e</h1>
            <h1 className="letter">l</h1>
            <h1 className="letter">r</h1>
            <h1 className="letter">y </h1>
            <h1 className="letter">&nbsp;</h1>
            <h1 className="letter">T</h1>
            <h1 className="letter">h</h1>
            <h1 className="letter">a</h1>
            <h1 className="letter">t </h1>
            <h1 className="letter">&nbsp;</h1>
           </div>

           <div className="second_letters">
            <h1 className="letter">E</h1>
            <h1 className="letter">x</h1>
            <h1 className="letter">c</h1>
            <h1 className="letter">i</h1>
            <h1 className="letter">t</h1>
            <h1 className="letter">e</h1>
            <h1 className="letter">s </h1>
            <h1 className="letter">&nbsp;</h1>
            <h1 className="letter">Y</h1>
            <h1 className="letter">o</h1>
            <h1 className="letter">u</h1>
        </div>
        </div>
        </div>
    </main>
 
  );
}

export default PageImage;
