import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Commemorative from "./pages/Commemorative/Commemorative";
import Exclusive from "./pages/Exclusive/Exclusive";
import Investment from "./pages/Investment/Investment";
const App = () => {
  
  return (
    <div className="ml-6 mt-3">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/commermorative" element={<Commemorative />} />
        <Route path="/exclusive" element={<Exclusive />} />
        <Route path="/investment" element={<Investment />} />
      </Routes>
    </div>
  );
};

export default App;
