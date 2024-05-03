import React from "react";
import { Route, Routes } from "react-router-dom";
import ReactApp from "../components/ReactApp/ReactApp";
import NotFound from "../components/NotFound/NotFound";
import OtpValidator from "../screens/otpValidator/otpValidator";
import Xoxo from "../screens/xoxo/xoxo";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/test" element={<ReactApp />} />

      <Route path="/otpValidator" element={<OtpValidator />} />

      <Route path="/xoxo" element={<Xoxo />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
