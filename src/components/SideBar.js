import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import styles from "src/css/page.module.css";
import { Collapse, Toolbar } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import ElectricRickshawIcon from "@mui/icons-material/ElectricRickshaw";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import DashboardIcon from "@mui/icons-material/Dashboard";

const sideBarTabs = [
  {
    label: "Dashboard",
    path: "/tools/dashboard",
    icon: <DashboardIcon />,
  },
  {
    label: "Transit",
    path: "/tools/transit/ridership",
    icon: <EmojiTransportationIcon />,
    subtabs: [
      {
        label: "Ridership",
        path: "/tools/transit/ridership",
        icon: <DirectionsBusIcon />,
      },
      {
        label: "Timetable",
        path: "/tools/transit/timetable",
        icon: <DepartureBoardIcon />,
      },
    ],
  },
  {
    label: "IPT",
    path: "/tools/ipt",
    icon: <ElectricRickshawIcon />,
  },
];

export default function SideBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");
  const drawerWidth = 200;

  useEffect(() => {
    console.log(pathname);
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <div>
      <Drawer
        variant="permanent"
        position="absolute"
        anchor="left"
        open={true}
        sx={{
          width: drawerWidth,
          // flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        className={styles.sidebar}
      >
        <Toolbar />
        <SideBarList router={router} currentPath={currentPath} />
      </Drawer>
    </div>
  );
}

const SideBarList = ({ router, currentPath }) => {
  const redirectTo = (path) => {
    router.push(path);
  };

  const isSelected = (itemPath) => currentPath?.includes(itemPath);
  const isCollapseOpen = (itemPath) => {
    let basePath = itemPath?.split("/").slice(0, -1).join("/");
    return currentPath?.includes(basePath);
  };
  return (
    <Box sx={{ width: "auto" }} role="presentation">
      <List component="nav">
        {sideBarTabs.map((item, index) => (
          <>
            <ListItemButton
              key={item?.label}
              selected={!item?.subtabs && isSelected(item?.path)}
              onClick={() => redirectTo(item?.path)}
            >
              <ListItemIcon>{item?.icon}</ListItemIcon>
              <ListItemText primary={item?.label} />
              {item?.subtabs &&
                (isCollapseOpen(item?.path) ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            <Collapse
              in={isCollapseOpen(item?.path)}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {item?.subtabs &&
                  item?.subtabs?.map((subItem, subIndex) => (
                    <ListItemButton
                      key={`${index}+${subIndex}`}
                      sx={{ pl: 4 }}
                      selected={isSelected(subItem?.path)}
                      onClick={() => redirectTo(subItem?.path)}
                    >
                      <ListItemIcon>{subItem?.icon}</ListItemIcon>
                      <ListItemText primary={subItem?.label} />
                    </ListItemButton>
                  ))}
              </List>
            </Collapse>
          </>
        ))}
      </List>
    </Box>
  );
};
