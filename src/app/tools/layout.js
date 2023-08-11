"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import SideBar from "src/components/SideBar";
import AppHeader from "src/components/AppHeader";

export default function ToolsLayout({ children }) {
  return (
    <Box>
      <AppHeader />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SideBar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
