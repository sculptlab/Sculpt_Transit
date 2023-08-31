import { Box } from "@mui/system";
import React from "react";
import styles from "/src/css/About.module.css";
import Image from "next/image";
import { Typography } from "@mui/material";
import PortraitBox from "@/components/PortraitBox";
import HomepageHeader from "@/components/HomepageHeader";

const people = {
  principal_investigators: [
    {
      name: "Agnivesh P",
      image: "/assets/portraits/Agnivesh.jpg",
    },
    {
      name: "Abhishek Dubey",
      image: "/assets/portraits/Abhishek.jpg",
    },
  ],
  co_investigators: [
    { name: "Ankit Gupta", image: "/assets/portraits/ankit.jpg" },
    { name: "Philip Pugliese", image: "/assets/portraits/philip.jpg" },
    { name: "Aron Laszka", image: "/assets/portraits/aron.jpg" },
    { name: "Varun Varghese", image: "/assets/portraits/varun.jpg" },
    { name: "Samitha Samaranayake", image: "/assets/portraits/samitha.jpg" },
    { name: "Mina Sartipi", image: "/assets/portraits/mina.jpg" },
    { name: "Paul Speer", image: "/assets/portraits/paul.jpg" },
    { name: "Ayan Mukhopadhyay", image: "/assets/portraits/ayan.jpg" },
  ],
  core_team: [
    { name: "Aadil M Moopan", image: "/assets/portraits/aadil.jpeg" },
    { name: "Shijith S", image: "/assets/portraits/shijith.jpg" },
    { name: "Hridya G Muralidharan", image: "/assets/portraits/Hridya.jpeg" },
    { name: "Sai Naveen Balla", image: "/assets/portraits/naveen.jpg" },
    { name: "Shravan G", image: "/assets/portraits/Shravan.jpg" },
    { name: "Pankaj", image: "/assets/portraits/Pankaj.jpg" },
  ],
};

function About() {
  return (
    <Box className={styles.about_page}>
      <HomepageHeader />
      <Box className={styles.about_banner}>
        <Typography variant="h1">About Us</Typography>
      </Box>
      <Box className={styles.about_passage}>
        <Typography fontSize={18}>
          Dr. Pani and his Indian research team is already actively engaged with
          the City of Varanasi, India, to optimize public transportation through
          the NSF S&amp;CC project (US-India Collaboration) CNS-1952011. In
          particular, the team has collaborated to study the feasibility of
          ropeway public transport and to show how it can be integrated and
          operated along with the other modes of public transportation in the
          city of Varanasi. PI Pani (IIT-BHU) contributes to this thrust with
          his background in transportation planning, discrete choice modelling
          of users’ decision-making, and charging infrastructure planning. A key
          aspect of the work performed by the team in Chattanooga includes the
          design of models to predict the energy usage of various vehicles
          (e.g., EVs, ICEVs, hybrids) on public-transit routes and the optimal
          assignment of various vehicles from a mixed transit fleet to trips
          that need to be served for a daily transit schedule. A key aspect of
          the ongoing research for Varanasi public transportation, led by Dr.
          Pani, focuses on demand forecasting of route-level passenger travel,
          energy consumption models using battery performance data, and
          multi-modal fleet optimization for both EV and diesel buses operating
          in the city.
        </Typography>
      </Box>

      <Box sx={{ marginTop: "20px" }}>
        <PhotoBooth
          title="Principal Investigators"
          people={people["principal_investigators"]}
        />
        <PhotoBooth
          title="Co- Investigators"
          people={people["co_investigators"]}
        />
        <PhotoBooth title="Core Team" people={people["core_team"]} />
      </Box>
    </Box>
  );
}

export default About;

const PhotoBooth = ({ title, people }) => {
  return (
    <Box className={styles.photo_booth}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "600", marginBottom: "20px" }}
      >
        {title}
      </Typography>
      <Box className={styles.photo_booth_portraits}>
        {people.map((person, idx) => (
          <PortraitBox key={idx} image={person?.image} name={person?.name} />
        ))}
      </Box>
    </Box>
  );
};
