import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import styles from "/src/css/About.module.css";

function PortraitBox({ image, name, univ }) {
  return (
    <Box classname={styles.portrait_box}>
      <Box classname={styles.portrait_box_image}>
        <Image
          src={image}
          width={200}
          height={220}
          objectFit="cover"
          alt={`Picture of ${name}`}
        />
      </Box>
      <Box classname={styles.portrait_box_data}>
        <Typography sx={{ textAlign: "center", fontSize: "20px" }}>
          {name}
        </Typography>
        {univ && (
          <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
            {univ}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default PortraitBox;
