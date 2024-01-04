"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function Content() {
  // const [generateLink, generateLinkResponse] = useGenerateLinkMutation({
  //   fixedCacheKey: "generateLink",
  // });
  const { data = {}, status } = useSelector(
    (state) =>
      state?.linkApi?.mutations?.generateLink || {
        data: undefined,
        status: undefined,
      }
  );

  // useEffect(() => {
  //   if (status === "fulfilled") {
  //     toast.success("Link Generated");
  //   }
  // }, [data, status]);

  const [copied, setCopied] = useState(false);
  console.log(data, status);

  const handleCopy = ({ shortId }: { shortId: string }): void => {
    if (shortId) {
      navigator.clipboard.writeText(`https://localhost:3001/${shortId}`);
      setCopied(true);
      toast.success("Copied to clipboard");
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <ToastContainer />
      <div id="#content" className="min-h-screen  px-4 md:px-12 py-8">
        <div className="flex flex-col gap-6 md:mx-auto mt-16 md:w-8/12 lg:w-full ">
          <div className=" space-y-6 border relative mx-32 border-gray-200 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-4   text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div
              aria-hidden="true"
              className="absolute inset-0 my-auto w-full  rotate-10 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-10 dark:opacity-20"
            ></div>
            <h3 className="text-center text-2xl text-slate-900 dark:text-slate-200">
              Your Shorten Url is Ready
            </h3>
            <div className="flex  py-10 mt-2 h-full">
              <input
                id="link"
                className="pr-24 z-10 my-auto bg-transparent text-gray-600 border-none outline-none focus:border-none text-lg font-semibold  w-full h-10 flex items-center pl-12  border-gray-300 rounded "
                value={`https://localhost:3001/${data?.shortId}`}
              />
              <button
                onClick={() => {
                  handleCopy({ shortId: data?.shortId });
                  console.log({ shortId: data?.shortId });
                  console.log("hii");
                }}
                className={`bg-blue-500 z-10 hover:bg-blue-700 h-10 text-white font-bold py-2 px-4 rounded ${
                  copied ? "bg-green-500" : ""
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
    </>
    // <div className="flex w-full justify-center items-center h-screen">
    //   {/* Card 1: Copy Link */}
    //   <div className="max-w-sm mx-4 bg-white shadow-lg rounded-lg overflow-hidden">
    //     <div className="px-6 py-4">
    //       <div className="font-bold text-xl mb-2">Shortened Link</div>
    //       <p className="text-gray-700 text-base">{shortUrl}</p>
    //     </div>
    //     <div className="px-6 py-4">
    //       <button
    //         onClick={handleCopy}
    //         className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
    //           copied ? "bg-green-500" : ""
    //         }`}
    //       >
    //         {copied ? "Copied!" : "Copy Link"}
    //       </button>
    //     </div>
    //   </div>

    //   <div className="flex items-stretch mt-2">
    //     <div className="relative w-full">
    //       <div className="absolute text-gray-500 flex items-center px-2 border-r h-full"></div>
    //       <input
    //         id="link"
    //         className="pr-24 text-gray-600 bg-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-12 text-sm border-gray-300 rounded border"
    //         value="https://alphad.co/Q4XY3HWXN95"
    //       />
    //       <button className="focus:ring-2 focus:ring-offset-2 rounded-md focus:ring-indigo-600 absolute right-0 top-0 transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none bg-indigo-700 rounded-r text-white px-5 h-10 text-sm">
    //         Copy
    //       </button>
    //     </div>
    //   </div>

    //   {/* Card 2: Download QR Code */}
    //   <div className="max-w-sm mx-4 bg-white shadow-lg rounded-lg overflow-hidden">
    //     <div className="px-6 py-4">
    //       <div className="font-bold text-xl mb-2">QR Code</div>
    //       <div className="text-center">
    //         <Image src="/generate.svg" alt="qr code" width={150} height={150} />
    //         {/* <QRCode value={shortUrl} /> */}
    //       </div>
    //     </div>
    //     <div className="px-6 py-4">
    //       {/* <a
    //         href={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    //           shortUrl
    //         )}`}
    //         download="qr-code.png"
    //         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    //       >
    //         Download QR Code
    //       </a> */}
    //     </div>
    //   </div>
    // </div>
  );
}

export default Content;
