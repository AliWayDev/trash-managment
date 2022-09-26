import { Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    const swalConfig = {
      title: "Are you sure?",
      text: "Are you sure that you want to log-out from your profile?",
      icon: "warning",
      buttons: ["Cancel", "Ok!"],
      dangerMode: true,
    };

    await swal(swalConfig).then((logoutHandler: any) => {
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
      <LogoutIcon sx={{ transform: "rotate(180deg)", marginRight: "8px" }} />
    </Box>
  );
};

export default Logout;
