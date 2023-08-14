import React, { useState } from "react";
import {
  A11y,
  Autoplay,
  Navigation,
  Scrollbar,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./PhotoSlider.module.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const PhotoSlider = () => {
  const [slide, setSlide] = useState([
    <div></div>,
    <img
      height="180"
      width="100%"
      src={require("../../../../assets/img/slider/1.jpg")}
    />,
    <img
      height="180"
      width="100%"
      src={require("../../../../assets/img/slider/2.jpg")}
    />,
    <img
      height="180"
      width="100%"
      src={require("../../../../assets/img/slider/3.jpg")}
    />,
    <img
      height="180"
      width="100%"
      src={require("../../../../assets/img/slider/4.jpg")}
    />,
    <img
      height="180"
      width="100%"
      src={require("../../../../assets/img/slider/5.jpg")}
    />,
    <img
      height="180"
      width="100%"
      src={require("../../../../assets/img/slider/6.jpg")}
    />,
    <img
      height="180"
      width="100%"
      src={require("../../../../assets/img/slider/7.jpg")}
    />,
    <img
      height="180"
      width="100%"
      src={require("../../../../assets/img/slider/8.jpg")}
    />,
    <img
      height="180"
      width="100%"
      src={require("../../../../assets/img/slider/9.jpg")}
    />,
    <img
      height="180"
      width="100%"
      src={require("../../../../assets/img/slider/10.jpg")}
    />,
  ]);

  return (
    <Swiper
      modules={[Navigation, Autoplay, Scrollbar, EffectCoverflow, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      autoplay={true}
      effect="coverflow"
      navigation
      
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slide.map((slide, i) => {
        return (
          <SwiperSlide>
            <div className={classes.wrapperImg}>{slide}</div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PhotoSlider;
