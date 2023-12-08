import * as React from "react";
import Typography from "@mui/material/Typography";
import styles from "src/css/dashboard.module.css";

export default function AppHeader() {
  return (
    <div className={styles.appheader}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        SCULPT Transit
      </Typography>
    </div>
  );
}
