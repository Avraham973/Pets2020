/** @format */

import Carousel from "react-bootstrap/Carousel";
import React, { useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import pic1 from "../../Assets/Img/Carousel4.jpg";
import pic2 from "../../Assets/Img/Carousel2.jpg";
import pic3 from "../../Assets/Img/Carousel3.jpg";

export default () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Fragment>
      <Carousel
        // className={classStyle.carousel}
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
};
