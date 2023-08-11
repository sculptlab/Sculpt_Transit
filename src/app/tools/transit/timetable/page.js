"use client";
import React, { useEffect, useState } from "react";
import SearchBox from "src/components/SeachBox";
import { Box } from "@mui/system";
import dynamic from "next/dynamic";
const OpenStreetMap = dynamic(() => import("src/components/OpenstreetMap"), {
  ssr: false,
});

import busStopData from "src/data/bus_stops.json";
import Statistics from "src/components/Statistics";

function Dashboard() {
  const [busStopList, setBusStopList] = useState([]);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [wayPoints, setwayPoints] = useState([]);

  useEffect(() => {
    if (busStopData) {
      setBusStopList(busStopData?.stops);
    }
  }, []);

  useEffect(() => {
    if (origin && destination) {
      console.log(origin, destination);
      setwayPoints([origin, destination]);
    }
  }, [origin, destination]);

  const selectLocation = (locationType, option) => {
    if (locationType == "origin") setOrigin(option);
    if (locationType == "destination") setDestination(option);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "5px",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "20px",
          }}
        >
          <SearchBox
            label="Origin"
            value={origin}
            options={busStopList.filter((option) => option != destination)}
            onSelect={(option) => selectLocation("origin", option)}
          />
          <SearchBox
            label="Destination"
            value={destination}
            options={busStopList.filter((option) => option != origin)}
            onSelect={(option) => selectLocation("destination", option)}
          />
        </Box>
        <Box>
          <Box
            sx={{
              width: "600px",
              height: "400px",
              margin: "auto",
            }}
          >
            <OpenStreetMap wayPoints={wayPoints} key={"transit"} />
          </Box>
        </Box>
      </Box>
      {origin && destination && (
        <Box
          sx={{
            width: "250px",
          }}
        >
          <Statistics />
        </Box>
      )}
    </Box>
  );
}

export default Dashboard;
