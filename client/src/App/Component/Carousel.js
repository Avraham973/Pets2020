/** @format */
// Link to resourse{ https://react-bootstrap.github.io/components/carousel/}

import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../../App/Assets/Img/Carousel1.jpg";
import pic2 from "../../App/Assets/Img/Carousel2.jpg";
import pic3 from "../../App/Assets/Img/Carousel3.jpg";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import classStyle from "../../../src/App.css";
import { makeStyles } from "@material-ui/core/styles";

import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    height: "20%",
  },
});
const carousel = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
`;

function ControlledCarousel() {
  const classes = useStyles();

  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Fragment>
      <Carousel
        className={classStyle.carousel}
        activeIndex={index}
        onSelect={handleSelect}>
        <Carousel.Item key={1}>
          <img
            width={900}
            height={500}
            className='d-block w-100'
            src={pic1}
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item key={2}>
          <img
            width={900}
            height={500}
            className='d-block w-100'
            src={pic2}
            alt='Second slide'
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item key={3}>
          <img
            height={500}
            className='d-block w-100'
            src={pic3}
            alt='Third slide'
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}

export default ControlledCarousel;
