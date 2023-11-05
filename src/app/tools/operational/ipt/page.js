"use client";
import React, { useEffect, useState } from "react";
import SearchBox from "src/components/SeachBox";
import { Box } from "@mui/system";
import dynamic from "next/dynamic";
const OpenStreetMap = dynamic(() => import("src/components/OpenstreetMap"), {
  ssr: false,
});

import { getBusStopsData } from "@/data/DataManager";

function Dashboard() {
  const [busStopList, setBusStopList] = useState([]);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    populateBusStops();
  }, []);

  const populateBusStops = async () => {
    let busStopData = await getBusStopsData();
    if (busStopData?.stops) {
      setBusStopList(busStopData?.stops);
    }
  };

  const selectLocation = (locationType, option) => {
    if (locationType == "origin") setOrigin(option);
    if (locationType == "destination") setDestination(option);
  };

  return (
    <Box
      sx={{
        display: "flex",
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
            options={busStopList?.filter((option) => option != destination)}
            onSelect={(option) => selectLocation("origin", option)}
          />
          <SearchBox
            label="Destination"
            value={destination}
            options={busStopList?.filter((option) => option != origin)}
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
            <OpenStreetMap origin={origin} destination={destination} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
