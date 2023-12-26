"use client";
import { useUpdatePasswordMutation } from "@/provider/redux/queries/auth.query";
import {
  IUpdatePassword,
  updatePasswordSchema,
} from "@/validationSchema/updatePassword.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [updatePassword, updatePasswordResponse] = useUpdatePasswordMutation();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  //   console.log(token);
  const router = useRouter();

  if (!token) {
    router.replace("/login");
  }
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IUpdatePassword>({
    resolver: zodResolver(updatePasswordSchema),
  });

  const onSubmit: SubmitHandler<IUpdatePassword> = async (dat) => {
    console.log(dat);
    const { data, error } = (await updatePassword(dat)) as {
      data: any | undefined;
      error: FetchBaseQueryError;
    };
    if (error) {
      toast.error(error?.data?.message);
    } else {
      console.log(data);

      toast.success(data?.message);
    }
  };
  return (
    <>
      <ToastContainer />

      <div className=" h-screen xl:container px-12 sm:px-0 mx-auto ">
        <div
          aria-hidden="true"
          className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-30 dark:opacity-20"
        ></div>
        <div className="mx-auto sm:w-max">
          <div className="m-auto ">
            <div className="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">
                Update Password
              </h3>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-10 space-y-8 dark:text-white"
              >
                <div>
                  <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input
                      id="email"
                      type="email"
                      placeholder="Email address"
                      className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                      {...register("email")}
                      onChange={() => {
                        setValue("token", token);
                      }}
                    />
                  </div>
                  {errors?.email?.message && (
                    <p className="text-red-700">{errors?.email?.message}</p>
                  )}
                </div>

                <div className="flex flex-col items-end">
                  <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input
                      id="password"
                      type="password"
                      placeholder="New Password"
                      className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                      {...register("password")}
                    />
                  </div>
                  {errors.password?.message && (
                    <p className="text-red-700">{errors.password?.message}</p>
                  )}
                </div>
                <div className="flex flex-col items-end">
                  <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                      {...register("confirmPassword")}
                    />
                  </div>
                  {errors.confirmPassword?.message && (
                    <p className="text-red-700">
                      {errors.confirmPassword?.message}
                    </p>
                  )}
                </div>

                <div>
                  <button
                    disabled={updatePasswordResponse.isLoading}
                    type="submit"
                    className="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
                  >
                    <span className="text-base font-semibold text-white dark:text-gray-900">
                      {updatePasswordResponse.isLoading
                        ? "Loading..."
                        : "Update Password"}
                    </span>
                  </button>
                  <Link href="sign-up">
                    <button type="reset" className="-ml-3 w-max p-3">
                      <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                        Create new account
                      </span>
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
