import { Index } from "./routes/Index";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const token = useSelector((state) => state.token.token);

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <>
      <Index token={token} />
    </>
  );
}

export default App;
  