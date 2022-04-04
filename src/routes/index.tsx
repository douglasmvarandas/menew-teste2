import { Routes, Route } from "react-router-dom";
import {Dashboard} from "../pages/dashboard"
import { NotFound } from "../pages/notFound";
import { Signin } from "../pages/signin";
import { Signup } from "../pages/signup";

export const MainRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}