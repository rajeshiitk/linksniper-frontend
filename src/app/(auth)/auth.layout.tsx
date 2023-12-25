import { useUserProfileQuery } from "@/provider/redux/queries/auth.query";
import { setUser } from "@/provider/redux/slices/user.slice";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, isError } = useUserProfileQuery("user");
  const dispatch = useDispatch();
  const router = useRouter();

  if (isError) {
    router.replace("/login");
    return <></>;
  }
  if (isLoading) {
    return <>loading...</>;
  }

  if (!isLoading && data) {
    console.log(data?.user);
    dispatch(setUser(data?.user));
  }

  return <>{children}</>;
};

export default AuthLayout;
