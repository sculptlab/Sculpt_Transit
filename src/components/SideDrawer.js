import { Button, Card, CardContent } from "@mui/material";
import React from "react";
import styles from "src/css/demandStats.module.css";
import CloseIcon from "@mui/icons-material/Close";

function SideDrawer({ children, show, toggleView }) {
  return (
    <Card
      className={`${styles.stat_card}${
        show ? ` ${styles.stat_card_show}` : ""
      }`}
    >
      <Button className={styles.close_button} onClick={toggleView}>
        <CloseIcon />
      </Button>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default SideDrawer;
