"use client";
import AuthLayout from "@/app/(auth)/auth.layout";
import { removeUser } from "@/provider/redux/slices/user.slice";
import { RootState } from "@/provider/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const LoginSignUpButton = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutHandler = async (e: any) => {
    e.preventDefault();
    try {
      await localStorage.removeItem("token");
      await dispatch(removeUser());
      toast.success("Logout successful");
      router.replace("/login");
      // window.location.reload();
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full space-y-2 b border-none flex flex-col  sm:flex-row lg:space-y-0 md:w-max lg:border-l">
        {user ? (
          <button
            onClick={logoutHandler}
            className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
          >
            <span className="relative text-sm font-semibold text-white dark:text-gray-900">
              Logout
            </span>
          </button>
        ) : (
          <>
            <Link
              href="/sign-up"
              className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 dark:focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
            >
              <span className="relative text-sm font-semibold text-primary dark:text-primaryLight">
                Sign Up
              </span>
            </Link>
            <Link
              href="/login"
              className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
            >
              <span className="relative text-sm font-semibold text-white dark:text-gray-900">
                Login
              </span>
            </Link>
          </>
        )}
      </div>
    </AuthLayout>
  );
};

export default LoginSignUpButton;
