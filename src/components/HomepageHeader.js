"use client";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React, { useState } from "react";
import styles from "/src/css/HomePage.module.css";
import Image from "next/image";

const link1 = "/tools/transit/ridership";
const link2 = "https://sculptlab.github.io/ART_Varanasi/";
const link3 = "http://wego.smarttransit.ai/";

const logo = "/assets/sculpt_logo.jpg";

function HomepageHeader() {
  return (
    <Box className={styles.header}>
      <Link href="/">
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Image src={logo} alt={"logo"} height={40} width={40} />
          <Typography variant="h6">SCULPT Transit</Typography>
        </Box>
      </Link>
      <Box className={styles.header_buttons}>
        <Link href="/about">
          <Button>About Us</Button>
        </Link>
        <DashboardButton />
      </Box>
    </Box>
  );
}

export default HomepageHeader;

const DashboardButton = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Button className={styles.header_selected_button} onClick={handleOpen}>
        Dashboard
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Link href={link1}>
          <MenuItem onClick={handleClose}>Operational Dashboard</MenuItem>
        </Link>
        <Link href={link2}>
          <MenuItem onClick={handleClose}>Planning Dashboard</MenuItem>
        </Link>
        <Link href={link3}>
          <MenuItem onClick={handleClose}>
            Integrated US-India Dashboard
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
};
