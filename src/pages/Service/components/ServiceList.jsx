import React, { useState } from "react";
import web from "../assets/web.svg";
import { serviceData } from "../data/serviceData";

const ServiceList = () => {
  const [currentService, setCurrentService] = useState(serviceData[0]);

  const clickHandler = (id) => {
    setCurrentService(serviceData.find((service) => service.id === id));
  };

  return (
    <div className="flex items-center justify-between">
      {/* Image */}
      <div className="rounded-[30px] w-1/3">
        <img
          src={currentService.URL}
          alt=""
          className="rounded-[30px] object-cover object-center"
        />
      </div>
      {/* List  */}
      <ul className="w-[31%] flex flex-col justify-center gap-12 pl-4">
        {serviceData.map(({ id, title }) => (
          <li
            key={id}
            className={`${
              currentService.id === id ? "text-primary" : "text-[#7F7F7F]"
            } text-3xl font-medium  hover:text-primary transition-all ease-linear
            cursor-pointer w-fit`}
            onClick={() => clickHandler(id)}
          >
            {title}
          </li>
        ))}
      </ul>
      {/* Details */}
      <div
        className="bg-primary text-white  p-6 w-[30%] rounded-[30px] space-y-3 relative group
      border-l-2 border-b-2 border-primary hover:bg-primary/10 hover:text-primary transition-all ease-linear"
      >
        <h1 className="text-3xl font-semibold">{currentService.title}</h1>
        <p>{currentService.desc}</p>
        <ul className="space-y-2 w-[60%] overflow-y-scroll h-60 scrollbar-hide">
          <li className="text-[12px] border-2 w-fit px-2 py-[1px] rounded-full text-primary border-primary">
            Web Design
          </li>
          <li className="text-[12px] border-2 w-fit px-2 py-[1px] rounded-full text-primary border-primary">
            Content Management
          </li>
          <li className="text-[12px] border-2 w-fit px-2 py-[1px] rounded-full text-primary border-primary">
            Responsive Web Design
          </li>
          <li className="text-[12px] border-2 w-fit px-2 py-[1px] rounded-full text-primary border-primary">
            Ui / Ux
          </li>
          <li className="text-[12px] border-2 w-fit px-2 py-[1px] rounded-full text-primary border-primary">
            Web Development
          </li>
          <li className="text-[12px] border-2 w-fit px-2 py-[1px] rounded-full text-primary border-primary">
            E-Commerce
          </li>
        </ul>
        <div
          className="bg-primary text-white absolute z-10 p-3 bottom-0 right-0 rounded-br-[30px] h-40 w-40 rounded-tl-[120px]
        flex items-end justify-end invisible group-hover:visible hover:bg-primary/20 border-t-2 border-l-2 border-primary
        hover:text-primary transition-all ease-linear"
        >
          <h1 className="px-4 py-3">View More</h1>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
