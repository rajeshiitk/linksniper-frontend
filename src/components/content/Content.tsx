"use client";
import Image from "next/image";
import React, { useState } from "react";
import Loader from "../loader/Loader";

function Content() {
  const [generateLinkResponse, setGenerateLinkResponse] = useState(true);
  const [copied, setCopied] = useState(false);
  const [shortUrl, setShortUrl] = useState(
    "https://google.com/wetqwertuqewreyqeWERTYTQWEERT"
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Card 1: Copy Link */}
      <div className="max-w-sm mx-4 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Shortened Link</div>
          <p className="text-gray-700 text-base">{shortUrl}</p>
        </div>
        <div className="px-6 py-4">
          <button
            onClick={handleCopy}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              copied ? "bg-green-500" : ""
            }`}
          >
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>
      </div>

      <div className="flex items-stretch mt-2">
        <div className="relative w-full">
          <div className="absolute text-gray-500 flex items-center px-2 border-r h-full"></div>
          <input
            id="link"
            className="pr-24 text-gray-600 bg-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-12 text-sm border-gray-300 rounded border"
            value="https://alphad.co/Q4XY3HWXN95"
          />
          <button className="focus:ring-2 focus:ring-offset-2 rounded-md focus:ring-indigo-600 absolute right-0 top-0 transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none bg-indigo-700 rounded-r text-white px-5 h-10 text-sm">
            Copy
          </button>
        </div>
      </div>

      {/* Card 2: Download QR Code */}
      <div className="max-w-sm mx-4 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">QR Code</div>
          <div className="text-center">
            <Image src="/generate.svg" alt="qr code" width={150} height={150} />
            {/* <QRCode value={shortUrl} /> */}
          </div>
        </div>
        <div className="px-6 py-4">
          {/* <a
            href={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
              shortUrl
            )}`}
            download="qr-code.png"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Download QR Code
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Content;
