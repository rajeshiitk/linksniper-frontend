import Image from "next/image";
import React from "react";
import GenerateLink from "./GenerateLink";

const Hero = () => {
  return (
    <div className="pt-32 md:py-12  xl:container  min-h-screen  dark:bg-slate-900 m-auto px-6 md:px-12 md:mt-16 ">
      <div
        aria-hidden="true"
        className="absolute inset-0 my-auto w-32 sm:w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-30"
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
            <GenerateLink />
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
