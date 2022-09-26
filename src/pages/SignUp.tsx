import { Box, Typography, TextField, Button } from "@mui/material";

import { Link } from "react-router-dom";
import { useRef } from "react";

export const SignUp = () => {
  //refs
  const name = useRef<HTMLInputElement>();
  const email = useRef<HTMLInputElement>();
  const password = useRef<HTMLInputElement>();

  const signup = () => {
    let data = {
      name: name.current?.value || "",
      email: email.current?.value || "",
      password: password.current?.value || "",
    };

    console.log(data);
  };

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
          <Typography
            sx={{
              color: "black",
              fontSize: "25px",
              fontWeight: "bold",
              paddingBottom: "25px",
            }}
          >
            SignUp
          </Typography>
          <Box>
            <TextField
              id="name"
              label="Name"
              type="text"
              variant="standard"
              sx={{
                width: "100%",
                paddingBottom: "15px",
              }}
              defaultValue="Abduraim"
              inputRef={name}
            />
            <br />
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
          <Button onClick={signup} variant="contained">
            Send
          </Button>
          <Box>
            <Typography
              sx={{
                paddingTop: "20px",
                fontSize: "13px",
                color: "#1769aa",
              }}
            >
              or signup with <Link to="#">SSO</Link>
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
            You had a account <Link to="/login">Login</Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};
