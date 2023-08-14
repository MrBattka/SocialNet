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
    <img
      className={classes.img}
      src={require("../../../../assets/img/slider/1.jpg")}
    />,
    <img
      className={classes.img}
      src={require("../../../../assets/img/slider/2.jpg")}
    />,
    <img
      className={classes.img}
      src={require("../../../../assets/img/slider/3.jpg")}
    />,
    <img
      className={classes.img}
      src={require("../../../../assets/img/slider/4.jpg")}
    />,
    <img
      className={classes.img}
      src={require("../../../../assets/img/slider/5.jpg")}
    />,
    <img
      className={classes.img}
      src={require("../../../../assets/img/slider/6.jpg")}
    />,
    <img
      className={classes.img}
      src={require("../../../../assets/img/slider/7.jpg")}
    />,
    <img
      className={classes.img}
      src={require("../../../../assets/img/slider/8.jpg")}
    />,
    <img
      className={classes.img}
      src={require("../../../../assets/img/slider/9.jpg")}
    />,
    <img
      className={classes.img}
      src={require("../../../../assets/img/slider/10.jpg")}
    />,
  ]);

  return (
    <div className={classes.wrapper}>
      <Swiper
        modules={[Navigation, Autoplay, Scrollbar, EffectCoverflow, A11y]}
        spaceBetween={10}
        slidesPerView={2}
        autoplay={true}
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
    </div>
  );
};

export default PhotoSlider;
