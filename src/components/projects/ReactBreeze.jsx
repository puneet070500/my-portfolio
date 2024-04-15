import React from "react";
import Reactbreeze from "../../images/Screenshot 2024-01-29 230136.png";
import { FaReact } from "react-icons/fa6";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
const ReactBreeze = () => {
  return (
    <div className="bg-neutral-950 py-24 sm:py-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src={Reactbreeze}
              alt=""
            />
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                ReactBreeze
              </h2>
              <ul className="mt-6 text-lg leading-8 text-gray-300 text-start">
                <li>
                  Developed a comprehensive React component library comprising
                  187 pre-built components spanning 19 categories.
                </li>
                <li>
                  Achieved a remarkable 30% reduction in development time across
                  various projects by integrating standardized components.
                </li>
                <li>
                  Introduced innovative features like component preview and code
                  copying, enhancing the development workflow efficiency by 20%.
                </li>
              </ul>
              <div className="mt-10 grid grid-cols-1 gap-x-2 gap-y-3 text-base leading-7 text-white sm:grid-cols-2">
                <span className="flex space-x-3">
                  <FaReact className="text-3xl mr-2 text-blue-500" />
                  React
                </span>
                <span className="flex space-x-3">
                  <SiJavascript className="text-3xl mr-2 text-yellow-500" />
                  Javascript
                </span>
                <span className="flex space-x-3">
                  <SiTailwindcss className="text-3xl mr-2 text-pink-600" />
                  Tailwind Css
                </span>
              </div>
              <div className="mt-10 flex">
                <a
                  href="https://react-breeze-ui-library.vercel.app/"
                  className="text-sm font-semibold leading-6 text-pink-400"
                >
                  See live project <span aria-hidden="true">&rarr;</span>
                </a>
                <a
                  href="https://github.com/abhishek-06-singh/ReactBreeze-UI-Library"
                  className="bg-pink-500 p-2 rounded-full text-gray-200 ml-auto w-32"
                >
                  {" "}
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ReactBreeze;
