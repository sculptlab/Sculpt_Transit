"use client";
import React, { useState } from "react";
import { Box } from "@mui/system";
import dynamic from "next/dynamic";
const OpenStreetMap = dynamic(() => import("src/components/OpenstreetMap"), {
  ssr: false,
});

import SideDrawer from "@/components/SideDrawer";
import ZoneDemandStats from "@/components/ZoneDemandStats";

function Zones() {
  const [currZone, setCurrZone] = useState(null);

  const onZoneClick = (feature) => {
    let W_NUM = feature.properties.W_NUM;
    setCurrZone(W_NUM);
  };

  const toggleStat = () => {
    setCurrZone(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Box sx={{ flex: 1, display: "flex", gap: "10px", position: "relative" }}>
        <Box sx={{ flex: 1 }}>
          <OpenStreetMap
            showZoneLayer={true}
            key={"zones"}
            onFeatureClick={onZoneClick}
          />
        </Box>
        <SideDrawer show={currZone} toggleView={toggleStat}>
          <ZoneDemandStats zone={currZone} />
        </SideDrawer>
      </Box>
    </Box>
  );
}

export default Zones;
