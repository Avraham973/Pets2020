/** @format */
//https://react-slick.neostack.com/docs/example/multiple-items
//https://github.com/akiran/react-slick/blob/master/examples/CustomArrows.js
import React, { Component, useEffect, useState } from "react";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import "../../../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    direction: "rtl",
    minWidth: 155,
    display: "inline-block",
    margin: "2%",
    border: "1px solid #eee",
    boxShadow: "0 2px 2px #ccc",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    textAlign: "justify",
    minHeight: "120px",
  },
});
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, backgroundColor: "green" }}
      onClick={onClick}
    />
  );
}
export default function MultipleItems(props) {
  const reviews = props.reviews;
  const classes = useStyles();

  function sliders() {
    return reviews.map((data, index) => {
      return (
        <Card className={classes.root} key={index}>
          <CardContent>
            <Typography className={classes.text} variant='body2' component='p'>
              <FormatQuoteIcon />
              {`${data.review_text.substring(0, 180)}...`}
              <FormatQuoteIcon />

              <a href='#'>קרא עוד</a>
            </Typography>
          </CardContent>
        </Card>
      );
    });
  }

  var settings = {
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    dots: true,
    infinite: true,
    autoplaySpeed: 4000,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <h2 style={{ textAlign: "center" }}> לקוחות מספרים </h2>
      <Slider {...settings}>{sliders()}</Slider>
    </Container>
  );
}
