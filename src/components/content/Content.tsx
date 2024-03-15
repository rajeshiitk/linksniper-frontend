/* eslint-disable no-undef */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useGetAnalyticsMutation } from "@/provider/redux/queries/link.query";
function Content() {
  const [getAnalytics] = useGetAnalyticsMutation({});
  // const [generateLink, generateLinkResponse] = useGenerateLinkMutation({
  //   fixedCacheKey: "generateLink",
  // });
  const { data = {}, status } = useSelector(
    (state) =>
      // @ts-ignore
      state?.linkApi?.mutations?.generateLink || {
        data: undefined,
        status: undefined,
      }
  );

  const [copied, setCopied] = useState(false);

  const handleCopy = ({ shortId }: { shortId: string }): void => {
    if (shortId) {
      // eslint-disable-next-line no-undef
      navigator.clipboard.writeText(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/${shortId}`
      );
      setCopied(true);
      toast.success("Copied to clipboard !");
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } else {
      toast.error("Something went wrong");
    }
  };

  // analytics
  const handleGetAnalytics = async (shortId: any) => {
    const { data, error } = (await getAnalytics(shortId)) as {
      data: any | undefined;
      error: FetchBaseQueryError;
    };
    if (error) {
      console.log(error);
    } else {
      alert(JSON.stringify(data));
      console.log(data);
    }
  };

  return (
    <>
      <ToastContainer />
      {status === "fulfilled" && (
        <div id="content" className="min-h-screen  px-4 md:px-12 py-8">
          <div className="flex flex-col gap-6 md:mx-auto mt-16 md:w-8/12 lg:w-full ">
            <div className=" space-y-6 border relative md:mx-32 border-gray-200 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-4   text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div
                aria-hidden="true"
                className="absolute inset-0 m-auto w-full  rotate-10 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-10 dark:opacity-20"
              ></div>
              <h3 className="text-center text-2xl text-slate-900 dark:text-slate-100">
                Your Shorten Url is Ready
              </h3>
              <div className="flex flex-col items-center   py-10 mt-2 h-full">
                <div
                  id="link"
                  className=" z-10 my-auto bg-transparent  text-gray-600 text-sm  md:text-lg font-semibold  w-full h-10 dark:text-slate-100  rounded break-all  "
                >
                  {`${process.env.NEXT_PUBLIC_BACKEND_URL}/${data?.shortId}`}
                </div>
                <button
                  onClick={() => {
                    handleGetAnalytics({ shortId: data?.shortId });
                  }}
                  className="bg-green-500 hover:bg-green-700 z-10 w-fit absolute top-2 right-2  h-10 text-white font-bold py-2 px-4  rounded-full"
                >
                  Get analytics
                </button>
                <button
                  onClick={() => {
                    handleCopy({ shortId: data?.shortId });
                  }}
                  className={`bg-blue-500 z-10 w-1/3 hover:bg-blue-700 h-10 text-white font-bold py-2 px-4 rounded ${
                    copied ? "bg-green-500 hover:bg-green-500" : ""
                  }`}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
            <div className="flex flex-col  md:flex-row gap-8 m-auto">
              <div className="w-full  space-y-6 border border-gray-200 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 my-auto w-full h-32 rotate-90 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-5 dark:opacity-20"
                ></div>
                <h3 className="text-center text-2xl text-slate-900 dark:text-slate-200">
                  Download Your QR Code
                </h3>
                <Image
                  width={240}
                  height={240}
                  className="mx-auto"
                  src="/real_time_analytics.svg"
                  alt="illustration"
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Download QR Code
                </button>
              </div>
              <div className="relative w-full space-y-6 border border-gray-200 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 my-auto w-full h-32 rotate-90 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-10 dark:opacity-20"
                ></div>
                <h1 className="text-center text-slate-900 dark:text-slate-200">
                  Try SniperTree Now
                </h1>
                <Image
                  width={300}
                  height={300}
                  className="mx-auto "
                  src="/share.svg"
                  alt="illustration"
                  loading="lazy"
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Content;
