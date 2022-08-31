import { Index } from "./routes/Index";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Login } from "./pages/Login";

function App() {
  // const token = useSelector((store: any) => store.token.token);

  // useEffect(() => {
  //   console.log(token);
  // }, [token]);

  return (
    <>
    <Login/>
      {/* <Index token={token} /> */}
    </>
  );
}

export default App;
  