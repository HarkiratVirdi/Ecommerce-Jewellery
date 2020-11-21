import React from "react";
import ProgressiveImage from "react-progressive-image";
import compressedImage from "../../image/showingBracelet-compressed.jpg";
import showingBracelet_good from "../../image/showingBracelet.jpg";
import showingBracelet2_compressed from "../../image/compressed-ecommerce_images/showingBracelet2_compressed.jpg";
import showingBracelet2 from "../../image/showingBracelet2.jpg";
import "../../index.scss";

export default function HomePage_Section2() {
  return (
    <div className="HomePage_Section2">
    <div className="row">
    <div className="container">
    
    <div className="images">
      <ProgressiveImage  src={showingBracelet_good} placeholder={compressedImage}>
        {(src) => <img className="img-1" src={src} alt="girl" />}
      </ProgressiveImage>
      </div>
      <div className="images">
      <ProgressiveImage  src={showingBracelet2} placeholder={showingBracelet2_compressed}>
        {(src) => <img className="img-2" src={src} alt="girl" />}
      </ProgressiveImage>
      </div>
    <div className="text">
        <p>Tira is a Luxury jewellery that reflects elegance with the focus on the highest quantily of silver, gold. All jewellery crafeted in Toronto, Canada.</p>

    </div>

</div>
   </div>
    </div>
  );
}
