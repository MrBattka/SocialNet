import React from "react";
import PhotoSlider from "./PhotoSlider";
import { openNavMenu } from "../../../../Redux/Mobile/header-reduser";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    isOpenNavMenu: state.mobHeader.isOpenNavMenu,
  };
};

const PhotoSliderContainer = connect(mapStateToProps, { openNavMenu })(
  PhotoSlider
);
export default PhotoSliderContainer;
