import { Box, Typography, TextField, Button } from "@mui/material";
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useLoginMutation } from "../store/apis/auth.api";

export const Login = () => {
  const navigate = useNavigate();

  //fetchs
  const [fetch, { data, isError }] = useLoginMutation();

  //refs
  const email = useRef<HTMLInputElement>();
  const password = useRef<HTMLInputElement>();

  const login = () => {
    fetch({
      email: email.current?.value || "",
      password: password.current?.value || "",
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

  const isThereError = isError && (
    <>
      <Box
        sx={{
          background: "red",
          padding: "10px",
          color: "white",
          marginBottom: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
          }}
        >
          There is error, please check and try again
        </Typography>
      </Box>
    </>
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexFlow: "column",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          background: "#222",
        }}
      >
        <Box
          sx={{
            width: "15%",
            background: "white",
            textAlign: "center",
            borderRadius: "5px",
            padding: "30px",
          }}
        >
          {isThereError}
          <Typography
            sx={{
              color: "black",
              fontSize: "25px",
              fontWeight: "bold",
              paddingBottom: "25px",
            }}
          >
            Login
          </Typography>
          <Box>
            <TextField
              id="e-mail"
              label="E-mail"
              type="email"
              variant="standard"
              sx={{
                width: "100%",
                paddingBottom: "15px",
              }}
              defaultValue="eve.holt@reqres.in"
              inputRef={email}
            />
            <br />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="standard"
              sx={{
                width: "100%",
                paddingBottom: "35px",
              }}
              defaultValue="cityslicka"
              inputRef={password}
            />
          </Box>
          <Button onClick={login} variant="contained">
            Login
          </Button>
          <Box>
            <Typography
              sx={{
                paddingTop: "20px",
                fontSize: "13px",
                color: "#1769aa",
              }}
            >
              or login with <Link to="#">SSO</Link>
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#9e9e9e",
              fontSize: "15px",
              marginTop: "35px",
            }}
          >
            Don't have an account so just <Link to="/signup">SignUp</Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};
