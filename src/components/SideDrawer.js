import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import styles from "src/css/page.module.css";
import { Toolbar } from "@mui/material";

export default function SideDrawer() {
  const [state, setState] = React.useState(false);

  const sideBarItems = ["Dashboard", "Transit", "IPT", "Logout"];

  const toggleDrawer = (open) => {
    // if (
    //   event &&
    //   event.type === "keydown" &&
    //   (event.key === "Tab" || event.key === "Shift")
    // ) {
    //   return;
    // }

    setState(open);
  };

  const list = () => (
    <Box sx={{ width: "auto" }} role="presentation">
      <List>
        {sideBarItems.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const drawerWidth = 200;

  return (
    <div>
      <Drawer
        variant="permanent"
        position="absolute"
        anchor="left"
        // onClose={toggleDrawer(false)}
        // onOpen={toggleDrawer(true)}
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
        {list("left")}
      </Drawer>
    </div>
  );
}
