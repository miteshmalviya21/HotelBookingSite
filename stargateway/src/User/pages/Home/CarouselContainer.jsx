import React from "react";
import { Carousel } from "react-bootstrap";

import image1 from "./../../../image/1.jpg";
import image2 from "./../../../image/2.jpg";
import image3 from "./../../../image/3.jpg";
import image4 from "./../../../image/4.jpg";

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={5000}>
        <img
          className="d-block "
          src={image1}
          alt="First slide"
          // style={{height: "80%"}}
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block "
          src={image2}
          alt="Third slide"
          // style={{height: "80%"}}
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block "
          src={image3}
          alt="Third slide"
          // style={{height: "80%"}}
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block"
          src={image4}
          alt="Fourth slide"
          // style={{height: "100%"}}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
