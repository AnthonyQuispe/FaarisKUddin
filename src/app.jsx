import React from "react";
import Landing from "./Pages/Landing/Landing";
import Contact from "./Pages/Contact/Contact";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "./Pages/Terms/Term";
import NotFound from "./Pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
import "./Styles/_global.scss";
import QRRedirect from "./Pages/QRRedirect/QRRedirect";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/qr/:id" element={<QRRedirect />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
