import Box from "@mui/material/Box/Box";
import Sidebar from "../components/Sidebar/Sidebar";

export const Dashboard = () => {
  // const logOut = () => {
  //   window.localStorage.removeItem("token");
  //   navigate("/login");
  // };

  return (
    <Box>
      <Sidebar />
    </Box>
  );
};
