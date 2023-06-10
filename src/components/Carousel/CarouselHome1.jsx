import React from "react";
import { Carousel } from "antd";
import banner1 from "../../assets/img/bg_2.jpeg";

export default function CarouselHome1() {
  return (
    <div className="carousel container">
      <img className="w-100 rounded-5" src={banner1} alt="..." />
      <span className="text">SALE </span>
      <span className="text_1">OFF 50%</span>
    </div>
  );
}
