import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="pt-32 md:py-12 xl:container  min-h-screen  dark:bg-slate-900 m-auto px-6 md:px-12 md:mt-16 ">
      <div
        aria-hidden="true"
        className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-30"
      ></div>
      <div className="relative lg:flex lg:items-center lg:gap-12">
        <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
          <h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white">
            Shrink, Share, Track and Elevate Your{" "}
            <span className="text-primaryLight dark:text-primaryLight">
              Links.
            </span>
          </h1>
          <p className="mt-8 text-gray-600 dark:text-gray-300">
            Transform your links with our powerful shortener and tracker.
            Condense, share, and elevate your online influence effortlessly
          </p>
          <div>
            <form action="" className="w-full mt-12">
              <div className="relative flex items-center px-2 p-1 rounded-full bg-white dark:bg-gray-900 border dark:border-gray-700 border-primary/10 shadow-md md:p-2 lg:pr-3">
                <input
                  placeholder="Paste link here"
                  className="w-full p-4 rounded-full placeholder-gray-600 dark:placeholder-white dark:text-slate-400 bg-transparent outline-none"
                  type="url"
                />
                <div className="md:pr-1.5 lg:pr-0">
                  <button
                    type="button"
                    title="Start buying"
                    className="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                  >
                    <span className="relative hidden w-max text-white dark:text-gray-900 font-semibold md:block">
                      Generate Link
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative h-6 w-6 mx-auto text-white dark:text-gray-900 md:hidden"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* <div className="mt-12 flex gap-6 lg:gap-12 justify-between grayscale dark:grayscale-0">
          <Image
            src="/link_shortener.svg"
            width={20}
            height={20}
            className="h-8 sm:h-10 w-auto lg:h-12"
            alt="logo"
          />
        </div> */}
        </div>
        <div className="overflow-hidden  max-md:hidden w-full flex justify-center  lg:w-7/12 ">
          <Image
            src="/link_shortener.svg"
            alt="project illustration"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
