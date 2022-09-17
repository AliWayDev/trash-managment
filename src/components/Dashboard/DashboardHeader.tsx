import React from "react";
import Box from "@mui/material/Box/Box";
import Avatar from "@mui/material/Avatar";

const DashboardHeader = () => {
  return (
    <Box className="dashboardHeader">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          alt="Trash headshot"
          src=""
          sx={{ width: 50, height: 50,  }}
        />

        <h2 style={{ marginLeft: "34px" }}>Trash headshot</h2>
        <span className="indicator"></span>
        <p style={{ fontSize: "18px", color: "#0D6953" }}>32</p>
      </Box>
    </Box>
  );
};

export default DashboardHeader;
