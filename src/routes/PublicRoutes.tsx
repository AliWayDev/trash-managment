// Dep
import { Route, Navigate } from "react-router-dom";

// Pages
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Routes } from "react-router-dom";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
