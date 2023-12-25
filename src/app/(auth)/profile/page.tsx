"use client";
import Navbar from "@/components/shared/Navbar";
import { useUserProfileQuery } from "@/provider/redux/queries/auth.query";
import Image from "next/image";
import React from "react";
import AuthLayout from "../auth.layout";
import { useSelector } from "react-redux";
import { RootState } from "@/provider/redux/store";

const Profile = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <AuthLayout>
      <Navbar />
      {user && (
        <div className="h-screen pt-12">
          <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div className="border-b px-4 pb-6">
              <div className="text-center my-4">
                <Image
                  width={20}
                  height={20}
                  className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                  // src={`http://localhost:3001/static/${user?.avatar}`}
                  src="next.svg"
                  alt=""
                />
                <div className="py-2">
                  <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
                    {user?.name}
                  </h3>
                  <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                    {user?.email}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 px-2">
                <button className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                  Follow
                </button>
                <button className="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2">
                  Message
                </button>
              </div>
            </div>
            <div className="px-4 py-4">
              <div className="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
                Joined at {user?.createdAt}
              </div>
            </div>
          </div>
        </div>
      )}
    </AuthLayout>
  );
};

export default Profile;
