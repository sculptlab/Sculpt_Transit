import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import styles from "src/css/page.module.css";
import { Collapse } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import sideBarTabs from "./SideBarTabs";
import Logo from "./Logo";

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
          [`& .MuiDrawer-paper`]: {
            overflowX: "hidden",
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: (theme) => theme.palette.secondary.main,
            color: (theme) => theme.palette.secondary.contrastText,
          },
        }}
        className={styles.sidebar}
      >
        <Logo />
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
            <SideBarButton
              key={index}
              selected={!item?.subtabs && isSelected(item?.path)}
              onClick={() => redirectTo(item?.path)}
              icon={item?.icon}
              label={item?.label}
              collapsible={item?.subtabs}
              collpaseOpen={isCollapseOpen(item?.path)}
            />
            <Collapse
              in={isCollapseOpen(item?.path)}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {item?.subtabs &&
                  item?.subtabs?.map((subItem, subIndex) => (
                    <SideBarButton
                      key={`${index}+${subIndex}`}
                      selected={isSelected(subItem?.path)}
                      onClick={() => redirectTo(subItem?.path)}
                      icon={subItem?.icon}
                      label={subItem?.label}
                      sx={{ pl: 4 }}
                    />
                  ))}
              </List>
            </Collapse>
          </>
        ))}
      </List>
    </Box>
  );
};

const SideBarButton = ({
  key,
  sx,
  selected,
  onClick,
  icon,
  label,
  collapsible,
  collapseOpen,
}) => {
  return (
    <ListItemButton
      key={key}
      sx={{
        ...sx,
        width: "100%",
        ["&.Mui-selected"]: {
          borderTopLeftRadius: (theme) => theme.shape.borderRadius,
          borderBottomLeftRadius: (theme) => theme.shape.borderRadius,
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.primary.contrastText,
          "&:hover": {
            backgroundColor: (theme) => theme.palette.primary.main,
          },
        },
      }}
      disableRipple={selected}
      selected={selected}
      onClick={onClick}
    >
      <ListItemIcon
        sx={{
          color: selected
            ? (theme) => theme.palette.primary.contrastText
            : (theme) => theme.palette.primary.main,
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText primary={label} />
      {collapsible && (collapseOpen ? <ExpandLess /> : <ExpandMore />)}
    </ListItemButton>
  );
};
