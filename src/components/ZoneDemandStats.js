import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useDataContext from "@/context/Datalayer";

function ZoneDemandStats({ zone }) {
  const [data, dispatch] = useDataContext();
  const [zoneDemand, setZoneDemand] = useState(null);

  useEffect(() => {
    let zones = [...data?.zones_demand];
    let temp = zones?.find((item) => item.W_NUM == zone);
    if (temp) {
      setZoneDemand(temp);
    }
  }, [zone, data?.zones_demand]);

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
        Zone Wise Demand
      </Typography>
      <Box>
        <Typography
          variant="h7"
          sx={{ margin: "auto", marginBottom: "15px", textAlign: "center" }}
          fontWeight={500}
        >
          {zoneDemand?.ward}
        </Typography>
        <br />
        {zoneDemand?.is_predicted && (
          <>
            <Typography variant="p" sx={{ fontSize: "12px" }}>
              (Predicted Values)
            </Typography>
            <br />
          </>
        )}
        <Typography variant="p" sx={{ fontSize: "12px" }}>
          Average Weekday Boarding : {Math.round(zoneDemand?.weekday_boarding)}
        </Typography>
        <br />
        <Typography variant="p" sx={{ fontSize: "12px" }}>
          Average Weekday Alighting :{" "}
          {Math.round(zoneDemand?.weekday_alighting)}
        </Typography>
        <br />
        <Typography variant="p" sx={{ fontSize: "12px" }}>
          Average Weekend Boarding : {Math.round(zoneDemand?.weekend_boarding)}
        </Typography>
        <br />
        <Typography variant="p" sx={{ fontSize: "12px" }}>
          Average Weekend Alighting :{" "}
          {Math.round(zoneDemand?.weekend_alighting)}
        </Typography>
      </Box>
    </Box>
  );
}

export default ZoneDemandStats;
