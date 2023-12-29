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
  );
};

export default GenerateLink;
