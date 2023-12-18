import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="container relative min-h-screen m-auto px-6 text-gray-500 md:px-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-l from-primaryLight to-secondaryLight blur-3xl opacity-30 dark:opacity-20"
      ></div>
      <div className="m-auto text-center lg:w-7/12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          Our Services
        </h2>
      </div>
      <div className="grid gap-6 md:mx-auto mt-16 md:w-8/12 lg:w-full lg:grid-cols-3">
        <div className="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <Image
            width={350}
            height={350}
            className="mx-auto "
            src="/share_link.svg"
            alt="illustration"
            loading="lazy"
          />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Effortless Link Shortening
          </h3>
          <p>
            Simplify link management with one-click URL shortening, Enjoy a
            user-friendly interface for quick, hassle-free results.
          </p>
          <a
            href="#"
            className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125"
          >
            <span className="text-primary">&#8594;</span>
          </a>
        </div>
        <div className="group relative space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div
            aria-hidden="true"
            className="absolute inset-0 my-auto w-full h-32 rotate-90 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-5 dark:opacity-20"
          ></div>
          <Image
            width={240}
            height={240}
            className="mx-auto "
            src="/real_time_analytics.svg"
            alt="illustration"
            loading="lazy"
          />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Comprehensive Analytics
          </h3>
          <p>
            Gain insights with advanced analytics and detailed click reports,
            Track link performance and audience location effortlessly.
          </p>

          <a
            href="#"
            className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125"
          >
            <span className="text-primary">&#8594;</span>
          </a>
        </div>
        <div className="group relative space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div
            aria-hidden="true"
            className="absolute inset-0 my-auto w-full h-32 rotate-90 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-10 dark:opacity-20"
          ></div>
          <Image
            width={300}
            height={300}
            className="mx-auto "
            src="/share.svg"
            alt="illustration"
            loading="lazy"
          />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Enhanced Sharing Options
          </h3>
          <p>
            Manage links easily with personalized SniperTree, Generate QR codes
            for quick offline sharing. Access and organize your complete link
            history efficiently.
          </p>
          <a
            href="#"
            className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125"
          >
            <span className="text-primary">&#8594;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
