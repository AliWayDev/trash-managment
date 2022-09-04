// Routes
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const Index = () => {
  const isThereToken = window.localStorage.getItem("token");

  // useEffect(() => {
  //   if (isThereToken != null) {
  //     navigate("/");
  //   }
  // }, [isThereToken]);

  const isUserLoggedIn =
    isThereToken != null ? <PrivateRoutes /> : <PublicRoutes />;

  return <>{isUserLoggedIn}</>;
};
