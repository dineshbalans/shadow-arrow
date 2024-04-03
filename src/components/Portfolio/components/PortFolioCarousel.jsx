import React, { useState } from "react";
import { portfoliosData } from "../data/porfoliosData";
import slider from "../../../assets/slider_image.svg";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import WhiteBttn from "../../General/UI/WhiteBttn";
// import Carousel from "react-stacked-center-carousel";

// const portfoliosData = [
//   slider,
//   slider,
//   slider,
//   slider,
//   slider,
// ];
const PortFolioCarousel = () => {
  const [focusedIndex, setFocusedIndex] = useState(
    Math.floor(portfoliosData.length / 2)
  );
  const [offset, setOffset] = useState(0);

  const handleNext = () => {
    setOffset((prevOffset) => (prevOffset + 1) % portfoliosData.length);
    setFocusedIndex((prevIndex) => (prevIndex + 1) % portfoliosData.length);
  };

  const handlePrev = () => {
    setOffset(
      (prevOffset) =>
        (prevOffset - 1 + portfoliosData.length) % portfoliosData.length
    );
    setFocusedIndex(
      (prevIndex) =>
        (prevIndex - 1 + portfoliosData.length) % portfoliosData.length
    );
  };

  return (
    <div className="flex flex-col items-center mt-8 space-y-[70px]">
      <div className="flex justify-between items-center space-x-20 w-full">
        {[0, 1, 2].map((i) => {
          const index =
            (focusedIndex + i - 1 + portfoliosData.length) %
            portfoliosData.length;
          return (
            <div
              key={index}
              className={`relative w-[350px] h-80 cursor-pointer group transition-transform duration-300 ease-in-out ${
                i === 1 ? "transform scale-[1.3]" : ""
              }`}
              onClick={() => setFocusedIndex(index)}
            >
              <div
                className="absolute inset-44 left-0 bottom-0 rounded-tr-[40px] bg-black bg-opacity-50 text-white text-center flex flex-col justify-center
                items-center opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                style={{ zIndex: 1 }}
              >
                <h1>Branding</h1>
                <a href="">View Portfolio</a>
              </div>
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url(${portfoliosData[index].url})`,
                  zIndex: 0,
                }}
              />
            </div>
          );
        })}
      </div>
      {/* Control Buttons */}
      <div className=" flex justify-center gap-10">
        {/* Left Arrow */}
        <div
          className="rounded-full p-6 bg-black/20 text-white cursor-pointer border-4 border-primary
            hover:bg-gradient-to-br from-primary to-[#D0172D]"
          onClick={handlePrev}
        >
          <FaChevronLeft className="scale-[1.7]" />
        </div>
        {/* Right Arrow */}
        <div
          className="rounded-full p-6 bg-black/20 text-white cursor-pointer border-4 border-primary
            hover:bg-gradient-to-br from-primary to-[#D0172D]"
          onClick={handleNext}
        >
          <FaChevronRight className="scale-[1.7]" />
        </div>
      </div>
      <div className="flex justify-end w-full">
        <WhiteBttn text="View All" />
      </div>
    </div>
  );
};

export default PortFolioCarousel;
