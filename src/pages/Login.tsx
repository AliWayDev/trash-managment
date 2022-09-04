import { useAppDispatch } from "./../hooks/index";
import { Link } from "react-router-dom";
import Login_item from "../Components/Login-item";

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
      <div className="login">
        <Login_item />
      </div>
    </>
  );
};
