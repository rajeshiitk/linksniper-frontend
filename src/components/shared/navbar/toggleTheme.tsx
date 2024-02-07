"use client";
import { setTheme } from "@/provider/redux/slices/theme.slice";
import { RootState } from "@/provider/redux/store";
import { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";

function ToggleTheme() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <div>
      <button
        className="text-xl px-4  hover:text-blue-600 "
        onClick={toggleTheme}
      >
        {theme === "dark" ? <FiSun /> : <FiMoon />}
      </button>
    </div>
  );
}

export default ToggleTheme;
