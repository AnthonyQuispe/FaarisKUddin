import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Contact from "./Pages/Contact/Contact";
import "./Styles/_global.scss";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/contact"
        element={<Contact />}
        handle={{
          title: "Contact | Faaris Uddin Law",
          meta: [
            {
              name: "description",
              content:
                "Schedule a free consultation with Faaris Uddin Law. Contact us by phone, email, or send us a message through our secure consultation form.",
            },
          ],
        }}
      />
    </Routes>
  );
}
