"use client";
import { useGenerateLinkMutation } from "@/provider/redux/queries/link.query";
import {
  IGenerateLink,
  generateLinkSchema,
} from "@/validationSchema/generateLink.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Loader from "../loader/Loader";

const GenerateLink = () => {
  const [generateLink, generateLinkResponse] = useGenerateLinkMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IGenerateLink>({
    resolver: zodResolver(generateLinkSchema),
  });

  const onSubmit: SubmitHandler<IGenerateLink> = async (dat) => {
    console.log(dat);

    const { data, error } = (await generateLink(dat)) as {
      data: any | undefined;
      error: FetchBaseQueryError;
    };
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-12">
        <div className="relative  flex items-center px-2 p-1 rounded-full bg-white dark:bg-gray-900 border dark:border-gray-700 border-primary/10 shadow-md md:p-2 lg:pr-3">
          <input
            placeholder="https://example.com"
            className="w-full p-4 rounded-full placeholder-gray-600 dark:placeholder-white dark:text-slate-400 bg-transparent outline-none"
            type="text"
            {...register("originalUrl")}
          />
          <div className="md:pr-1.5 lg:pr-0">
            <button
              type="submit"
              id="generateLink"
              title="Generate Link"
              className="relative h-12 w-12 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
            >
              {generateLinkResponse.isLoading ? (
                <Loader loading={generateLinkResponse.isLoading} />
              ) : (
                <>
                  <span className="relative hidden w-max text-white dark:text-gray-900 font-semibold md:block">
                    Generate Link
                  </span>
                  <span className="relative justify-center w-max text-white dark:text-gray-900 font-semibold md:hidden">
                    <Image
                      src="/generate-link.svg"
                      width={50}
                      height={50}
                      className="m-auto"
                      alt="generate link"
                    />
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
        {errors.originalUrl?.message && (
          <p className="text-red-700">{errors.originalUrl?.message}</p>
        )}
      </form>
      <div className="flex items-stretch mt-2">
        <div className="relative w-full">
          <div className="absolute text-gray-500 flex items-center px-2 border-r h-full"></div>
          <input
            id="link"
            className="pr-24 text-gray-600 bg-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-12 text-sm border-gray-300 rounded border"
            value={`https://localhost:3001/${generateLinkResponse.data?.shortId}}`}
          />
          <button className="focus:ring-2 focus:ring-offset-2 rounded-md focus:ring-indigo-600 absolute right-0 top-0 transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none bg-indigo-700 rounded-r text-white px-5 h-10 text-sm">
            Copy
          </button>
        </div>
      </div>
    </>
  );
};

export default GenerateLink;
