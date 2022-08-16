import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { useLoginMutation } from "../store/apis/auth.api";
import { checkToken } from "../store/slices/userSlice";

export const Login = () => {
  const [fetch, { data }] = useLoginMutation();
  const dispatch = useDispatch();

  const login = () => {
    fetch({
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    });
  };

  useEffect(() => {
    const checkUserLoggedIn = () => {
      dispatch(checkToken(data?.token));
    };

    checkUserLoggedIn();
  }, [data, dispatch]);

  return (
    <>
      <div>Login</div>
      <button onClick={login}>Send</button>
      <Link to="/signup">or sign up</Link>
    </>
  );
};
