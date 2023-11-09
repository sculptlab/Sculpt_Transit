"use client";
import React, { useEffect, useState } from "react";
import SearchBox from "src/components/SeachBox";
import { Box } from "@mui/system";
import dynamic from "next/dynamic";
import useDataContext from "@/context/Datalayer";
const OpenStreetMap = dynamic(() => import("src/components/OpenstreetMap"), {
  ssr: false,
});

function Routes() {
  const [data, dispatch] = useDataContext();
  const [busStopList, setBusStopList] = useState([]);
  const [busStop, setBusStop] = useState(null);
  const [wayPoints, setWayPoints] = useState([]);

  useEffect(() => {
    setBusStopList(data?.bus_stops);
  }, [data?.bus_stops]);

  useEffect(() => {
    console.log(busStop);
    if (busStop) setWayPoints([{ ...busStop, show: true }]);
    else {
      setWayPoints([]);
    }
  }, [busStop]);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "5px",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "auto",
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "20px",
        }}
      >
        <SearchBox
          label="Search stops..."
          value={busStop}
          options={busStopList}
          onSelect={(option) => setBusStop(option)}
        />
      </Box>
      <Box sx={{ flex: 1, display: "flex", gap: "10px" }}>
        <Box sx={{ flex: 1 }}>
          <OpenStreetMap wayPoints={wayPoints} key={"transit"} />
        </Box>
      </Box>
    </Box>
  );
}

export default Routes;
