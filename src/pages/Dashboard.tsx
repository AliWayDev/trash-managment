import Box from "@mui/material/Box/Box";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import Sidebar from "../components/Sidebar/Sidebar";

export const Dashboard = () => {
  // const logOut = () => {
  //   window.localStorage.removeItem("token");
  //   navigate("/login");
  // };

  return (
    <Box>
      <Box sx={{display:'flex'}}>
        <Sidebar />
        <DashboardHeader />
      </Box>
    </Box>
  );
};
