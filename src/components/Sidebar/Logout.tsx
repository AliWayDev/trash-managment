import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import Box from "@mui/material/Box";

const Logout = () => {
  const navigate = useNavigate();
  const willLogout = async () => {
    await swal({
      title: "Are you sure?",
      text: "Are you sure that you want to log-out from your profile?",
      icon: "warning",
      buttons: ["Cancel", "Ok!"],
      dangerMode: true,
    }).then((willLogout:any) => {
      if (willLogout) {
        window.localStorage.removeItem("token");
        navigate("/login");
      } else {
      }
    });
  };
  //

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
      }}
      className="logOut"
      onClick={willLogout}
    >
      <LogoutIcon sx={{ transform: "rotate(180deg)", marginRight: "8px" }} />{" "}
      <h4 className="logOut__title">Log-out</h4>
    </Box>
  );
};

export default Logout;
