"use client";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React, { useState } from "react";
import styles from "/src/css/HomePage.module.css";
import Logo from "./Logo";

const link1 = "/tools/operational/dashboard";
const link2 = "/tools/equity";
const link3 = "https://sculptlab.github.io/ART_Varanasi/";
const link4 = "http://wego.smarttransit.ai/";

const logo = "/assets/SCULPT_LOGO_BLACK_TEXT.png";

function HomepageHeader() {
  return (
    <Box className={styles.header}>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Logo url={logo} />
      </Box>
      <Box className={styles.header_buttons}>
        <Link href="/about">About Us</Link>
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
        Dashboards
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
          <MenuItem onClick={handleClose}>Equity Dashboard</MenuItem>
        </Link>
        <Link href={link3}>
          <MenuItem onClick={handleClose}>Planning Dashboard</MenuItem>
        </Link>
        <Link href={link4}>
          <MenuItem onClick={handleClose}>
            Integrated US-India Dashboard
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
};
