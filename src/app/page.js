"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import SideDrawer from "src/components/SideDrawer";
import AppHeader from "src/components/AppHeader";
import Dashboard from "@/components/Dashboard";

export default function PermanentDrawerLeft() {
  return (
    <Box>
      <AppHeader />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SideDrawer />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >
          <Dashboard />
        </Box>
      </Box>
    </Box>
  );
}
