import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import useDataContext from "@/context/Datalayer";

function BusStopDemandStats({ origin, destination }) {
  const [data, dispatch] = useDataContext();
  const [demands, setDemands] = useState({});

  useEffect(() => {
    if (!origin || !destination) return;
    let temp = {};
    let demandData = data?.stops_demand;
    let originDemand = demandData[origin?.label];
    let destinationDemand = demandData[destination?.label];

    temp["origin"] = {
      daily_demand: Math.round(originDemand?.daily_demand),
      hourly_demand: originDemand?.hourly_demand,
    };
    temp["destination"] = {
      daily_demand: Math.round(destinationDemand?.daily_demand),
      hourly_demand: destinationDemand?.hourly_demand,
    };
    setDemands(temp);
  }, [origin, destination]);

  return (
    <Box
      sx={{
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        gap: "15px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ marginBottom: "10px", textAlign: "center" }}
        fontWeight={600}
      >
        Demand
      </Typography>
      <Box>
        <Typography variant="h7" sx={{ marginBottom: "15px" }} fontWeight={500}>
          {origin?.label}
        </Typography>
        <br />
        <Typography variant="p" sx={{ fontSize: "12px" }}>
          Average Daily Demand : {demands?.origin?.daily_demand}
        </Typography>
        <BarChart
          title="Average Hourly Demand"
          list={demands?.origin?.hourly_demand}
          keyLabel={"hour"}
          valueLabel={"demand"}
        />
      </Box>
      <Box>
        <Typography variant="h7" sx={{ marginBottom: "15px" }} fontWeight={500}>
          {destination?.label}
        </Typography>
        <br />
        <Typography variant="p" sx={{ fontSize: "12px" }}>
          Average Daily Demand : {demands?.destination?.daily_demand}
        </Typography>
        <BarChart
          title="Average Hourly Demand"
          list={demands?.destination?.hourly_demand}
          keyLabel={"hour"}
          valueLabel={"demand"}
        />
      </Box>
    </Box>
  );
}

export default BusStopDemandStats;
