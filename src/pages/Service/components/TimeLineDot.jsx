import React from "react";

const TimeLineDot = ({ first = false }) => {
  return (
    <div
      class={`absolute ${
        first ? "-top-3" : "-top-1.5"
      } z-10 -ml-[20px] h-9 w-9 rounded-full bg-primary/50
      flex justify-center items-center group`}
    >
      <div class=" h-5 w-5 rounded-full bg-primary group-hover:scale-[1.25] transition-all ease-linear" />
    </div>
  );
};

export default TimeLineDot;
