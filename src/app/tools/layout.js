"use client";
import * as React from "react";
import SideBar from "src/components/SideBar";
import AppHeader from "src/components/AppHeader";
import styles from "src/css/dashboard.module.css";

export default function ToolsLayout({ children }) {
  return (
    <div className={styles.main__container}>
      <SideBar />
      <div className={styles.right__container}>
        <AppHeader />
        <div className={styles.main__content}>{children}</div>
      </div>
    </div>
  );
}
