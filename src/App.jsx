import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"; // ✅ Import Home
import About from "./Components/About";
import Cards from "./Components/Cards";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />       {/* ✅ Home route */}
        <Route path="/about" element={<About />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </Router>
  );
}

export default App;
