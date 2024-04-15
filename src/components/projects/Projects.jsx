import React from "react";
import Netflix from "./Netflix";
import Myntra from "./MyntraClone";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";
// import EcomProjects from "./EcomProjects";

const Projects = () => {
  return (
    <div className="bg-neutral-950 flex text-center flex-col mt-5">
      <Link to={"/"} className="lg:pl-20 lg:pt-20 sm:pl-10 lg:pb-10 sm:pb-5">
        <FaArrowAltCircleLeft className="text-3xl text-pink-600 mb-3 hover:scale-95 transition-transform duration-300 ease-in-out hover:text-pink-500 " />
      </Link>
      <span className="text-2xl font-bold text-pink-600">
        {" "}
        Projects <span className="text-pink-600 animate-pulse">.</span>
      </span>
      <p className="mt-2 text-3xl font-bold tracking-tight bg-gradient-to-r from-teal-500 via-pink-600 to-sky-600 bg-clip-text text-transparent sm:text-4xl">
        I worked on lots of projects .
      </p>
      {/* <EcomProjects /> */}
      <Myntra />
      <Portfolio />
      <Netflix />
    </div>
  );
};

export default Projects;
