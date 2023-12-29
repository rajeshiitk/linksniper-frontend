"use client";
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
};

function Loader({ loading }: { loading: boolean }) {
  return (
    <ClipLoader
      loading={loading}
      cssOverride={override}
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Loader;
