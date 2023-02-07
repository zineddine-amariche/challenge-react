import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Layout from "../components/layouts/ProjectLayout";
// import Layout from "../components/layouts/ProjectLayout";
import Login from "../pages/Auth/Login";
import Home from "../pages/home";
import InnerContent from "./Contents";
import ProtectedRoutes from "./Protected/ProtectedRoutes";
import PublicRoutes from "./Public/PublicRoutes";

const MainRoutes = () => (
  <Routes>
    {/** Public Routes */}
    <Route path="/" element={<ProtectedRoutes/>}>
    <Route path="/" element={<InnerContent />}>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate replace to="home" />} />
        <Route path="home" element={<Home/>} />
      </Route>
    </Route>
    </Route>
    <Route path="login" element={<PublicRoutes />}>
      <Route path="/login" element={<Login />} />
    </Route>
  </Routes>
);

export default MainRoutes;
