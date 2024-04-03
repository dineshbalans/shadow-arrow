import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Content = ({ id, image, name, designation, socialLinks }) => {
  const [isVisible, setIsVisible] = useState(false);

  const hoverHandler = () => {
    setIsVisible((prevState) => !prevState);
  };
  return (
    <div
      className="h-full w-full flex items-end"
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
    >
      {isVisible && (
        <motion.div
          className="p-5 flex justify-between items-end w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.59 }}
        >
          <div className="">
            <h1 className="text-4xl">{name}</h1>
            <h3 className="text-lg font-light">{designation}</h3>
          </div>
          <div className="flex gap-2 scale-[1.3]">
            <a
              href={socialLinks.instagram}
              target="_blank"
              // className="cursor-pointer"
            >
              <FaInstagram />
            </a>
            <a
              href={socialLinks.x}
              target="_blank"
              // className="cursor-pointer"
            >
              <FaTwitter />
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              // className="cursor-pointer"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Content;
