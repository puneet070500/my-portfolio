import React from "react";

import EcomProjects from "./EcomProjects";
import Portfolio from "./Portfolio";
import MyntraClone from "./MyntraClone";
import Netflix from "./Netflix";
const ProjectsSlide = () => {
  return (
    <div className="bg-neutral-950 flex text-center flex-col mt-5">
      <span className="text-2xl font-bold text-pink-600 lg:mt-20">
        {" "}
        Projects <span className="text-pink-600 animate-pulse">.</span>
      </span>
      <p className="mt-2 text-3xl font-bold  bg-gradient-to-r from-teal-500 to-pink-400 bg-clip-text text-transparent sm:text-4xl lg:h-12">
        These are some of my projects.
      </p>
      <MyntraClone />
      <Portfolio />
      <EcomProjects />
      <Netflix />
    </div>
  );
};

export default ProjectsSlide;
