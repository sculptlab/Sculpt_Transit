import { Button, Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import styles from "src/css/demandStats.module.css";
import CloseIcon from "@mui/icons-material/Close";
import DemandData from "src/data/demand.json";
import BarChart from "./BarChart";

function DemandStats({ show, toggleStat, origin, destination }) {
  const [demands, setDemands] = useState({});

  useEffect(() => {
    if (!origin || !destination) return;
    let temp = {};
    let originDemand = DemandData[origin?.label];
    let destinationDemand = DemandData[destination?.label];

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

  console.log(demands?.origin?.hourly_demand);
  return (
    <Card
      className={`${styles.stat_card}${
        show ? ` ${styles.stat_card_show}` : ""
      }`}
    >
      <Button className={styles.close_button} onClick={toggleStat}>
        <CloseIcon />
      </Button>
      <CardContent>
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
            <Typography
              variant="h7"
              sx={{ marginBottom: "15px" }}
              fontWeight={500}
            >
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
            <Typography
              variant="h7"
              sx={{ marginBottom: "15px" }}
              fontWeight={500}
            >
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
      </CardContent>
    </Card>
  );
}

export default DemandStats;
