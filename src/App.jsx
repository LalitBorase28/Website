import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Add this line to handle any undefined paths or hash mismatches */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
