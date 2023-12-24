"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import styles from "/src/css/HomePage.module.css";
import Image from "next/image";
import CircleIcon from "@mui/icons-material/Circle";
import { useState } from "react";
import HomepageHeader from "@/components/HomepageHeader";
import TypingTextBox from "@/components/TypingTextBox";

const section2_image = "/assets/homepage_section2.png";
const objective1_1_image = "/assets/objective1_1.png";
const objective1_2_image = "/assets/objective1_2.png";
const objective2_1_image = "/assets/objective2_1.png";
const objective2_2_image = "/assets/objective2_2.png";
const objective3_1_image = "/assets/objective3_1.png";
const objective3_2_image = "/assets/objective3_1.png";
const objective4_1_image = "/assets/objective4_1.png";
const objective4_2_image = "/assets/objective4_1.png";

const section1Content = [
  {
    label: "",
    data: [
      "Focusing on Emerging Ropeway PT System, expected to be a catalyst for revitalizing public transport in Varanasi",
      "Project outcomes (Demand forecasting tools, transit simulation toolkit, routing algorithms) have national relevance in the context of 40 ropeways under feasibility studies across India",
      "Wider societal impact in the context of global push towards low carbon mobility and climate change mitigation",
    ],
    image: section2_image,
  },
];

const objectives = [
  {
    title:
      "1) Demand Forecasting and and Transit Network Expansion based on Equity",
    data: [
      {
        label: "Objectives",
        data: [
          "To develop a demand forecasting tool for predicting stop-wise and zone-wise transit origin-destination demand",
          "To develop phase-wise expansion plans of the transit network for ropeway implementation under demand uncertainty and equity considerations",
          "To determine optimal stop-locations and reduce the resource implications of the ropeway project using multi-criteria decision-making tools",
        ],
        image: objective1_1_image,
      },
      {
        label: "Deliverables",
        data: [
          "Collected Transit O-D Data of Diesel buses and electric buses in Varanasi",
          "Prepared demand forecasting models for stop-wise demand based on the built environment",
          "Analysis shows that existing transit network stop locations are accessible only to 18% of the population- An equity-based method proposed and a real-time online dashboard for identifying stop locations of aerial ropeway transit",
          "1 Manuscript Revision Under Review (Journal ofTransport Geography)",
          "Deliverable shared with UPSRTC and VSSCL",
        ],
        image: objective1_2_image,
      },
    ],
  },
  {
    title: "2) Simulation System that can assess the Impact of Transit Changes",
    data: [
      {
        label: "Objectives",
        data: [
          "Explore the potential of micro-transit services(using mini-buses already purchased by VMC through JNNURM) in Varanasi",
          "Collected data will be used to train machine learning(ML) models for quantifying accessibility impacts, equity considerations, and energy use prediction(DNL, OLS, and DTs) and study  their performance",
          "Identify the design parameters of transit network or operation that have maximum impact on operational efficiency, ridership and revenue",
        ],
        image: objective2_1_image,
      },
      {
        label: "Deliverables",
        data: [
          "Discrete choice models are developed to quantify the modal shift potential of latent class segments",
          "Potential shift to alternatives such as micro-transit analyzed based on scenario-wise changes and policy interventions",
          "Transit O-D estimated in Objective-1 was split based on the choice models developed as apart of Objective-2",
          "Model estimates were compared with real-time traffic data from Varanasi",
          "Patent under preparation for micro-transit operation in India",
        ],
        image: objective2_2_image,
      },
    ],
  },
  {
    title:
      "3) Operational Integration(Scheduling, Dispatching, First/Last Mile)",
    data: [
      {
        label: "Objectives",
        data: [
          "Proposed PT consists of the aerial ropeway, ground-based fixed route transit), paratransit, and potential feeder services such as micro-transit",
          "The project outcomes will be towards developing an app-based platform combining different routing, matching, and pricing algorithms for the multimodal PT network.",
          "Objective 1 is about Fixed line Bus service and RPT & Objective 2 is about Micro-transit algorithms, Objective 3 is about multimodal routing and integrated travel itinerary planning",
        ],
        image: objective3_1_image,
      },
      {
        label: "Deliverables",
        data: [
          "Data Availability is a major challenge for this objective",
          "Ridership Data on Diesel buses–Aggregate data for three years-2021, 2022, 2023",
          "On-board diagnostics data are required for developing scheduling/dispatching models",
          "Ridership Data on Electric buses–11 routes-RouteMap and Stop Wise Data",
          "Generated General Transit Feed Specifications for 3 modes of transportation: E-Bus, Ropeway and Auto-Rickshaw.",
        ],
        image: objective3_2_image,
      },
    ],
  },
  {
    title: "4) Suggesting Transit System Design Changes for Varanasi",
    data: [
      {
        label: "Objectives",
        data: [
          "Evaluate the impact of various policies and routing algorithms by extending the dynamic simulation platform, already developed using the active award TRANSIT-GYM",
          "This will help to optimize and integrate public transit services, which are inherently complex and are currently facing a wide array of operational challenges to optimize fixed-line services along with other alternatives such as urban ropeways or on-demand feeder series in a way that minimizes cost for the riders and transit agency.",
        ],
        image: objective4_1_image,
      },
      {
        label: "Deliverables",
        data: [
          "Collaboratively working with UPSRTC which shared all their operations and ticketing data and VSCL which shared ITMS traffic data",
          "Transit network changes are expected to be incorporated (stop location, bus frequency changes, route rationalization) after project completion",
          "A report on suggested operational changes on fleet dispatching, and EV charging will be submitted to the Govt. Agencies",
        ],
        image: objective4_2_image,
      },
    ],
  },
];

