// Dep
import { Navigate, Route, Routes } from "react-router-dom";

//Pages
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
