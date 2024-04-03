import React from "react";
import bg from "../../assets/testimonial_bg.svg";
import Carousel from "./components/TestimoCarousel";

const TestimonialsSection = () => {
  return (
    <section
      className=" bg-no-repeat bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Carousel />
    </section>
  );
};

export default TestimonialsSection;
