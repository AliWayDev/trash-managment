import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Image } from "mui-image";

const Sidebar: React.FC = () => {
  return (
    <Box
      sx={{
        width: "260px",
        height: "100vh",
        borderRight: "1px solid #222",
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
    </Box>
  );
};

export default Sidebar;