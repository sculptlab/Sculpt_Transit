"use client";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React, { useState } from "react";
import styles from "/src/css/HomePage.module.css";

function HomepageHeader() {
  return (
    <Box className={styles.header}>
      <Typography variant="h5">SCULPT Transit</Typography>
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
        <Link href="/tools/transit/ridership">
          <MenuItem onClick={handleClose}>Operational Dashboard</MenuItem>
        </Link>
        <Link href="https://sculptlab.github.io/ART_Varanasi/">
          <MenuItem onClick={handleClose}>Planning Dashboard</MenuItem>
        </Link>
        <Link href="https://smarttransit.ai/">
          <MenuItem onClick={handleClose}>
            Integrated US-India Dashboard
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
};
