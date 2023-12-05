"use client";
import React, { useEffect, useState } from "react";
import { Box, height } from "@mui/system";
// import {
//   People,
//   House,
//   Work,
//   Accessibility,
//   Route,
//   EmojiTransportation,
// } from "@mui/icons-material";
import dynamic, { noSSR } from "next/dynamic";
import {
  // Table,
  // TableContainer,
  // TableHead,
  // TableRow,
  // TableCell,
  // TableBody,
  // Paper,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Tab,
  Button,
} from "@mui/material";

const OpenStreetMap = dynamic(() => import("src/components/EquityMap"), {
  ssr: false,
});

function EquityDashboard() {
  const opportunityList = {
    Jobs: {
      desc: "Number of jobs reachable on transit within a certain amount of time.",
    },
    Parks: {
      desc: "Total acreage of parks and public greenspace reachable on transit within a certain amount of time.",
    },
    Hospitals: {
      desc: "Transit travel time to the closest hospitals.",
    },
    "Colleges and Universities": {
      desc: "Transit travel time to the closest college or university.",
    },
    "Police Stations": {
      desc: "Number of jobs reachable on transit within a certain amount of time.",
    },
    Hotels: {
      desc: "Transit travel time to the closest hotels.",
    },
    "Bus Stops": {
      desc: "Transit travel time to the closest bus-stops.",
    },
    "Railway Stations": {
      desc: "Transit travel time to the closest railway stations.",
    },
  };

  const zonesList = {
    All: {
      desc: "All zones",
    },
    Bhelupur: {
      desc: {
        Z_Area: 17.338954587,
        Shape_Leng: 21994.9793599,
        Shape_Area: 17338954.58700000122,
        Z_ID: "Z04",
      },
    },
    Dashashwamedh: {
      desc: {
        Z_Area: 7.4903785753,
        Shape_Leng: 20683.1232454,
        Shape_Area: 7979316.64326999988,
        Z_ID: "Z03",
      },
    },
    Kotwali: {
      desc: {
        Z_Area: 2.29054603633,
        Shape_Leng: 9618.52193556,
        Shape_Area: 2299345.24134999979,
        Z_ID: "Z05",
      },
    },
    Adampur: {
      desc: {
        Z_Area: 6.52455663832,
        Shape_Leng: 14580.496414,
        Shape_Area: 6524373.31515000015,
        Z_ID: "Z02",
      },
    },
    Varunapar: {
      desc: {
        Z_Area: 33.900731316,
        Shape_Leng: 45029.9146022,
        Shape_Area: 34217029.40749999881,
        Z_ID: "Z01",
      },
    },
  };

  const [selectedOpportunity, setSelectedOpportunity] = useState(
    Object.keys(opportunityList)[0]
  );
  const [selectedZone, setSelectedZone] = useState(Object.keys(zonesList)[0]);

  const handleOpportunityChange = (event) => {
    setSelectedOpportunity(event.target.value);
    console.log(selectedOpportunity);
  };
  const handleSelectedZoneChange = (event) => {
    setSelectedZone(event.target.value);
    console.log(selectedZone);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    // You can perform actions when the form is submitted here

    console.log("Selected data:", { selectedOpportunity, selectedZone });
  };

  useEffect(() => {}, [selectedZone, selectedOpportunity]);

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          padding: "8px",
          backgroundColor: "#fdfdfd",
          opacity: 0.95,
          zIndex: 500,
          position: "absolute",
          right: "0px",
          width: "25vw",
          height: "80vh",
          overflow: "auto",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Box shadow
        }}
      >
        <form onSubmit={handleOnSubmit}>
          <Box>
            <Box
              className="tool-intro-para"
              sx={{
                color: "#526D82",
              }}
            >
              Adjust the settings to select metrics to display on the map, then
              click “<b>Update Map</b>” below to see results. Select a date from
              the timeline on the bottom right to see how transit access has
              changed over time.
            </Box>
            <Box sx={{}}>
              <InputLabel
                sx={{
                  color: "#526D82",
                  fontWeight: "bold",
                  margin: "5px 0",
                }}
                id="opportunity-access-label"
              >
                Opportunity to Access
              </InputLabel>
              <FormControl
                sx={{
                  width: "100%",
                }}
              >
                <Select
                  value={selectedOpportunity}
                  onChange={handleOpportunityChange}
                >
                  {Object.keys(opportunityList).map((opportunity) => (
                    <MenuItem key={opportunity} value={opportunity}>
                      {opportunity}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box
                sx={{
                  color: "#526D82",
                  paddingTop: "5px",
                }}
              >
                {opportunityList[selectedOpportunity].desc}
              </Box>
            </Box>
            <Box sx={{}}>
              <InputLabel
                sx={{
                  color: "#526D82",
                  fontWeight: "bold",
                  margin: "5px 0",
                }}
                id="select-zone-label"
              >
                Select Zone
              </InputLabel>
              <FormControl
                sx={{
                  width: "100%",
                }}
              >
                <Select
                  value={selectedZone}
                  onChange={handleSelectedZoneChange}
                >
                  {Object.keys(zonesList).map((zone) => (
                    <MenuItem key={zone} value={zone}>
                      {zone}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box
                sx={{
                  color: "#526D82",
                  paddingTop: "5px",
                }}
              >
                Choose a zone to display. The default is all zones. There are{" "}
                <b>5</b> zones in <b>Varanasi</b>. The zones are{" "}
                <b>Bhelupur, Dashashwamedh, Kotwali, Adampur, and Varunapar</b>.
              </Box>
            </Box>
            <Button
              sx={{
                marginTop: "10px",
                width: "100%",
              }}
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
      <Box>
        <OpenStreetMap
          zoomLevel={12}
          key={"equity_dashboard"}
          selectedZoneName={selectedZone}
        />
      </Box>
    </Box>
  );
}

export default EquityDashboard;
