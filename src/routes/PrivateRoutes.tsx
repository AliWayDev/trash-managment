// Dep
import { Navigate, Route, Routes } from "react-router-dom";

//Pages
import { Dashboard } from "../pages/Dashboard";

export const PrivateRoutes = () => {
  return (  
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
