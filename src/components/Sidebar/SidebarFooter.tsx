import React, { useState } from "react";
import Box from "@mui/material/Box/Box";
import Logout from "./Logout";
import SettingMenu from "./SettingMenu";
import Avatar from "@mui/material/Avatar/Avatar";
import Menu from "@mui/material/Menu/Menu";
import IconButton from "@mui/material/IconButton/IconButton";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import Paper from "@mui/material/Paper";

import { Image } from "mui-image";

const SidebarFooter = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Paper elevation={3}>
        <Box
          sx={{
            height: "40px",
            backgroundColor: "#dddddd",
            padding: "15px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Logout />
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 40, height: 40 }}>
                  <Image
                    src="https://res.cloudinary.com/dh2t0zrxd/image/upload/v1662729402/photo_2022-01-25_19-23-36_cswa3u.jpg"
                    alt="profile"
                  />
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>

          <Menu
            sx={{
              position: "absolute",
              top: "-80px",
              right: "0",
              transition: "0.3s ease-in-out",
            }}
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <SettingMenu />
          </Menu>
        </Box>
      </Paper>
    </Box>
  );
};

export default SidebarFooter;
