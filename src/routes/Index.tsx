// Routes
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

interface IProps {
  token: string | null;
}

export const Index = (props: IProps) => {
  const { token } = props;

  const isUserLoggedIn = token !== null ? <PrivateRoutes /> : <PublicRoutes />;

  return <>{isUserLoggedIn}</>;
};
