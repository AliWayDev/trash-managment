import { Index } from "./routes/Index";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const App: React.FC = () => {
  const navigate = useNavigate();
  let token: string | null = window.localStorage.getItem("token");

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <>
      <Index token={token} />
    </>
  );
}

export default App;
