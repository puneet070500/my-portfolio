import React from "react";
import Hero from "./Hero";

import AmoutMeSlide from "./AmoutMeSlide";
import SkillsSlide from "./SkillsSlide";
import ProjectsSlide from "./projects/ProjectsSlide";

import NewsLetter from "./NewsLetter";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AmoutMeSlide />
      <SkillsSlide />
      <ProjectsSlide />

      <NewsLetter />
    </div>
  );
};

export default HomePage;
