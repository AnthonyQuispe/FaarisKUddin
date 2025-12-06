import React, { useEffect } from "react";
import Landing from "./Pages/Landing/Landing";
import Contact from "./Pages/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import "./Styles/_global.scss";

export default function App() {
  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight;
      window.parent.postMessage({ type: "setHeight", height }, "*");
    };

    // Send height initially
    sendHeight();

    // Optional: update height on resize
    window.addEventListener("resize", sendHeight);

    return () => {
      window.removeEventListener("resize", sendHeight);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
