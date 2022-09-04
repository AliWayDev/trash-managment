// Routes
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Index = () => {
  const isThereToken = window.localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (isThereToken != null) {
      navigate("/");
    }
  }, [isThereToken]);

  const isUserLoggedIn =
    isThereToken != null ? <PrivateRoutes /> : <PublicRoutes />;

  return <>{isUserLoggedIn}</>;
};
