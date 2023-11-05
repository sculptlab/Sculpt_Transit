"use client";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import dynamic from "next/dynamic";
const OpenStreetMap = dynamic(() => import("src/components/OpenstreetMap"), {
  ssr: false,
});

import { useTheme } from "@mui/material/styles";
import StatisticsCard from "@/components/StatisticsCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { getBusStopsData } from "@/data/DataManager";

function Dashboard() {
  const theme = useTheme();
  console.log(theme);
  const [wayPoints, setWayPoints] = useState([]);
  useEffect(() => {
    populateBusStops();
  }, []);

  const populateBusStops = async () => {
    let busStopData = await getBusStopsData();
    if (busStopData?.stops) {
      setWayPoints(busStopData?.stops);
    }
  };

  const details = [
    {
      bgColor: "#cd853f",
      data: [
        { label: "No of bus routes", value: 287 },
        { label: "No of trips", value: 1581 },
      ],
    },

    {
      bgColor: "#008080",
      data: [
        { label: "No of buses", value: 287 },
        { label: "Buses under Maintenance", value: 1581 },
      ],
    },
    {
      bgColor: "#4682b4",
      data: [
        { label: "No of bus stops", value: 287 },
        { label: "No of platforms", value: 1581 },
      ],
    },
    {
      bgColor: "#a0522d",
      data: [
        { label: "No of drivers", value: 287 },
        { label: "No of conductors", value: 1581 },
      ],
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Box sx={{ marginBottom: "20px" }}>
        <Grid2 container spacing={2} alignSelf={"stretch"}>
          {details?.map((item, idx) => (
            <Grid2 key={idx} item xs={12} sm={6} md={3}>
              <StatisticsCard
                key={idx}
                bgColor={item?.bgColor}
                data={item?.data}
              />
            </Grid2>
          ))}
        </Grid2>
      </Box>
      <Box sx={{ flex: 1 }}>
        <OpenStreetMap wayPoints={wayPoints} zoomLevel={15} key={"dashboard"} />
      </Box>
    </Box>
  );
}

export default Dashboard;
