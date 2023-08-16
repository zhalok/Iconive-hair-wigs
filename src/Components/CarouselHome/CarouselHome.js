import React from "react";
import Carousel from "react-bootstrap/Carousel";
import c1 from "../Images/banner/banner1.webp";
import c2 from "../Images/banner/banner2.webp";

export default function CarouselHome() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={c1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={c2} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={c3}
            alt="Third slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </>
  );
}
