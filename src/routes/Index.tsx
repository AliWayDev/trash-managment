// Routes
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

interface IProps {
  token: string | null;
}

export const Index = (props: IProps) => {
  const { token } = props;

  const isUserLoggedIn = token ? <PrivateRoutes /> : <PublicRoutes />;

  return <>{isUserLoggedIn}</>;
};
