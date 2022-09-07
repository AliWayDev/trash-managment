import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useLoginMutation } from "../store/apis/auth.api";

export const Login = () => {
  const navigate = useNavigate();
  const [fetch, { data }] = useLoginMutation();

  const login = () => {
    fetch({
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    });
  };

  useEffect(() => {
    const setToken = (token: string | null | undefined) => {
      if (token != null) {
        window.localStorage.setItem("token", token);

        navigate("/");
      }
    };

    setToken(data?.token);
  }, [data, navigate]);

  return (
    <>
      <div>Login</div>
      <button onClick={login}>Send</button>
      <Link to="/signup">or sign up</Link>
    </>
  );
};
