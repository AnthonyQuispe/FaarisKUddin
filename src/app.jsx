import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import "./Styles/_global.scss";

export default function app() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}
