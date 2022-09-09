import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import Box from "@mui/material/Box";

const Logout = () => {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await swal({
      title: "Are you sure?",
      text: "Are you sure that you want to log-out from your profile?",
      icon: "warning",
      buttons: ["Cancel", "Ok!"],
      dangerMode: true,
    }).then((logoutHandler: any) => {
      if (logoutHandler) {
        window.localStorage.removeItem("token");
        navigate("/login");
      }
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={logoutHandler}
    >
      <LogoutIcon sx={{ transform: "rotate(180deg)", marginRight: "8px" }} />{" "}
    </Box>
  );
};

export default Logout;
