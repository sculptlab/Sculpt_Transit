"use client";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import dynamic from "next/dynamic";
const OpenStreetMap = dynamic(() => import("src/components/OpenstreetMap"), {
  ssr: false,
});

import busStopData from "src/data/bus_stops.json";

function Dashboard() {
  const [wayPoints, setWayPoints] = useState([]);
  useEffect(() => {
    if (busStopData) {
      setWayPoints(busStopData?.stops);
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            width: "600px",
            height: "400px",
            margin: "auto",
          }}
        >
          <OpenStreetMap
            wayPoints={wayPoints}
            zoomLevel={15}
            key={"dashboard"}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
