import React from "react";
import ServiceItem from "./ServiceItem";

const ServiceList = ({ data }) => {
  return (
    <ul className="w-full flex flex-wrap justify-between">
      {data.map(({ id, title, desc }) => (
        <ServiceItem key={id} id={id} title={title} desc={desc} />
      ))}
    </ul>
  );
};

export default ServiceList;
