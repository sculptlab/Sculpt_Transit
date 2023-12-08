import ElectricRickshawIcon from "@mui/icons-material/ElectricRickshaw";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import RouteIcon from "@mui/icons-material/Route";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MapIcon from "@mui/icons-material/Map";

const SideBarTabs = [
  {
    label: "Dashboard",
    path: "/tools/operational/dashboard",
    icon: <DashboardIcon />,
  },
  {
    label: "Transit",
    path: "/tools/operational/transit/ridership",
    icon: <EmojiTransportationIcon />,
    subtabs: [
      {
        label: "Ridership",
        path: "/tools/operational/transit/ridership",
        icon: <DirectionsBusIcon />,
      },
      {
        label: "Routes",
        path: "/tools/operational/transit/routes",
        icon: <RouteIcon />,
      },
    ],
  },
  {
    label: "IPT",
    path: "/tools/operational/ipt",
    icon: <ElectricRickshawIcon />,
  },
  {
    label: "Zones",
    path: "/tools/operational/zones",
    icon: <MapIcon />,
  },
];

export default SideBarTabs;
