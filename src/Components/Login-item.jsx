import React from "react";
import { TextField, Button } from "@mui/material";
import GoogleComponent from "./GoogleComponent";
function Login_item() {
  return (
    <div className="login-item ">
      <div className="login-item__title">
        <h1>Log-in</h1>
      </div>
      <form className="login-item__form mb-2">
        <TextField
          className="login-item__input mb-1"
          id="standard-basic"
          label="Email"
          variant="standard"
        />

        <TextField
          id="standard-password-input"
          className="login-item__input mb-2"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <Button variant="contained">Log-in</Button>
      </form>
      <hr className="mb-2" />
      <div className="login-item__bottom">

      <GoogleComponent />
      </div>
    </div>
  );
}

export default Login_item;
