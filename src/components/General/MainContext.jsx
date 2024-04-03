import React from "react";

const MainContext = ({
  style,
  title,
  subTitle,
  stStyle,
  stOrngeText,
  desc,
  descStyle,
}) => {
  return (
    <div className={`space-y-3 text-center md:text-left ${style}`}>
      <h1 className="text-[50px] leading-[50px]  font-bold">{title}</h1>
      {subTitle && (
        <h3 className={`text-2xl font-semibold ${stStyle}`}>
          {subTitle} <span className="text-primary">{stOrngeText}</span>
        </h3>
      )}
      <p
        className={`w-full md:w-[90%] lg:w-[75%] xl:w-[68%] font-medium ${descStyle}`}
      >
        {desc}
      </p>
    </div>
  );
};

export default MainContext;
