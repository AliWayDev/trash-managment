import { MenuItem, ListItemIcon, Divider } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import HelpIcon from "@mui/icons-material/Help";

const SettingMenu: React.FC = () => {
  
  return (
    <>
      <MenuItem>
        <SettingsIcon sx={{ marginRight: "10px" }} /> Setting
      </MenuItem>
      <MenuItem>
        <CircleNotificationsIcon sx={{ marginRight: "10px" }} /> Notification
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>{<HelpIcon />}</ListItemIcon>
        Help
      </MenuItem>
    </>
  );
};

export default SettingMenu;
