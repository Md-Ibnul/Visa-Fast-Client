import React, { useState } from "react";
import "./parallax.css";
import paraImg from "../../../assets/images/parallax-image.jpg";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from 'react-player'

import { Parallax, Background } from "react-parallax";

const ParallaxImage = () => {
  
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="absolute z-30">
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal sm:modal-middle" role="dialog">
  <div className="modal-box w-11/12 max-w-xs lg:max-w-2xl player-wrapper">
    <ReactPlayer 
              url='https://youtu.be/agjQaF7C-Tk?si=f8P5CYItuHRZUdcu'
              className="react-player"
      width="100%"
      height="100%"
      controls={false}
              />
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>
      </div>
      <Parallax
        bgImage={paraImg}
        blur={{ min: -8, max: 15 }}
        bgImageAlt="Image"
        strength={-100}
      >
        <div className="">
          <div className="video-box">
              <div className="play-btn">
                <div className="absolute z-20">
                <button htmlFor="my_modal_7"><label htmlFor="my_modal_7"><FaPlay className="mt-7 ml-7 cursor-pointer" /></label></button>
                </div>
              </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxImage;
