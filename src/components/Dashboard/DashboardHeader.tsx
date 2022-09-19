import Box from "@mui/material/Box/Box";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";

const DashboardHeader = () => {
  return (
    <Box className="dashboardHeader">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          alt="Trash headshot"
          src=""
          sx={{ width: 50, height: 50,  }}
        />

        <Typography style={{ marginLeft: "34px", fontSize: '22px', fontWeight: 'bold' }}>Trash headshot</Typography>
        <span className="indicator"></span>
        <Typography style={{ fontSize: "18px", color: "#0D6953" }}>32</Typography>
      </Box>
    </Box>
  );
};

export default DashboardHeader;
