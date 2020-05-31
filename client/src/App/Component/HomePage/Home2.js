/** @format */

import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Carousel from "../SharedComponent/Carousel";
import MultiCarousel from "../SharedComponent/MultiCarousel2";
import { AboutMe } from "./AboutMe";
import ReviewCard from "../Cards/ReviewCard";
import { getAboutMe, getFacebookReviews } from "../../Action/home";
import TrainingTypes from "../TrainingTypes/TrainingTypes";

function Home({ getAboutMe, aboutMe, getFacebookReviews }) {
  useEffect(() => {
    getAboutMe();
    getFacebookReviews();
  }, []);

  return (
    <Fragment>
      <Carousel />
      <AboutMe aboutMe={aboutMe} />
      <TrainingTypes />
      {/* <MultiCarousel /> */}
      {/* <ReviewCard /> */}
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    aboutMe: state.home.aboutMe,
    reviews: state.home.reviews,
  };
};

export default connect(mapStateToProps, { getAboutMe, getFacebookReviews })(
  Home
);