export default function HomePage() {
  return (
    <Box className={styles.page}>
      <HomepageHeader />

      <Box className={styles.section1}>
        <Typography variant="h2" className={styles.section1_text}>
          We are SCULPT
        </Typography>
        <Box className={styles.section1_subtext}>
          <TypingTextBox
            texts={[
              "Making Transit Accessible to All",
              "Ensuring Fairness and Equity in Transit Planning",
            ]}
            variant={"h4"}
          />
        </Box>
        <div className={styles.section1_overlay}></div>
      </Box>

      <SectionBlocks
        title={"India - US Project in a Nutshell"}
        contentList={section1Content}
        isImageRight={true}
      />
      <Typography
        variant="h4"
        className={styles.data_section_title}
        sx={{ textAlign: "center" }}
      >
        Objectives and Deliverables
      </Typography>
      {objectives.map((item, idx) => (
        <SectionBlocks
          key={idx}
          subtitle={item?.title}
          contentList={item?.data}
          isImageRight={idx % 2}
        />
      ))}
    </Box>
  );
}

const SectionBlocks = ({ title, contentList, subtitle, isImageRight }) => {
  const [currTopic, setCurrTopic] = useState(0);

  return (
    <Box className={styles.data_section}>
      {title && (
        <Typography variant="h4" className={styles.data_section_title}>
          {title}
        </Typography>
      )}
      <Box className={styles.data_section_columns}>
        <Box sx={{ order: isImageRight ? 1 : 2 }}>
          {subtitle && (
            <Typography variant="h5" className={styles.data_section_subtitle}>
              {subtitle}
            </Typography>
          )}
          {contentList?.length > 1 && (
            <Box sx={{ marginTop: "10px" }}>
              {contentList.map((item, idx) => (
                <Button
                  key={idx}
                  onClick={() => setCurrTopic(idx)}
                  sx={{
                    background: (theme) =>
                      idx == currTopic
                        ? theme.palette.primary.main
                        : theme.palette.secondary.main,
                    color: (theme) =>
                      idx == currTopic
                        ? theme.palette.primary.contrastText
                        : theme.palette.secondary.contrastText,
                    "&:hover": {
                      background: (theme) => theme.palette.primary.dark,
                      color: (theme) => theme.palette.primary.contrastText,
                    },
                    marginRight: "10px",
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          <CustomList list={contentList[currTopic]?.data} />
        </Box>
        <Box
          sx={{ order: isImageRight ? 2 : 1 }}
          className={styles.data_section_image}
        >
          <Image
            src={contentList[currTopic]?.image}
            width={400}
            height={300}
            alt={subtitle}
          />
        </Box>
      </Box>
    </Box>
  );
};

const CustomList = ({ list }) => {
  return (
    <List sx={{ listStyleType: "disc" }}>
      {list?.map((point, key) => (
        <ListItem key={key}>
          <ListItemIcon>
            <CircleIcon fontSize="10px" />
          </ListItemIcon>
          <ListItemText primary={point} />
        </ListItem>
      ))}
    </List>
  );
};
