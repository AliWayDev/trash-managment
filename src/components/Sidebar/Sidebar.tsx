import  Box  from "@mui/material/Box";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import { Image } from "mui-image";

import SidebarFooter from "./SidebarFooter";

const Sidebar: React.FC = () => {
  return (
    <Box
      sx={{
        width: "260px",
        height: "100vh",
        borderRight: "1px solid #222",
        position: "relative",
      }}
    >
      <Box
        sx={{
          padding: "15px 20px",
        }}
      >
        <Image
          width="160px"
          src="https://res.cloudinary.com/muslim-engineers-community/image/upload/v1662553365/Group_1_wzqutl.svg"
          alt="logo"
        />
      </Box>
      <Box
        sx={{
          marginTop: "30px",
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Notifications" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box className="sidebarFooter">
        <SidebarFooter />
      </Box>
    </Box>
  );
};

export default Sidebar;
