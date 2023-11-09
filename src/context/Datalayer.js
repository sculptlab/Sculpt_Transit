"use client";
import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./Reducer";

export const dataContext = createContext();

export const DataProvider = ({ children }) => (
  <dataContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </dataContext.Provider>
);

// Define your custom hook
const useDataContext = () => {
  const context = useContext(dataContext);
  if (!context) {
    throw new Error("dataContext must be used within an AppProvider");
  }
  return context;
};

export default useDataContext;
