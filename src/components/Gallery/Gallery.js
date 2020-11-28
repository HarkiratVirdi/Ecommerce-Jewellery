import userEvent from '@testing-library/user-event';
import React, { useEffect, useRef } from 'react'
import img1 from "../../image/compressed-ecommerce_images/comp/joeyy_lee_7tdqxrc8hh_TjQPx.jpg";
import img2 from "../../image/compressed-ecommerce_images/comp/joeyy_lee_c2chydc76h_JIZjc.jpg";
import img3 from "../../image/compressed-ecommerce_images/comp/joeyy_lee_jeiene4k3z_aJCKU.jpg";
import img4 from "../../image/compressed-ecommerce_images/comp/joeyy_lee_oibaeuefpe_Hi6jF.jpg";
import img5 from "../../image/compressed-ecommerce_images/comp/joeyy_lee_qzftqhqn7y_VdQsk.jpg";
import img6 from "../../image/compressed-ecommerce_images/comp/joeyy_lee_qzftqhqn7y_X40qL.jpg";
import img7 from "../../image/compressed-ecommerce_images/comp/joeyy_lee_s5n17pzcb0_g3l4b.jpg";
import img8 from "../../image/compressed-ecommerce_images/comp/joeyy_lee_s8sj8pmxpd_l2IND.jpg";
import img9 from "../../image/compressed-ecommerce_images/comp/joeyy_lee_sz_brewpxr_riJns.jpg";
import img10 from "../../image/compressed-ecommerce_images/comp/showingbracelet2_com_c8tTp.jpg";
import "../../index.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { transform } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);


export default function Gallery() {
    let image_container = useRef(null);

    useEffect(() => {

})



    return (
        <div className="Gallery" ref={el => {image_container = el}}>
            <h1 className="Gallery__heading">Gallery</h1>
        <div className="Gallery__images" >
            <img src={img1} className="Float Gallery__images--1"></img>
            <img src={img2} className=" Float Gallery__images--2"></img>
            <img src={img3} className=" Float Gallery__images--3"></img>
            <img src={img4} className=" Float Gallery__images--4"></img>
            <img src={img5} className=" Float Gallery__images--5"></img>
            <img src={img6} className=" Float Gallery__images--6"></img>
            <img src={img7} className=" Float Gallery__images--7"></img>
            <img src={img8} className=" Float Gallery__images--8"></img>
            <img src={img9} className=" Float Gallery__images--9"></img>
            <img src={img10} className=" Float Gallery__images--10"></img>
        </div>
        </div>
    )
    }