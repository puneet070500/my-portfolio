import { useState } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { IoIosCloseCircleOutline } from "react-icons/io";
import PuneetResume from "../resume/Puneet_Patel_Resume.pdf";
import { FaBarsProgress } from "react-icons/fa6";
import { Link } from "react-router-dom";

const navigation = [
  { name: "About Me", href: "/aboutme" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Me", href: "/contact" },
];

const Hero = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-neutral-950 min-h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <span className=" text-3xl font-bold tracking-tight bg-gradient-to-r from-teal-500 via-pink-600 to-sky-600 bg-clip-text text-transparent"></span>
          </div>
          <div className="flex lg:hidden">
            <FaBarsProgress
              onClick={() => setMobileMenuOpen(true)}
              className="text-3xl font-bold text-pink-600 hover:text-pink-700 "
            />
          </div>
          <div className="hidden lg:flex lg:gap-x-12  ">
            {navigation.map((item) => (
              <span
                key={item.name}
                onClick={() => navigate(item.href)} // Use navigate instead of href
                className="cursor-pointer text-sm font-semibold leading-6 text-gray-400"
              >
                {item.name}
              </span>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-950 bg-opacity-95 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <span className=" text-3xl font-bold tracking-tight bg-gradient-to-r from-teal-500 via-pink-600 to-sky-600 bg-clip-text text-transparent "></span>

              <IoIosCloseCircleOutline
                className="text-pink-600 text-3xl font-bold cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
            <div className="mt-6 flow-root ">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <span
                      key={item.name}
                      onClick={() => navigate(item.href)} // Use navigate instead of href
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-pink-600 cursor-pointer"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
                <div className="py-6"></div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6  lg:px-8">
        <div
          className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl "
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#c51db7] to-[#3b8efc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-5xl pt-56 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-gray-500/10 hover:ring-gray-400/20 space-x-4 flex">
              HI , MY NAME IS
              <a href="#" className="font-semibold text-pink-600">
                <span className="absolute inset-0" aria-hidden="true" />
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className=" text-3xl font-bold tracking-tight bg-gradient-to-r from-teal-500 via-pink-600 to-sky-600 bg-clip-text text-transparent sm:text-5xl lg:h-[4rem] md:h-[5rem] sm:h-[7rem]">
              Puneet Patel{" "}
              <span className="text-pink-400 animate-pulse"> .</span>
            </h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="text-4xl font-bold tracking-tight bg-gradient-to-r from-teal-500 via-pink-600 to-sky-600 bg-clip-text text-transparent sm:text-6xl "
            >
              I am a Frontend Developer
            </motion.h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 ">
              I Like to build amazing UI/UX experience for humans 🚀.
            </p>
            <div className="mt-14 flex flex-col items-center justify-center gap-x-6 lg:flex-row ">
              <span
                onClick={() => navigate("/contact")} // Use navigate instead of href
                className="cursor-pointer rounded-full tracking-tight bg-gradient-to-r from-sky-500 to-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                <button>Want To Work With Me ?</button>
              </span>
              <a
                href={PuneetResume}
                download="Puneet_Patel_Resume.pdf"
                className="mt-4 lg:mt-0 rounded-full bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-gray-300 shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Download resume.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
