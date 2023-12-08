import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import styles from "src/css/dashboard.module.css";
import { usePathname } from "next/navigation";
import SideBarTabs from "./SideBarTabs";

export default function AppHeader() {
  const pathname = usePathname();
  const [pageTitle, setPageTitle] = useState(null);

  useEffect(() => {
    let title = getTitle(SideBarTabs);
    if (title) setPageTitle(title);
  }, [pathname]);

  const getTitle = (list) => {
    for (let idx = 0; idx < list.length; idx++) {
      if (list[idx].path === pathname && !list[idx].subtabs?.length) {
        return list[idx];
      }
      if (list[idx]?.subtabs?.length) {
        let title = getTitle(list[idx]?.subtabs);
        if (title) return title;
      }
    }
  };

  return (
    <div className={styles.appheader}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {pageTitle && (
          <div className={styles.appheader_title}>
            {pageTitle?.icon}
            {pageTitle?.label}
          </div>
        )}
      </Typography>
    </div>
  );
}
