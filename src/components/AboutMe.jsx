import React from "react";
import me from "../images/my-image2.jpg";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { TfiGithub } from "react-icons/tfi";
import { FaArrowAltCircleLeft, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <>
      <div className="bg-neutral-950 pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
        <div className="bg-gradient-to-r from-pink-800 to-pink-950 pb-20 sm:pb-24 xl:pb-0 ">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div className="relative aspect-[4/3] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                <img
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-contain shadow-2xl"
                  src={me}
                  alt=""
                />
              </div>
            </div>
            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              <figure className="relative isolate pt-6 sm:pt-12">
                <blockquote className="text-xl font-semibold leading-8 text-gray-200 sm:text-2xl sm:leading-9">
                  <p>
                    With nearly half year of experience, I am a Front-End/UI
                    Developer specializing in{" "}
                    <span className="text-blue-600">React,</span>{" "}
                    <span className="text-purple-600">Redux,</span>
                    <span className="text-yellow-600">JavaScript, </span>
                    and <span className="text-pink-500">Tailwind CSS</span>. My
                    passion lies in creating visually appealing and responsive
                    web applications.
                  </p>
                </blockquote>

                <div className="flex space-x-5 mt-3 ml-auto">
                  {" "}
                  {/* Adjusted the position with ml-auto */}
                  <FaReact className="text-blue-600 text-3xl" />
                  <SiJavascript className="text-yellow-600 text-3xl" />
                  <SiTailwindcss className="text-pink-500 text-3xl" />
                  <SiRedux className="text-purple-600 text-3xl" />
                </div>
                <figcaption className="mt-8 text-base">
                  <div className="font-semibold text-white">Puneet Patel</div>
                  <div className="mt-1 text-gray-400">React Developer</div>
                  <a href="https://github.com/puneet070500">
                    <div className="flex space-x-4 text-gray-300 mt-3 cursor-default">
                      <TfiGithub className="text-3xl mr-3 text-blue-500 cursor-pointer" />
                      My Github
                    </div>
                  </a>
                  <Link to={"/"}>
                    <FaArrowAltCircleLeft className=" mt-3 text-3xl text-pink-300 mb-3 hover:scale-95 transition-transform duration-300 ease-in-out hover:text-pink-500 " />
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
