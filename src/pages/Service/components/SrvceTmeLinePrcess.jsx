import React from "react";
import serviceBg from "../assets/serviceBg.svg";
import TimeLineDot from "../components/TimeLineDot";
import { consultantData } from "../data/serviceData";
import BgframeImg from "../../../components/General/UI/BgframeImg";

const SrvceTmeLinePrcess = () => {
  return (
    <div className="py-10 relative">
      <BgframeImg URL={serviceBg} style="translate-y-24" />
      <div className="pdngx space-y-20">
        <div className="text-5xl leading-tight font-semibold text-center w-[40%] mx-auto">
          Our <span className="text-primary">Streamlined</span> Service Process
        </div>
        <div className="flex items-cente justify-center">
          {/* Content(s) */}
          <div class="pdngx w-1/2">
            <div class="space-y-20 border-l-[3px] border-[#1D0000]">
              {consultantData.content.map(({ id, title, desc }, index) => (
                <div class="relative w-full">
                  <TimeLineDot first={index === 0} />
                  <div class="ml-6">
                    <h4 class="font-semibold text-3xl">{title}</h4>
                    <p class="mt-2 max-w-screen-sm font-medium">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration(s) */}
          <ul className="w-[40%]">
            {consultantData.image.map(({ id, URl }, index) => (
              <li
                key={id}
                className={`flex ${index % 2 !== 0 && "justify-end"}`}
              >
                <img
                  src={URl}
                  alt=""
                  className={`w-[45%] ${
                    index !== 0 ? "-translate-y-20" : "-translate-y-6"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SrvceTmeLinePrcess;
