import React from "react";
import { FaReact } from "react-icons/fa6";
import { SiJavascript, SiPython, SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";

const SkillsSlide = () => {
  return (
    <div className="bg-neutral-950 flex mx-auto text-gray-800 text-3xl font-bold lg:space-x-12  flex-col lg:flex-row items-center justify-center text-start">
      <div className="flex flex-col lg:flex-row  items-center mb-4 lg:mb-0">
        <FaReact className="text-5xl lg:text-6xl text-gray-800 mb-2 mr-3  " />
        React
      </div>
      <div className="flex flex-col lg:flex-row  items-center mb-4 lg:mb-0">
        <SiJavascript className="text-5xl lg:text-6xl text-gray-800 mr-3 " />
        Javascript
      </div>
      <div className="flex flex-col lg:flex-row  items-center mb-4 lg:mb-0">
        <SiTailwindcss className="text-5xl lg:text-6xl text-gray-800 mr-3 " />
        Tailwind CSS
      </div>
      <div className="flex flex-col lg:flex-row  items-center mb-4 lg:mb-0">
        <SiRedux className="text-5xl lg:text-6xl text-gray-800 mb-2 mr-3" />
        Redux
      </div>
      <div className="flex flex-col lg:flex-row  items-center mb-4 lg:mb-0">
        <SiPython className="text-5xl lg:text-6xl text-gray-800 mb-2 mr-3" />
        Python
      </div>
    </div>
  );
};

export default SkillsSlide;
