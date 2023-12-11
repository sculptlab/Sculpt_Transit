import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import styles from "src/css/page.module.css";

function Logo() {
  return (
    <div>
      <div className={styles.logo}>
        <img src={"/assets/SCULPT_logo.png"} alt="SCULPT logo" />
      </div>
    </div>
  );
}

export default Logo;
