"use client";
import React, { useEffect } from "react";
import {
  getBusStopsData,
  getStopWiseDemand,
  getZoneWiseDemand,
} from "@/context/Actions";
import useDataContext from "@/context/Datalayer";

export default function ToolsLayout({ children }) {
  const [data, dispatch] = useDataContext();
  useEffect(() => {
    getBusStopsData(dispatch);
    getStopWiseDemand(dispatch);
    getZoneWiseDemand(dispatch);
  }, []);

  return <>{children}</>;
}
