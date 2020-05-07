/** @format */

import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Carousel from "../SharedCompnent/Carousel";
import { AboutMe } from "./AboutMe";
import ReviewCard from "../Cards/ReviewCard";
import { getAboutMe, getFacebookReviews } from "../../Action/home";

function Home({ getAboutMe, aboutMe, getFacebookReviews }) {
  useEffect(() => {
    getAboutMe();
    getFacebookReviews();
  }, []);

  return (
    <Fragment>
      <br /> <br />
      <Carousel />
      <AboutMe aboutMe={aboutMe} />
      <ReviewCard />
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
