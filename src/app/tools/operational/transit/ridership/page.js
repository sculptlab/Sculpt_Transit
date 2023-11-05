"use client";
import React, { useEffect, useState } from "react";
import SearchBox from "src/components/SeachBox";
import { Box } from "@mui/system";
import dynamic from "next/dynamic";
const OpenStreetMap = dynamic(() => import("src/components/OpenstreetMap"), {
  ssr: false,
});

import BarChartIcon from "@mui/icons-material/BarChart";
import { Button } from "@mui/material";
import DemandStats from "@/components/DemandStats";
import { getBusStopsData } from "@/data/DataManager";

function Ridership() {
  const [busStopList, setBusStopList] = useState([]);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [wayPoints, setwayPoints] = useState([]);
  const [showStat, setShowStat] = useState(false);
  const [showStatButton, setShowStatButton] = useState(false);

  useEffect(() => {
    populateBusStops();
  }, []);

  const populateBusStops = async () => {
    let busStopData = await getBusStopsData();
    if (busStopData?.stops) {
      setBusStopList(busStopData?.stops);
    }
  };

  useEffect(() => {
    if (origin && destination) {
      console.log(origin, destination);
      let start = { ...origin, show: true };
      let end = { ...destination, show: true };
      setwayPoints([start, end]);
      setShowStatButton(true);
    } else {
      setShowStatButton(false);
      setShowStat(false);
    }
  }, [origin, destination]);

  const toggleStat = () => {
    setShowStat((flag) => !flag);
  };

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
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "20px",
          gap: "10px",
        }}
      >
        <SearchBox
          label="Origin"
          value={origin}
          options={busStopList?.filter((option) => option != destination)}
          onSelect={(option) => setOrigin(option)}
        />
        <SearchBox
          label="Destination"
          value={destination}
          options={busStopList?.filter((option) => option != origin)}
          onSelect={(option) => setDestination(option)}
        />
      </Box>
      <Box sx={{ flex: 1, display: "flex", gap: "10px", position: "relative" }}>
        <Box sx={{ flex: 1 }}>
          <OpenStreetMap wayPoints={wayPoints} key={"transit"} />
        </Box>

        <DemandStats
          show={showStat}
          toggleStat={toggleStat}
          origin={origin}
          destination={destination}
        />
        {showStatButton && !showStat && <StatButton toggleStat={toggleStat} />}
      </Box>
    </Box>
  );
}

export default Ridership;

const StatButton = ({ toggleStat }) => (
  <Button
    sx={{
      background: (theme) => theme.palette.primary.main,
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      padding: 0,
      minWidth: "0",
      zIndex: 1000,
      position: "absolute",
      right: 10,
      top: 10,
      "&:hover": {
        backgroundColor: (theme) => theme.palette.primary.main,
      },
    }}
    onClick={toggleStat}
  >
    <BarChartIcon
      sx={{ color: (theme) => theme.palette.primary.contrastText }}
    />
  </Button>
);
