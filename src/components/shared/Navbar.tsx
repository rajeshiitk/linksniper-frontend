"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoginSignUpButton from "./navbar/LoginSignUpButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { navbar } from "@/constants/constants";
import ToggleTheme from "./navbar/toggleTheme";

// import { useSelector } from "react-redux";

const Navbar = () => {
  // const user = useSelector((state: RootState) => state.user.user);

  return (
    <header className="dark:bg-slate-900/60 z-50 sticky top-0 left-0">
      <ToastContainer />
      <input
        type="checkbox"
        name="hbr"
        id="hbr"
        className="hbr peer"
        hidden
        aria-hidden="true"
      />
      <nav className=" z-50 w-full bg-white/80 dark:bg-gray-900/30 dark:backdrop-blur-xl backdrop-blur-xl navbar shadow-md shadow-gray-600/5 peer-checked:navbar-active md:relative md:bg-transparent dark:shadow-none">
        <div className="xl:container m-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
            <div className="w-full flex justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="logo"
                className="flex space-x-2 items-center"
              >
                <div aria-hidden="true" className="flex space-x-1">
                  {/* <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-200"></div>
                    <div className="h-6 w-2 bg-primary dark:bg-primaryLight"></div> */}
                  <Image
                    src="/link_shortener.svg"
                    width={36}
                    height={36}
                    // className="h-8 sm:h-10 w-auto lg:h-12"
                    alt="logo"
                  />
                </div>
                <span className="text-base font-bold text-gray-600 dark:text-white">
                  LinkSniper
                </span>
              </Link>
              <label
                htmlFor="hbr"
                className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                ></div>
              </label>
            </div>
            <div className=" hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white  lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                  {navbar.map((item) => (
                    <li key={item.value}>
                      <a
                        href={item.href}
                        className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                  <ToggleTheme />
                </ul>
              </div>
              <LoginSignUpButton />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
