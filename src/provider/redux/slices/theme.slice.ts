"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  theme: string;
}
const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme") || "light";
  } else {
    return "light"; // Default theme if localStorage is not available
  }
};

const initialState: ThemeState = {
  theme: getInitialTheme(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload); // Save theme to local storage
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
