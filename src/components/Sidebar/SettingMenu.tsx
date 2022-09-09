import React from "react";

import { MenuItem } from "@mui/material/";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider/Divider";
import SettingsIcon from "@mui/icons-material/Settings";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import HelpIcon from "@mui/icons-material/Help";

const SettingMenu = () => {
  return (
    <div>
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
    </div>
  );
};

export default SettingMenu;
