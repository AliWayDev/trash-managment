import { useAppDispatch } from "./../hooks/index";
import { Link } from "react-router-dom";

import { useLoginMutation } from "../store/apis/auth.api";
import { checkToken } from "../store/slices/userSlice";

export const Login = () => {
  const [fetch, { data }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const login = () => {
    fetch({
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    }).then(() => {
      dispatch(checkToken(data?.token));
    });
  };

  return (
    <>
      <div>Login</div>
      <button onClick={login}>Send</button>
      <Link to="/signup">or sign up</Link>
    </>
  );
};
